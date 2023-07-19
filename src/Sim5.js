import BasicSim from './BasicSim'
import setup_sliders from './Sim5_sliders.js'
import {setup_chart, chart_tick} from './Sim5_chart.js'
import * as d3 from "d3";
import parameters from './parameters'
import setup_modal from './Sim5_modal'
import { Duration, DateTime } from "luxon";
import { updateAvg } from './utils';

class Sim5 extends BasicSim {
    constructor () {
        const params = parameters.mode5;
        params.alignment_radius = params.al_def;
        params.dark_al = params.al_def;
        params.attraction_radius = params.ar_def;
        params.dark_ar = params.ar_def;
        params.speed_in_the_dark = params.speed_def;
        params.speed_in_the_light = params.speed_def;
        super(params);
        this.params = params;

        this.params = params;
        this.mean_hidden = 0;
        this.best_score = 0;
        this.data = new Array(1000).fill(0);
        this.ticks = 1;
        this.start = DateTime.now();
        this.duration = Duration.fromObject({ seconds: 0 });
        this.avg_ar = 2;
        this.avg_al = 1;
        this.avg_s = 2;
        this.avg_ar_slider = 2;
        this.avg_al_slider = 2;
        this.avg_s_slider = 2;

        d3.select("#controls")
            .select("svg")
            .style("width", "100%")
            .attr("viewBox", `0 0 500 420`);

        this.sliders = setup_sliders(this.params);
        d3.select('#control-text').classed('notsim5', false);
        setup_chart(this.data);
        setup_modal();
    }

    reset(params) {
        this.total = 0;
        this.mean_hidden = 0;
        this.best_score = 0;
        this.ticks = 1;
        this.updateSliderAverages()
        this.duration = Duration.fromObject({ seconds: 0 });
        this.start = DateTime.now();
        this.data = new Array(1000).fill(0);
        d3.select('#line').datum(this.data)
        this.sliders.speed_slider.value(2)
        this.sliders.al_slider.value(1)
        this.sliders.ar_slider.value(2)
        params.alignment_radius = params.al_def;
        params.dark_al = params.al_def;
        params.attraction_radius = params.ar_def;
        params.dark_ar = params.ar_def;
        params.speed_in_the_dark = params.speed_def;
        params.speed_in_the_light = params.speed_def;
        this.avg_ar = 2;
        this.avg_al = 1;
        this.avg_s = 2;
        this.avg_ar_slider = 2;
        this.avg_al_slider = 2;
        this.avg_s_slider = 2;
        this.initialize(this.params);
    }

    updateSliderAverages() {
        const slider_setting = d3.scaleLinear()
            .domain([0, 4])
            .range([-1, 1]);
        let speedSliderVal = 2, arSliderVal = 2, alSliderVal = 1;
        if (this.sliders) {
            speedSliderVal = this.sliders.speed_slider.value();
            arSliderVal = this.sliders.ar_slider.value();
            alSliderVal = this.sliders.al_slider.value();
        }
        this.avg_s = updateAvg(this.avg_s, speedSliderVal, this.ticks);
        this.avg_ar = updateAvg(this.avg_ar, arSliderVal, this.ticks);
        this.avg_al = updateAvg(this.avg_al, alSliderVal, this.ticks);
        this.avg_ar_slider = slider_setting(this.avg_ar);
        this.avg_al_slider = slider_setting(this.avg_al * 2);
        this.avg_s_slider = slider_setting(this.avg_s);
    }

    go() {
        const maxDuration = Duration.fromObject({ seconds: 30 });

        const totalDuration = this.duration + DateTime.now().diff(this.start, 'seconds')
        //console.log(this.ticks, totalDuration.toString(), this.avg_s_slider);

        // If 30 seconds has elapsed, stop;
        if (totalDuration >= maxDuration) {
            if (this.timer.stop) {
                this.timer.stop()
            }
            return
        }

        super.go();

        const n_hidden = this.agents.reduce((acc, a) => acc + a.ishidden, 0);
        const frac_hidden = n_hidden / this.params.N;
        this.mean_hidden = updateAvg(this.mean_hidden, frac_hidden, this.ticks);

        this.ticks += 1;
        this.updateSliderAverages();

        chart_tick(this, frac_hidden);
        this.best_score = Math.max(this.best_score, this.mean_hidden);
    }
}

export default function load () {
    document.getElementById("sim").innerHTML = '';
	const sim = new Sim5();

    return sim;
}