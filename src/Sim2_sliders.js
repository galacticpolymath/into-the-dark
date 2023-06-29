import * as d3 from 'd3';
import {sliderHorizontal} from 'd3-simple-slider';


export default (params) => {
    const svg = d3.select("#controls").select('svg')
    const sliders_y = 100;
    const slider_spacing = 90;
    const slider_width = 410;

    const go_button = d3.select('#controls').select('.button')
        .attr('transform', `translate(${slider_width / 2 + 10}, ${params.widgets.playbutton_size/2 + 5})`)

    const n_slider = sliderHorizontal().min(1).max(30).step(1).width(slider_width - 20)
        .tickValues([1, 15, 30])
        //.displayValue(false)
        .on('onchange', (val) => {
            params.N = val;
        });

    const n = svg.append('g')
        .call(n_slider)
        .attr('transform', `translate(10, ${sliders_y})`)

    svg.append("text")
        .text("N")
        //.attr("x", 20)
        .attr("y", sliders_y - 20);


    const ar_slider = sliderHorizontal().min(0).max(10).step(1).width(slider_width - 20)
        .tickValues([0, 5, 10])
        //.displayValue(false)
        .on('onchange', (val) => {
            params.attraction_radius = val * 4;
        });

    const ar = svg.append('g')
        .call(ar_slider)
        .attr('transform', `translate(10, ${sliders_y + slider_spacing})`)

    svg.append("text")
        .text("Attraction Radius")
        //.attr("x", 20)
        .attr("y", sliders_y + slider_spacing - 20);
}


