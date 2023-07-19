"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[877,141,836,38],{1877:(t,a,e)=>{e.r(a),e.d(a,{default:()=>c});var r=e(8882),s=e(4038),i=e(141),n=e(8508),d=e(1263),l=e(1836),o=e(7126),h=e(3555);class p extends r.Z{constructor(){const t=d.Z.mode5;t.alignment_radius=t.al_def,t.dark_al=t.al_def,t.attraction_radius=t.ar_def,t.dark_ar=t.ar_def,t.speed_in_the_dark=t.speed_def,t.speed_in_the_light=t.speed_def,super(t),this.sliders=(0,s.default)(this.params),this.params=t,this.mean_hidden=0,this.best_score=0,this.data=new Array(1e3).fill(0),this.ticks=1,this.start=o.ou.now(),this.duration=o.nL.fromObject({seconds:0}),this.avg_ar=2,this.avg_al=1,this.avg_s=2,this.avg_ar_slider=2,this.avg_al_slider=2,this.avg_s_slider=2,n.Ys("#controls").select("svg").style("width","100%").attr("viewBox","0 0 450 420"),(0,i.setup_chart)(this.data),(0,l.default)()}reset(t){this.total=0,this.mean_hidden=0,this.best_score=0,this.ticks=1,this.updateSliderAverages(),this.duration=o.nL.fromObject({seconds:0}),this.start=o.ou.now(),this.data=new Array(1e3).fill(0),n.Ys("#line").datum(this.data),this.sliders.speed_slider.value(2),this.sliders.al_slider.value(1),this.sliders.ar_slider.value(2),t.alignment_radius=t.al_def,t.dark_al=t.al_def,t.attraction_radius=t.ar_def,t.dark_ar=t.ar_def,t.speed_in_the_dark=t.speed_def,t.speed_in_the_light=t.speed_def,this.avg_ar=2,this.avg_al=1,this.avg_s=2,this.avg_ar_slider=2,this.avg_al_slider=2,this.avg_s_slider=2,this.initialize(this.params)}updateSliderAverages(){const t=n.BYU().domain([0,4]).range([-1,1]);let a=2,e=2,r=1;this.sliders&&(a=this.sliders.speed_slider.value(),e=this.sliders.ar_slider.value(),r=this.sliders.al_slider.value()),this.avg_s=(0,h.tD)(this.avg_s,a,this.ticks),this.avg_ar=(0,h.tD)(this.avg_ar,e,this.ticks),this.avg_al=(0,h.tD)(this.avg_al,r,this.ticks),this.avg_ar_slider=t(this.avg_ar),this.avg_al_slider=t(2*this.avg_al),this.avg_s_slider=t(this.avg_s)}go(){const t=o.nL.fromObject({seconds:30});if(this.duration+o.ou.now().diff(this.start,"seconds")>=t)return void(this.timer.stop&&this.timer.stop());super.go();const a=this.agents.reduce(((t,a)=>t+a.ishidden),0)/this.params.N;this.mean_hidden=(0,h.tD)(this.mean_hidden,a,this.ticks),this.ticks+=1,this.updateSliderAverages(),(0,i.chart_tick)(this,a),this.best_score=Math.max(this.best_score,this.mean_hidden)}}function c(){return document.getElementById("sim").innerHTML="",new p}},141:(t,a,e)=>{e.r(a),e.d(a,{chart_tick:()=>c,setup_chart:()=>p});var r=e(8508);const s=r.WUZ(".0%"),i={top:10,right:30,bottom:20,left:50},n=420-i.left-i.right,d=150-i.top-i.bottom,l=r.BYU().domain([0,999]).range([0,n]),o=r.BYU().domain([0,1]).range([d,0]),h=r.jvg().x((function(t,a){return l(a)})).y((function(t,a){return o(t)})).curve(r.c_6);function p(t){const a=r.Ys("#control-text").append("svg").attr("id","#chart").attr("viewBox","0 0 415 180"),e=a.append("g").attr("transform",`translate(${i.left}, ${i.top+15})`);e.append("defs").append("clipPath").attr("id","clip").append("rect").attr("width",n).attr("height",d),e.append("g").attr("class","axis axis--x").attr("transform","translate(0,"+o(0)+")").call(r.LLu(l).ticks(0)),e.append("g").attr("class","axis axis--y").call(r.y4O(o).ticks(5).tickFormat(r.WUZ(".0%"))),e.append("g").attr("clip-path","url(#clip)").append("path").datum(t).attr("id","line").transition().duration(500).ease(r.Nyw),e.append("line").attr("id","avg-line").style("stroke-width",1).style("stroke","darkgray").attr("x1",1).attr("y1",o(0)).attr("x2",n).attr("y2",o(0)),e.append("line").attr("id","best-line").style("stroke-width",1).style("stroke","#cb1f83").attr("x1",1).attr("y1",o(0)).attr("x2",n).attr("y2",o(0)),a.append("text").attr("id","y-label").attr("x",0).attr("y",10).text("% fish in the dark").style("font-size","12px").attr("transform","translate(2,130)rotate(270)");a.append("line").style("stroke-width",1).style("stroke","#cb1f83").attr("x1",295).attr("y1",165).attr("x2",305).attr("y2",165),a.append("text").attr("id","high").attr("x",307).attr("y",170).text("High: 0%"),a.append("line").style("stroke-width",1).style("stroke","darkgray").attr("x1",170).attr("y1",165).attr("x2",180).attr("y2",165),a.append("text").attr("id","running-avg").attr("x",182).attr("y",170).text("Average: 0%"),a.append("line").style("stroke-width",1).style("stroke","blue").attr("x1",45).attr("y1",165).attr("x2",55).attr("y2",165),a.append("text").attr("id","current").attr("x",57).attr("y",170).text("Current: 0%")}function c(t,a){const e=Math.min(.99,t.mean_hidden),i=Math.min(.99,t.best_score),n=t.data;n.push(a),r.Ys("#line").attr("d",h).attr("transform",null).transition().attr("transform","translate("+l(-1)+",0)"),e>i&&(r.Ys("#best-line").attr("y1",o(e)).attr("y2",o(e)),r.Ys("#high").text(`High: ${s(e.toFixed(2))}`)),r.Ys("#avg-line").attr("y1",o(e)).attr("y2",o(e)),r.Ys("#running-avg").text(`Average: ${s(e.toFixed(2))}`),r.Ys("#current").text(`Current: ${s(a.toFixed(2))}`),n.shift()}},1836:(t,a,e)=>{function r(){const t=document.getElementById("sim"),a=document.createElement("div");a.id="modal";const e=t.appendChild(a);e.innerHTML="\n    <div class=\"modal-content\">\n      <span class=\"close\">&times;</span>\n      <h1 style='color:rgb(38, 34, 144)'>Who's Afraid of the <s>Dark</s> Light?</h1>\n      <p>Now that you understand this simulation and have a hypothesis       about how variable(s) control how the school finds its way to       the dark and stays there, let's put it to the test.</p> \n      <p>Run an experiment. A graph will show you the average       proportion of the time fish spent in the light versus the dark.       Every fraction of a second, the proportion of fish in the       dark/light is calculated. The average of this proportion over       the last several seconds will show up as a horizontal gray       line in the plot.</p>\n      <p>Use this curve to guide your exploration of Relative Speed,       Alignment, and Attraction Radius. </p>\n      <p>Run as many trials as you like and try to maximize Proportion       in the Dark! <b>Stay alive!</b></p>\n    </div>",document.getElementsByClassName("close")[0].onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")}}e.r(a),e.d(a,{default:()=>r})},4038:(t,a,e)=>{e.r(a),e.d(a,{default:()=>i});var r=e(8508),s=e(8662);const i=t=>{const a=100,e=r.Ys("#controls").select("svg").append("g").attr("id","sliders").attr("transform","translate(15, 35)"),i=["Much Greater","Equal","Much Greater"];for(let t=0;t<3;t++){e.append("rect").attr("width",390).attr("height",40).attr("x",-10).attr("y",a*t).attr("fill","url(#svgGradient)");for(let r=0;r<5;r++)e.append("line").style("stroke-width",1).style("stroke","darkgray").attr("x1",370*r/4).attr("y1",a*t+40).attr("x2",370*r/4).attr("y2",a*t+50);e.append("text").text("Light").attr("x",0).attr("y",a*t+18).attr("text-anchor","start"),e.append("text").text("Dark").attr("x",372).attr("y",a*t+18).attr("text-anchor","end").attr("fill","white"),e.append("text").text(i[0]).attr("x",10).attr("y",a*t+65).style("font-size","12px").attr("text-anchor","start"),e.append("text").text(i[1]).attr("x",185).attr("y",a*t+65).style("font-size","12px").attr("text-anchor","middle"),e.append("text").text(i[2]).attr("x",360).attr("y",a*t+65).style("font-size","12px").attr("text-anchor","end"),e.append("text").text("-1").attr("x",-5).attr("y",a*t+33).style("font-size","12px").attr("text-anchor","start"),e.append("text").text("-0.5").attr("x",90.5).attr("y",a*t+33).style("font-size","12px").attr("text-anchor","middle").attr("fill","black"),e.append("text").text("0").attr("x",186).attr("y",a*t+33).style("font-size","12px").attr("text-anchor","middle").attr("fill","black"),e.append("text").text("+0.5").attr("x",286.5).attr("y",a*t+33).style("font-size","12px").attr("text-anchor","end").attr("fill","white"),e.append("text").text("+1").attr("x",374).attr("y",a*t+33).style("font-size","12px").attr("text-anchor","end").attr("fill","white");const r=["Relative Speed","Relative Alignment Radius","Relative Attraction Radius"];e.append("text").text(r[0]).attr("x",185).attr("y",-5).attr("text-anchor","middle"),e.append("text").text(r[1]).attr("x",185).attr("y",95).attr("text-anchor","middle"),e.append("text").text(r[2]).attr("x",185).attr("y",195).attr("text-anchor","middle")}var n=e.append("defs").append("linearGradient").attr("id","svgGradient").attr("x1","0%").attr("x2","100%").attr("y1","100%").attr("y2","100%");n.append("stop").attr("class","start").attr("offset","0%").attr("stop-color","white").attr("stop-opacity",0),n.append("stop").attr("class","end").attr("offset","100%").attr("stop-color","black").attr("stop-opacity",1);const d=(0,s.Ao)().min(0).max(4).step(1).width(370).value(2).displayValue(!1).tickValues([]).on("onchange",(a=>{t.speed_in_the_light=t.s_max-a/4,t.speed_in_the_dark=t.s_min+a/4})),l=(e.append("g").call(d).attr("transform","translate(0, 40)"),(0,s.Ao)().min(0).max(2).step(.5).width(370).tickValues([]).value(1).displayValue(!1).on("onchange",(a=>{a<1?(t.alignment_radius=t.al_max,t.dark_al=t.al_min+(t.al_max-t.al_min)*((a-1)/1)):a>1?(t.alignment_radius=t.al_max-(t.al_max-t.al_min)*((a-1)/1),t.dark_al=t.al_max):(t.alignment_radius=t.al_max,t.dark_al=t.al_max)}))),o=(e.append("g").call(l).attr("transform","translate(0, 140)"),(0,s.Ao)().min(0).max(4).step(1).width(370).tickValues([]).value(2).displayValue(!1).on("onchange",(a=>{a<=2?(t.attraction_radius=t.ar_max,t.dark_ar=t.ar_min+(t.ar_max-t.ar_min)*(a/2)):a>=2?(t.attraction_radius=t.ar_max-(t.ar_max-t.ar_min)*((a-2)/2),t.dark_ar=t.ar_max):(t.attraction_radius=t.ar_max,t.dark_ar=t.ar_max)})));return e.append("g").call(o).attr("transform","translate(0, 240)"),{speed_slider:d,ar_slider:o,al_slider:l}}}}]);