"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[38],{4038:(t,a,e)=>{e.r(a),e.d(a,{default:()=>l});var r=e(6103),n=e(2582);const l=t=>{const a=100,e=(r.Ys("#controls").select("svg").select("g:nth-child(1)").attr("transform",`translate(165, ${t.widgets.playbutton_size/2+3})`),r.Ys("#controls").select("svg").select("g:nth-child(2)").attr("transform",`translate(245, ${t.widgets.playbutton_size/2+3})`),r.Ys("#controls").select("svg").append("g").attr("id","sliders").attr("transform","translate(10, 100)")),l=["Much Greater","Equal","Much Greater"];for(let t=0;t<3;t++){e.append("rect").attr("width",410).attr("height",40).attr("x",-10).attr("y",a*t).attr("fill","url(#svgGradient)");for(let r=0;r<5;r++)e.append("line").style("stroke-width",1).style("stroke","darkgray").attr("x1",390*r/4).attr("y1",a*t+40).attr("x2",390*r/4).attr("y2",a*t+50);e.append("text").text("Light").attr("x",0).attr("y",a*t+18).attr("text-anchor","start"),e.append("text").text("Dark").attr("x",392).attr("y",a*t+18).attr("text-anchor","end").attr("fill","white"),e.append("text").text(l[0]).attr("x",10).attr("y",a*t+65).style("font-size","12px").attr("text-anchor","start"),e.append("text").text(l[1]).attr("x",195).attr("y",a*t+65).style("font-size","12px").attr("text-anchor","middle"),e.append("text").text(l[2]).attr("x",380).attr("y",a*t+65).style("font-size","12px").attr("text-anchor","end"),e.append("text").text("-1").attr("x",-5).attr("y",a*t+33).style("font-size","12px").attr("text-anchor","start"),e.append("text").text("-0.5").attr("x",95.5).attr("y",a*t+33).style("font-size","12px").attr("text-anchor","middle").attr("fill","black"),e.append("text").text("0").attr("x",196).attr("y",a*t+33).style("font-size","12px").attr("text-anchor","middle").attr("fill","black"),e.append("text").text("+0.5").attr("x",301.5).attr("y",a*t+33).style("font-size","12px").attr("text-anchor","end").attr("fill","white"),e.append("text").text("+1").attr("x",394).attr("y",a*t+33).style("font-size","12px").attr("text-anchor","end").attr("fill","white");const r=["Relative Speed","Relative Alignment Radius","Relative Attraction Radius"];e.append("text").text(r[0]).attr("x",195).attr("y",-5).attr("text-anchor","middle"),e.append("text").text(r[1]).attr("x",195).attr("y",95).attr("text-anchor","middle"),e.append("text").text(r[2]).attr("x",195).attr("y",195).attr("text-anchor","middle")}var s=e.append("defs").append("linearGradient").attr("id","svgGradient").attr("x1","0%").attr("x2","100%").attr("y1","100%").attr("y2","100%");s.append("stop").attr("class","start").attr("offset","0%").attr("stop-color","white").attr("stop-opacity",0),s.append("stop").attr("class","end").attr("offset","100%").attr("stop-color","black").attr("stop-opacity",1);const i=(0,n.Ao)().min(0).max(4).step(1).width(390).value(2).displayValue(!1).tickValues([]).on("onchange",(a=>{t.speed_in_the_light=t.s_max-a/4,t.speed_in_the_dark=t.s_min+a/4})),d=(e.append("g").call(i).attr("transform","translate(0, 40)"),(0,n.Ao)().min(0).max(2).step(.5).width(390).tickValues([]).value(1).displayValue(!1).on("onchange",(a=>{a<1?(t.alignment_radius=t.al_max,t.dark_al=t.al_min+(t.al_max-t.al_min)*((a-1)/1)):a>1?(t.alignment_radius=t.al_max-(t.al_max-t.al_min)*((a-1)/1),t.dark_al=t.al_max):(t.alignment_radius=t.al_max,t.dark_al=t.al_max)}))),x=(e.append("g").call(d).attr("transform","translate(0, 140)"),(0,n.Ao)().min(0).max(4).step(1).width(390).tickValues([]).value(2).displayValue(!1).on("onchange",(a=>{a<=2?(t.attraction_radius=t.ar_max,t.dark_ar=t.ar_min+(t.ar_max-t.ar_min)*(a/2)):a>=2?(t.attraction_radius=t.ar_max-(t.ar_max-t.ar_min)*((a-2)/2),t.dark_ar=t.ar_max):(t.attraction_radius=t.ar_max,t.dark_ar=t.ar_max)})));return e.append("g").call(x).attr("transform","translate(0, 240)"),{speed_slider:i,ar_slider:x,al_slider:d}}}}]);