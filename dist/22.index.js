"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[22],{9022:(t,a,e)=>{e.r(a),e.d(a,{default:()=>s});var r=e(6103),n=e(2582);const s=t=>{const a=100,e=(r.Ys("#controls").select(".button").attr("transform",`translate(205, ${t.widgets.playbutton_size/2+5})`),r.Ys("#controls").select("svg").append("g").attr("id","sliders").attr("transform","translate(10, 100)")),s=["Much Greater","Equal","Much Greater"];for(let t=0;t<3;t++){e.append("rect").attr("width",410).attr("height",30).attr("x",-10).attr("y",a*t+10).attr("fill","url(#svgGradient)");for(let r=0;r<5;r++)e.append("line").style("stroke-width",1).style("stroke","darkgray").attr("x1",390*r/4).attr("y1",a*t+40).attr("x2",390*r/4).attr("y2",a*t+50);e.append("text").text("In the Light").attr("x",0).attr("y",a*t+30).attr("text-anchor","start"),e.append("text").text("In the Dark").attr("x",390).attr("y",a*t+30).attr("text-anchor","end"),e.append("text").text(s[0]).attr("x",10).attr("y",a*t+62).style("font-size","12px").attr("text-anchor","start"),e.append("text").text(s[1]).attr("x",195).attr("y",a*t+62).style("font-size","12px").attr("text-anchor","middle"),e.append("text").text(s[2]).attr("x",370).attr("y",a*t+62).style("font-size","12px").attr("text-anchor","end");const r=["Relative Speed","Relative Alignment Radius","Relative Attraction Radius"];e.append("text").text(r[0]).attr("x",195).attr("text-anchor","middle"),e.append("text").text(r[1]).attr("x",195).attr("y",a).attr("text-anchor","middle"),e.append("text").text(r[2]).attr("x",195).attr("y",200).attr("text-anchor","middle")}var l=e.append("defs").append("linearGradient").attr("id","svgGradient").attr("x1","0%").attr("x2","100%").attr("y1","0%").attr("y2","100%");l.append("stop").attr("class","start").attr("offset","0%").attr("stop-color","white").attr("stop-opacity",0),l.append("stop").attr("class","end").attr("offset","100%").attr("stop-color","black").attr("stop-opacity",1);const d=(0,n.Ao)().min(0).max(4).step(1).width(390).value(2).displayValue(!1).tickValues([]).on("onchange",(a=>{t.speed_in_the_light=1.5-a/4,t.speed_in_the_dark=.5+a/4})),i=(e.append("g").call(d).attr("transform","translate(0, 40)"),(0,n.Ao)().min(0).max(2).step(.5).width(390).tickValues([]).value(1).displayValue(!1).on("onchange",(a=>{a<1?(t.alignment_radius=4,t.dark_al=0+(a-1)/1*4):a>1?(t.alignment_radius=4-(a-1)/1*4,t.dark_al=4):(t.alignment_radius=4,t.dark_al=4)}))),p=(e.append("g").call(i).attr("transform","translate(0, 140)"),80),o=(0,n.Ao)().min(0).max(4).step(1).width(390).tickValues([]).value(2).displayValue(!1).on("onchange",(a=>{a<=2?(t.attraction_radius=p,t.dark_ar=5+a/2*75):a>=2?(t.attraction_radius=p-(a-2)/2*75,t.dark_ar=p):(t.attraction_radius=p,t.dark_ar=p)}));e.append("g").call(o).attr("transform","translate(0, 240)")}}}]);