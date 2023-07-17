import BasicSim from './BasicSim'
import setup_sliders from './Sim5_sliders.js'
import {setup_chart, chart_tick} from './Sim5_chart.js'
import * as d3 from "d3";
import parameters from './parameters'
import setup_modal from './Sim5_modal'

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
        this.total = 0;
        this.mean_hidden = 0;
        this.best_score = 0;
        this.data = new Array(1000).fill(0);

        d3.select("#controls")
            .style("height", "570px")
            .select("svg")
            .style("height", "420")
            .style("width", "450px")
            .attr("viewBox", `0 0 450 420`);

        setup_sliders(this.params);
        setup_chart(this.data);
        setup_modal();
    }

    initialize(params) {
        this.total = 0;
        this.mean_hidden = 0;
        this.best_score = 0;
        this.data = new Array(1000).fill(0);
        d3.select('#line').datum(this.data)
        super.initialize(params)
    }

    go() {
        super.go();

        const n_hidden = this.agents.reduce((acc, a) => acc + a.ishidden, 0);
        const frac_hidden = n_hidden / this.params.N
        this.total += Math.min(.99, frac_hidden);
        this.total -= this.data[0]
        this.mean_hidden = this.total / 1000;

        chart_tick(this.data, frac_hidden, this.mean_hidden, this.best_score);
        this.best_score = Math.max(this.best_score, this.mean_hidden);
    }
}

export default function load () {
    document.getElementById("sim").innerHTML = '';
	const sim = new Sim5();

    return sim;
}