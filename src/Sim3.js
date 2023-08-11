import BasicSim from './BasicSim'
import setup_sliders from './Sim3_sliders.js'
import setup_modal from './Sim3_modal.js'
import parameters from './parameters'
import * as d3 from 'd3'

class Sim3 extends BasicSim {
    constructor () {
        const params = parameters.mode3;
        params.alignment_radius = params.al_def;
        params.attraction_radius = params.ar_def;
        super(params);
        this.params = params;

        d3.select('#controls')
            .select('svg')
            .style("width", "100%")
            .attr('viewBox', '0 0 500 270');

        d3.select('#overhead-text')
            .html('<b>Question:</b><p/>\
                Does one of these variables alone seem to cause schooling, \
                or is there a combination that works best to cause the fish \
                to group together?');

        d3.select('#control-text')
            .html('<b>Question:</b><p/>\
                Does one of these variables alone seem to cause schooling, \
                or is there a combination that works best to cause the fish \
                to group together?');

        this.sliders = setup_sliders(this.params);
        setup_modal();
    }

    reset(params) {
        this.sliders.al_slider.value(this.params.al_def)
        this.sliders.ar_slider.value(this.params.ar_def)
    
        this.initialize(this.params);
    }
}



export default function load () {
    document.getElementById("sim").innerHTML = '';
	const sim = new Sim3();

    return sim;
}