"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[384],{6384:(t,a,e)=>{e.r(a),e.d(a,{default:()=>x});var r=e(6554),s=e(6103),n=e(2582);const i=s.WUZ(".0%"),l=440,d=s.BYU().domain([0,999]).range([0,l]),o=s.BYU().domain([0,1]).range([120,0]),p=s.jvg().x((function(t,a){return d(a)})).y((function(t,a){return o(t)})).curve(s.c_6);var h=e(1263);class c extends r.Z{constructor(){const t=h.Z.mode5;super(t),this.params=t,this.total=0,this.mean_hidden=0,this.best_score=0,this.data=new Array(1e3).fill(0),s.Ys("#controls").style("height","600px").select("svg").style("height","500px").style("width","500px").attr("viewBox","0 0 500 500"),(t=>{const a=90,e=(s.Ys("#controls").select("svg").select("g:nth-child(1)").attr("transform",`translate(200, ${t.widgets.playbutton_size/2+3})`),s.Ys("#controls").select("svg").select("g:nth-child(2)").attr("transform",`translate(280, ${t.widgets.playbutton_size/2+3})`),s.Ys("#controls").select("svg").append("g").attr("id","sliders").attr("transform","translate(10, 100)")),r=["Much Greater","Equal","Much Greater"];for(let t=0;t<3;t++){e.append("rect").attr("width",480).attr("height",30).attr("x",-10).attr("y",a*t+10).attr("fill","url(#svgGradient)");for(let r=0;r<5;r++)e.append("line").style("stroke-width",1).style("stroke","darkgray").attr("x1",480*r/4-10).attr("y1",a*t+40).attr("x2",480*r/4-10).attr("y2",a*t+50);e.append("text").text("In the Light").attr("x",0).attr("y",a*t+30),e.append("text").text("In the Dark").attr("x",460).attr("text-anchor","end").attr("y",a*t+30),e.append("text").text(r[0]).attr("x",10).attr("y",a*t+62).style("font-size","12px"),e.append("text").text(r[1]).attr("x",211).attr("y",a*t+62).style("font-size","12px"),e.append("text").text(r[2]).attr("x",375).attr("y",a*t+62).style("font-size","12px");const s=["Relative Speed","Relative Alignment Radius","Relative Attraction Radius"];e.append("text").text(s[0]).attr("x",175),e.append("text").text(s[1]).attr("x",135).attr("y",a),e.append("text").text(s[2]).attr("x",138).attr("y",180)}var i=e.append("defs").append("linearGradient").attr("id","svgGradient").attr("x1","0%").attr("x2","100%").attr("y1","0%").attr("y2","100%");i.append("stop").attr("class","start").attr("offset","0%").attr("stop-color","white").attr("stop-opacity",0),i.append("stop").attr("class","end").attr("offset","100%").attr("stop-color","black").attr("stop-opacity",1);const l=(0,n.Ao)().min(0).max(10).step(1).width(460).value(5).displayValue(!1).tickValues([]).on("onchange",(a=>{t.speed_in_the_light=1.5-a/10,t.speed_in_the_dark=.5+a/10})),d=(e.append("g").call(l).attr("transform","translate(0, 40)"),(0,n.Ao)().min(0).max(10).step(1).width(460).tickValues([]).value(5).displayValue(!1).on("onchange",(a=>{a<=4?(t.alignment_radius=4,t.dark_al=0+4*a/5):a>=6?(t.alignment_radius=4-4*(a-5)/5,t.dark_al=4):(t.alignment_radius=4,t.dark_al=4)}))),o=(e.append("g").call(d).attr("transform","translate(0, 130)"),80),p=(0,n.Ao)().min(0).max(10).step(1).width(460).tickValues([]).value(5).displayValue(!1).on("onchange",(a=>{a<=4?(t.attraction_radius=o,t.dark_ar=5+75*a/5):a>=6?(t.attraction_radius=o-75*(a-5)/5,t.dark_ar=o):(t.attraction_radius=o,t.dark_ar=o)}));e.append("g").call(p).attr("transform","translate(0, 220)")})(this.params),function(t){const a=s.Ys("#control-text").append("svg").attr("id","#chart").attr("viewBox","0 0 500 160"),e=a.append("g").attr("transform","translate(40,10)");e.append("defs").append("clipPath").attr("id","clip").append("rect").attr("width",l).attr("height",120),e.append("g").attr("class","axis axis--x").attr("transform","translate(0,"+o(0)+")").call(s.LLu(d).ticks(0)),e.append("g").attr("class","axis axis--y").call(s.y4O(o).ticks(5).tickFormat(s.WUZ(".0%"))),e.append("g").attr("clip-path","url(#clip)").append("path").datum(t).attr("id","line").transition().duration(500).ease(s.Nyw),e.append("line").attr("id","avg-line").style("stroke-width",1).style("stroke","darkgray").attr("x1",1).attr("y1",o(0)).attr("x2",l).attr("y2",o(0)),e.append("line").attr("id","best-line").style("stroke-width",1).style("stroke","crimson").attr("x1",1).attr("y1",o(0)).attr("x2",l).attr("y2",o(0)),a.append("text").attr("id","highscore-label").attr("x",50).attr("y",150).text("High Score: "),a.append("text").attr("id","highscore").attr("x",140).attr("y",150).text("0%")}(this.data)}initialize(t){this.total=0,this.mean_hidden=0,this.best_score=0,this.data=new Array(1e3).fill(0),s.Ys("#line").datum(this.data),super.initialize(t)}go(){super.go();const t=this.agents.reduce(((t,a)=>t+a.ishidden),0)/this.params.N;var a,e,r,n;this.total+=Math.min(.99,t),this.total-=this.data[0],this.mean_hidden=this.total/1e3,a=this.data,e=t,r=this.mean_hidden,n=this.best_score,a.push(e),s.Ys("#line").attr("d",p).attr("transform",null).transition().attr("transform","translate("+d(-1)+",0)"),r>n&&(s.Ys("#best-line").attr("y1",o(r)).attr("y2",o(r)),s.Ys("#highscore").text(i(r.toFixed(2)))),r>1&&console.log(r),s.Ys("#avg-line").attr("y1",o(r)).attr("y2",o(r)),a.shift(),this.best_score=Math.max(this.best_score,this.mean_hidden)}}function x(){document.getElementById("sim").innerHTML="",new c}}}]);