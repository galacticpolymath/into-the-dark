"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[141],{141:(t,a,r)=>{r.r(a),r.d(a,{chart_tick:()=>y,setup_chart:()=>x});var e=r(8508);const n=e.WUZ(".0%"),i={top:10,right:30,bottom:20,left:50},s=420-i.left-i.right,p=150-i.top-i.bottom,l=e.BYU().domain([0,999]).range([0,s]),d=e.BYU().domain([0,1]).range([p,0]),o=e.jvg().x((function(t,a){return l(a)})).y((function(t,a){return d(t)})).curve(e.c_6);function x(t){const a=e.Ys("#control-text").append("svg").attr("id","#chart").attr("viewBox","0 0 415 180"),r=a.append("g").attr("transform",`translate(${i.left}, ${i.top+15})`);r.append("defs").append("clipPath").attr("id","clip").append("rect").attr("width",s).attr("height",p),r.append("g").attr("class","axis axis--x").attr("transform","translate(0,"+d(0)+")").call(e.LLu(l).ticks(0)),r.append("g").attr("class","axis axis--y").call(e.y4O(d).ticks(5).tickFormat(e.WUZ(".0%"))),r.append("g").attr("clip-path","url(#clip)").append("path").datum(t).attr("id","line").transition().duration(500).ease(e.Nyw),r.append("line").attr("id","avg-line").style("stroke-width",1).style("stroke","darkgray").attr("x1",1).attr("y1",d(0)).attr("x2",s).attr("y2",d(0)),r.append("line").attr("id","best-line").style("stroke-width",1).style("stroke","#cb1f83").attr("x1",1).attr("y1",d(0)).attr("x2",s).attr("y2",d(0)),a.append("text").attr("id","y-label").attr("x",0).attr("y",10).text("% fish in the dark").style("font-size","12px").attr("transform","translate(2,130)rotate(270)");a.append("line").style("stroke-width",1).style("stroke","#cb1f83").attr("x1",295).attr("y1",165).attr("x2",305).attr("y2",165),a.append("text").attr("id","high").attr("x",307).attr("y",170).text("High: 0%"),a.append("line").style("stroke-width",1).style("stroke","darkgray").attr("x1",170).attr("y1",165).attr("x2",180).attr("y2",165),a.append("text").attr("id","running-avg").attr("x",182).attr("y",170).text("Average: 0%"),a.append("line").style("stroke-width",1).style("stroke","blue").attr("x1",45).attr("y1",165).attr("x2",55).attr("y2",165),a.append("text").attr("id","current").attr("x",57).attr("y",170).text("Current: 0%")}function y(t,a){const r=Math.min(.99,t.mean_hidden),i=Math.min(.99,t.best_score),s=t.data;s.push(a),e.Ys("#line").attr("d",o).attr("transform",null).transition().attr("transform","translate("+l(-1)+",0)"),r>i&&(e.Ys("#best-line").attr("y1",d(r)).attr("y2",d(r)),e.Ys("#high").text(`High: ${n(r.toFixed(2))}`)),e.Ys("#avg-line").attr("y1",d(r)).attr("y2",d(r)),e.Ys("#running-avg").text(`Average: ${n(r.toFixed(2))}`),e.Ys("#current").text(`Current: ${n(a.toFixed(2))}`),s.shift()}}}]);