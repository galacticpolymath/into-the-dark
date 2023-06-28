import BasicSim from './BasicSim'
import setup_sliders from './Sim3_sliders.js'
import parameters from './parameters'
import * as d3 from 'd3'

class Sim3 extends BasicSim {
    constructor () {
        const params = parameters.mode3;
        super(params);
        this.params = params;

        d3.select('#controls')
            .style('height', '550px')
            .select('svg')
            .style("height", "270px")
            .style("width", "500px")
            .attr('viewBox', '0 0 500 270');

        d3.select('#control-text')
            .html('Imagine these fish are swimming in open water on a sunny day. <br/>\
                Any single fish could become easy prey for a larger predatory fish. <p/>\
                Swimming in a larger group can make it more difficult for predators <br/>\
                to lock onto a single target. But schooling is not just about <br/>\
                but how well you align with other fish in your group.<p/>\
                Explore how <i>Alignment</i> affects schooling behavior.<p/>\
                <b>Questions</b>:<p/>\
                Does one of these variables alone seem to cause schooling, <br/>\
                or is there a combination that works best to cause the fish <br/>\
                to group together?');

        setup_sliders(this.params);
    }
}

export default function load () {
    document.getElementById("sim").innerHTML = '';
	const sim = new Sim3();
}