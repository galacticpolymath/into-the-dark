"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[939,300],{4939:(t,e,o)=>{o.r(e),o.d(e,{default:()=>l});var a=o(504),s=o(6300),n=o(1263),r=o(6103);class i extends a.Z{constructor(){const t=n.Z.mode3;t.alignment_radius=t.al_def,t.attraction_radius=t.ar_def,super(t),this.params=t,r.Ys("#controls").select("svg").style("width","100%").attr("viewBox","0 0 500 270"),r.Ys("#overhead-text").html("Imagine these fish are swimming in open water on a sunny day.                 Any single fish could become easy prey for a larger predator. <p/>                Swimming in a larger group can make it more difficult for                 predators to lock onto a single target. But schooling is not just                 about following, but how well you align with other fish in your                 group.<p/>                Explore how <i>Alignment</i> affects schooling behavior. <i>It may                 take a few seconds for group behavior to coalesce!</i><p/>                <b>Questions</b>:<p/>                Does one of these variables alone seem to cause schooling,                 or is there a combination that works best to cause the fish                 to group together?"),r.Ys("#control-text").html("Imagine these fish are swimming in open water on a sunny day.                 Any single fish could become easy prey for a larger predator. <p/>                Swimming in a larger group can make it more difficult for                 predators to lock onto a single target. But schooling is not just                 about following, but how well you align with other fish in your                 group.<p/>                Explore how <i>Alignment</i> affects schooling behavior. <i>It may                 take a few seconds for group behavior to coalesce!</i><p/>                <b>Questions</b>:<p/>                Does one of these variables alone seem to cause schooling,                 or is there a combination that works best to cause the fish                 to group together?"),(0,s.default)(this.params)}}function l(){return document.getElementById("sim").innerHTML="",new i}},6300:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var a=o(6103),s=o(2582);const n=t=>{a.Ys("#controls").select("svg").select("g:nth-child(1)").attr("transform",`translate(165, ${t.widgets.playbutton_size/2+3})`),a.Ys("#controls").select("svg").select("g:nth-child(2)").attr("transform",`translate(245, ${t.widgets.playbutton_size/2+3})`);const e=a.Ys("#controls").select("svg"),o=(0,s.Ao)().min(0).max(10).step(1).width(390).tickValues([0,5,10]).value(0).on("onchange",(e=>{t.attraction_radius=5*e}));e.append("g").call(o).attr("transform","translate(10, 100)"),e.append("text").text("Attraction Radius").attr("y",80);const n=(0,s.Ao)().min(0).max(10).step(1).width(390).tickValues([0,5,10]).value(0).on("onchange",(e=>{t.alignment_radius=e/2.5}));e.append("g").call(n).attr("transform","translate(10, 190)"),e.append("text").text("Alignment").attr("y",170)}}}]);