"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[877,141,836,581,38],{1877:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var r=a(8882),s=a(4038),i=a(141),n=a(8508),d=a(1263),l=a(1836),o=a(7126),h=a(3555),p=a(3581);class c extends r.Z{constructor(){const t=d.Z.mode5;t.alignment_radius=t.al_def,t.dark_al=t.al_def,t.attraction_radius=t.ar_def,t.dark_ar=t.ar_def,t.speed_in_the_dark=t.speed_def,t.speed_in_the_light=t.speed_def,super(t),this.params=t,this.params=t,this.mean_hidden=0,this.best_score=0,this.data=new Array(1e3).fill(0),this.ticks=1,this.start=o.ou.now(),this.duration=o.nL.fromObject({seconds:0}),this.avg_ar=2,this.avg_al=1,this.avg_s=2,this.trialNumber=1,this.results=[],n.Ys("#controls").select("svg").style("width","100%").attr("viewBox","0 0 500 350"),this.sliders=(0,s.default)(this.params),n.Ys("#control-text").classed("notsim5",!1),(0,i.setup_chart)(this.data),(0,p.setupScores)(this),(0,l.default)()}reset(t){this.total=0,this.mean_hidden=0,this.best_score=0,this.ticks=1,this.updateSliderAverages(),this.duration=o.nL.fromObject({seconds:0}),this.start={},this.data=new Array(1e3).fill(0),n.Ys("#line").datum(this.data),this.sliders.speed_slider.value(2),this.sliders.al_slider.value(1),this.sliders.ar_slider.value(2),t.alignment_radius=t.al_def,t.dark_al=t.al_def,t.attraction_radius=t.ar_def,t.dark_ar=t.ar_def,t.speed_in_the_dark=t.speed_def,t.speed_in_the_light=t.speed_def,this.avg_ar=2,this.avg_al=1,this.avg_s=2,this.playing=!1,document.getElementById("playpause").src="./play.svg",this.initialize(this.params)}updateSliderAverages(){let t=2,e=2,a=1;this.sliders&&(t=this.sliders.speed_slider.value(),e=this.sliders.ar_slider.value(),a=this.sliders.al_slider.value()),this.avg_s=(0,h.tD)(this.avg_s,t,this.ticks),this.avg_ar=(0,h.tD)(this.avg_ar,e,this.ticks),this.avg_al=(0,h.tD)(this.avg_al,a,this.ticks)}go(){const t=o.nL.fromObject({seconds:30});0===this.duration.seconds&&(n.Ys("#trialNum").text(`Trial: ${this.trialNumber}`),n.Ys("#timeLeft").text("Time Left: 30s"));const e=o.ou.now(),a=this.duration.plus(e.diff(this.start,"seconds"));if(Math.floor(a.seconds)>Math.floor(this.duration.seconds)&&n.Ys("#timeLeft").text(`Time Left: ${30-Math.floor(a.seconds)}s`),this.duration=a,this.start=e,this.duration>=t){if(this.timer.stop){const t=n.BYU().domain([0,4]).range([-1,1]);this.timer.stop(),this.results.push([this.trialNumber,t(this.avg_s).toFixed(1),t(2*this.avg_al).toFixed(1),t(this.avg_ar).toFixed(1),this.mean_hidden]),(0,p.updateTable)(this.results),this.reset(this.params),this.trialNumber++}return}super.go();const r=this.agents.reduce(((t,e)=>t+e.ishidden),0)/this.params.N;this.mean_hidden=(0,h.tD)(this.mean_hidden,r,this.ticks),this.ticks+=1,this.updateSliderAverages(),(0,i.chart_tick)(this,r),this.best_score=Math.max(this.best_score,this.mean_hidden)}}function u(){return document.getElementById("sim").innerHTML="",new c}},141:(t,e,a)=>{a.r(e),a.d(e,{chart_tick:()=>c,setup_chart:()=>p});var r=a(8508);const s=r.WUZ(".0%"),i={top:10,right:30,bottom:20,left:50},n=420-i.left-i.right,d=150-i.top-i.bottom,l=r.BYU().domain([0,999]).range([0,n]),o=r.BYU().domain([0,1]).range([d,0]),h=r.jvg().x((function(t,e){return l(e)})).y((function(t,e){return o(t)})).curve(r.c_6);function p(t){const e=r.Ys("#control-text").classed("notsim5",!1).append("svg").attr("id","#chart").attr("viewBox","0 0 415 180"),a=e.append("g").attr("transform",`translate(${i.left}, ${i.top+15})`);a.append("defs").append("clipPath").attr("id","clip").append("rect").attr("width",n).attr("height",d+5).attr("y",-2),a.append("g").attr("class","axis axis--x").attr("transform","translate(0,"+o(0)+")").call(r.LLu(l).ticks(0)),a.append("g").attr("class","axis axis--y").call(r.y4O(o).ticks(5).tickFormat(r.WUZ(".0%"))),a.append("g").attr("clip-path","url(#clip)").append("path").datum(t).attr("id","line").transition().duration(500).ease(r.Nyw),a.append("line").attr("id","avg-line").style("stroke-width",2).style("stroke","darkgray").attr("x1",1).attr("y1",o(0)).attr("x2",n).attr("y2",o(0)),a.append("line").attr("id","best-line").style("stroke-width",2).style("stroke","#cb1f83").attr("x1",1).attr("y1",o(0)).attr("x2",n).attr("y2",o(0)),e.append("text").attr("id","y-label").attr("x",0).attr("y",10).text("% fish in the dark").style("font-size","12px").attr("transform","translate(2,130)rotate(270)");e.append("line").style("stroke-width",2).style("stroke","#cb1f83").attr("x1",295).attr("y1",165).attr("x2",305).attr("y2",165),e.append("text").attr("id","high").attr("x",307).attr("y",170).text("High: 0%"),e.append("line").style("stroke-width",2).style("stroke","darkgray").attr("x1",170).attr("y1",165).attr("x2",180).attr("y2",165),e.append("text").attr("id","running-avg").attr("x",182).attr("y",170).text("Average: 0%"),e.append("line").style("stroke-width",2).style("stroke","rgb(63, 120, 168)").attr("x1",45).attr("y1",165).attr("x2",55).attr("y2",165),e.append("text").attr("id","current").attr("x",57).attr("y",170).text("Current: 0%"),e.append("text").attr("id","trialNum").attr("x",60).attr("y",30).text("Trial: 1").style("font-size","12px"),e.append("text").attr("id","timeLeft").attr("x",60).attr("y",40).text("Time Left: 30s").style("font-size","12px")}function c(t,e){const a=t.mean_hidden,i=t.best_score,n=t.data;n.push(e),r.Ys("#line").attr("d",h).attr("transform",null).transition().attr("transform","translate("+l(-1)+",0)"),a>i&&(r.Ys("#best-line").attr("y1",o(a)).attr("y2",o(a)),r.Ys("#high").text(`High: ${s(a.toFixed(2))}`)),r.Ys("#avg-line").attr("y1",o(a)).attr("y2",o(a)),r.Ys("#running-avg").text(`Average: ${s(a.toFixed(2))}`),r.Ys("#current").text(`Current: ${s(e.toFixed(2))}`),n.shift()}},1836:(t,e,a)=>{function r(){const t=document.getElementById("sim"),e=document.createElement("div");e.id="modal";const a=t.appendChild(e);a.innerHTML="\n    <div class=\"modal-content\">\n      <span class=\"close\">&times;</span>\n      <h1 style='color:rgb(38, 34, 144)'>Who's Afraid of the <s>Dark</s> Light?</h1>\n      <p>Now that you understand this simulation and have a hypothesis       about how variable(s) control how the school finds its way to       the dark and stays there, let's put it to the test.</p> \n      <p>Run an experiment. A graph will show you the average       proportion of the time fish spent in the light versus the dark.       Every fraction of a second, the proportion of fish in the       dark/light is calculated. The average of this proportion over       the last 30 seconds will show up as a horizontal gray       line in the plot.</p>\n      <p>Use this curve to guide your exploration of Relative Speed,       Alignment, and Attraction Radius. </p>\n      <p>Run as many trials as you like and try to maximize Percentage       in the Dark over 30 seconds! <b>Stay alive!</b></p>\n    </div>",document.getElementsByClassName("close")[0].onclick=function(){a.style.display="none"},window.onclick=function(t){t.target==a&&(a.style.display="none")}}a.r(e),a.d(e,{default:()=>r})},3581:(t,e,a)=>{a.r(e),a.d(e,{setupScores:()=>s,updateTable:()=>i});var r=a(8508);function s(){const t=document.createElement("div");t.setAttribute("id","scoreTable"),document.getElementById("controls").appendChild(t);let e=document.createElement("table"),a=["Trial Number","Avg Speed Setting","Avg Alignment Setting","Avg Attraction Setting","Avg % Fish In The Dark"],r=document.createElement("tr");a.forEach((t=>{let e=document.createElement("th");e.textContent=t,r.appendChild(e)})),e.appendChild(r);for(let t=0;t<5;t++){let t=document.createElement("tr");for(let e=0;e<a.length;e++){let e=document.createElement("td");e.textContent=" ",t.appendChild(e)}e.appendChild(t)}t.appendChild(e)}function i(t){const e=document.getElementById("scoreTable");t.sort(((t,e)=>e[4]-t[4]));const a=(0,r.WUZ)(".0%");let s=e.getElementsByTagName("tr");for(let e=0;e<Math.min(5,t.length);e++){let r=s[e+1].getElementsByTagName("td");for(let s=0;s<t[e].length;s++)r[s].textContent=4==s?a(t[e][s]):t[e][s]}}},4038:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var r=a(8508),s=a(8662);const i=t=>{const e=100,a=r.Ys("#controls").select("svg").append("g").attr("id","sliders").attr("transform","translate(15, 50)"),i=["Much Greater","Equal","Much Greater"];for(let t=0;t<3;t++){a.append("rect").attr("width",480).attr("height",40).attr("x",-10).attr("y",e*t).attr("fill","url(#svgGradient)");for(let r=0;r<5;r++)a.append("line").style("stroke-width",1).style("stroke","darkgray").attr("x1",460*r/4).attr("y1",e*t+40).attr("x2",460*r/4).attr("y2",e*t+50);a.append("text").text("Light").attr("x",0).attr("y",e*t+18).attr("text-anchor","start"),a.append("text").text("Dark").attr("x",462).attr("y",e*t+18).attr("text-anchor","end").attr("fill","white"),a.append("text").text(i[0]).attr("x",10).attr("y",e*t+65).style("font-size","12px").attr("text-anchor","start"),a.append("text").text(i[1]).attr("x",230).attr("y",e*t+65).style("font-size","12px").attr("text-anchor","middle"),a.append("text").text(i[2]).attr("x",450).attr("y",e*t+65).style("font-size","12px").attr("text-anchor","end"),a.append("text").text("-1").attr("x",-5).attr("y",e*t+33).style("font-size","12px").attr("text-anchor","start"),a.append("text").text("-0.5").attr("x",113).attr("y",e*t+33).style("font-size","12px").attr("text-anchor","middle").attr("fill","black"),a.append("text").text("0").attr("x",231).attr("y",e*t+33).style("font-size","12px").attr("text-anchor","middle").attr("fill","black"),a.append("text").text("+0.5").attr("x",354).attr("y",e*t+33).style("font-size","12px").attr("text-anchor","end").attr("fill","white"),a.append("text").text("+1").attr("x",464).attr("y",e*t+33).style("font-size","12px").attr("text-anchor","end").attr("fill","white");const r=["Relative Speed","Relative Alignment Radius","Relative Attraction Radius"];a.append("text").text(r[0]).attr("x",230).attr("y",-5).attr("text-anchor","middle"),a.append("text").text(r[1]).attr("x",230).attr("y",95).attr("text-anchor","middle"),a.append("text").text(r[2]).attr("x",230).attr("y",195).attr("text-anchor","middle")}var n=a.append("defs").append("linearGradient").attr("id","svgGradient").attr("x1","0%").attr("x2","100%").attr("y1","100%").attr("y2","100%");n.append("stop").attr("class","start").attr("offset","0%").attr("stop-color","white").attr("stop-opacity",0),n.append("stop").attr("class","end").attr("offset","100%").attr("stop-color","black").attr("stop-opacity",1);const d=(0,s.Ao)().min(0).max(4).step(1).width(460).value(2).displayValue(!1).tickValues([]).on("onchange",(e=>{t.speed_in_the_light=1.5-e/4,t.speed_in_the_dark=.5+e/4})),l=(a.append("g").call(d).attr("transform","translate(0, 40)"),(0,s.Ao)().min(0).max(2).step(.5).width(460).tickValues([]).value(1).displayValue(!1).on("onchange",(e=>{e<1?(t.alignment_radius=4,t.dark_al=0+(e-1)/1*4):e>1?(t.alignment_radius=4-(e-1)/1*4,t.dark_al=4):(t.alignment_radius=4,t.dark_al=4)}))),o=(a.append("g").call(l).attr("transform","translate(0, 140)"),80),h=(0,s.Ao)().min(0).max(4).step(1).width(460).tickValues([]).value(2).displayValue(!1).on("onchange",(e=>{e<=2?(t.attraction_radius=o,t.dark_ar=5+e/2*75):e>=2?(t.attraction_radius=o-(e-2)/2*75,t.dark_ar=o):(t.attraction_radius=o,t.dark_ar=o)}));return a.append("g").call(h).attr("transform","translate(0, 240)"),{speed_slider:d,ar_slider:h,al_slider:l}}}}]);