import * as d3 from 'd3';
import * as widgets from "d3-widgets"
import { Duration, DateTime } from 'luxon';

export default (sim) => {
    const params = sim.params;
    const go_button = widgets.button().actions(["play","pause"])
    const buttons = [go_button];
    let reset_button;

    if (sim.params.reset_enabled) {
        reset_button = widgets.button().actions(["rewind"])
        buttons.push(reset_button);

        reset_button.update(() => {
            if (go_button.value() == 1) { 
                go_button.click();
            }
            sim.initialize(sim.params);
        })
    }

    go_button.size(params.widgets.playbutton_size);
    d3.select('#controls').select('svg').selectAll(".button").data(buttons).enter().append(widgets.widget)
        .attr('transform','translate(250, 250)');

    go_button.update(()=> {
        if (go_button.value() == 1) {
            if (sim.start) { sim.start = DateTime.now(); }
            sim.timer = d3.interval(()=>sim.go(), params.simulation.delay)
        } 
        else {
            if (sim.duration) {
                const end = DateTime.now();
                const diff = end.diff(sim.start, 'seconds');
                sim.duration += diff.seconds;
            }
            sim.timer.stop()
        }
    })
}