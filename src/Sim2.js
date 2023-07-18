import BasicSim from './BasicSim'
import setup_sliders from './Sim2_sliders.js'
import * as d3 from "d3";
import parameters from './parameters'

class Sim2 extends BasicSim {
    constructor () {
        const params = parameters.mode2;
        params.N = params.N_def;
        params.attraction_radius = params.ar_def;
        super(params);

        this.params = params;

        this.sliders = setup_sliders(params);

        this.N = params.N;

        d3.select('#controls')
            .style('height', '600px')
            .select('svg')
            .style("height", "230px")
            .style("width", "430px")
            .attr('viewBox', '0 0 430 230');

        d3.select('#control-text')
            .html('So far, the fish have all been moving randomly on their own. We<br/>\
                can simulate group behavior by introducing 2 new variables and<br/>\
                changing the algorithm (simulation rules). On this page, each<br/>\
                fish <i>(i)</i> will follow its nearest neighbor if it falls within the<br/>\
                defined attraction radius.<p/>\
                <b>Play with the sliders, explore, and observe! </b><p/>\
                New Variables:<br/>\
                • <b>N</b>: Number of fish <br/>\
                • <b>Attraction Radius</b>: the maximum distance a <br/>\
                nearest neighbor" can be for a fish to follow it. <p/>\
                <b>Questions for your exploration</b>: <p/>\
                1. How many fish are in a school? Is there a "magic number" N <br/>\
                for which schooling behavior emerges? <p/>\
                2. How does Attraction Radius affect schooling behavior?');

        
        //document.getElementById('#controls').select('table').remove();
    }

    go() {
        if (this.N != this.params.N) {
            this.N = this.params.N;
            this.initialize(this.params);
            return;
        }

        super.go()
    }

    reset() {
        this.sliders.n_slider.value(1)
        this.sliders.ar_slider.value(5)
        this.params.N = this.params.N_def;
        this.params.attraction_radius = this.params.ar_def;

        this.N = this.params.N;
        this.initialize(this.params);
    }
}

export default function load () {
    document.getElementById("sim").innerHTML = '';
	const sim = new Sim2();

    return sim;
}