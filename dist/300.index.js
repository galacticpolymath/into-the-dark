"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[300],{6300:(t,a,e)=>{e.r(a),e.d(a,{default:()=>r});var s=e(6103),n=e(2582);const r=t=>{s.Ys("#controls").select("svg").select("g:nth-child(1)").attr("transform",`translate(165, ${t.widgets.playbutton_size/2+3})`),s.Ys("#controls").select("svg").select("g:nth-child(2)").attr("transform",`translate(245, ${t.widgets.playbutton_size/2+3})`);const a=s.Ys("#controls").select("svg"),e=(0,n.Ao)().min(0).max(10).step(1).width(390).tickValues([0,5,10]).on("onchange",(a=>{t.attraction_radius=5*a}));a.append("g").call(e).attr("transform","translate(10, 100)"),a.append("text").text("Attraction Radius").attr("y",80);const r=(0,n.Ao)().min(0).max(10).step(1).width(390).tickValues([0,5,10]).on("onchange",(a=>{t.alignment_radius=a/2}));a.append("g").call(r).attr("transform","translate(10, 190)"),a.append("text").text("Alignment").attr("y",170)}}}]);