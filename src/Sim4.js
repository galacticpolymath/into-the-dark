import BasicSim from './BasicSim'
import setup_sliders from './Sim4_sliders.js'
import setup_modal from './Sim4_modal'
import * as d3 from "d3";
import parameters from './parameters'

class Sim4 extends BasicSim {
    constructor () {
        const params = parameters.mode4;
        params.alignment_radius = params.al_def;
        params.dark_al = params.al_def;
        params.attraction_radius = params.ar_def;
        params.dark_ar = params.ar_def;
        params.speed_in_the_dark = params.speed_def;
        params.speed_in_the_light = params.speed_def;
        super(params);
        this.params = params;

        d3.select("#controls")
            .select("svg")
            .style("width", "100%")
            .attr("viewBox", `0 0 500 350`);

        d3.select('#overhead-text')
            .html('<b>Question</b>: \
            <p>How can you configure the sliders below to maximize \
            the time in the dark for an average fish?');

        d3.select('#control-text')
            .html('<b>Question</b>: \
            <p>How can you configure the sliders below to maximize \
            the time in the dark for an average fish?');

        setup_sliders(params);
        setup_modal();
    }
}

export default function load () {
    document.getElementById("sim").innerHTML = '';
	const sim = new Sim4();

    return sim;
}