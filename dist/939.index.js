"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[939,300],{4939:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var o=a(504),s=a(6300),n=a(1263),r=a(6103);class i extends o.Z{constructor(){const t=n.Z.mode3;super(t),this.params=t,t.alignment_radius=t.al_def,t.attraction_radius=t.ar_def,r.Ys("#controls").style("height","550px").select("svg").style("height","270px").style("width","500px").attr("viewBox","0 0 500 270"),r.Ys("#control-text").html("Imagine these fish are swimming in open water on a sunny day. <br/>                Any single fish could become easy prey for a larger predator. <p/>                Swimming in a larger group can make it more difficult for <br/>                predators to lock onto a single target. But schooling is not just <br/>                about following, but how well you align with other fish in your <br/>                group.<p/>                Explore how <i>Alignment</i> affects schooling behavior.<p/>                <b>Questions</b>:<p/>                Does one of these variables alone seem to cause schooling, <br/>                or is there a combination that works best to cause the fish <br/>                to group together?"),(0,s.default)(this.params)}}function l(){return document.getElementById("sim").innerHTML="",new i}},6300:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});var o=a(6103),s=a(2582);const n=t=>{o.Ys("#controls").select(".button").attr("transform",`translate(205, ${t.widgets.playbutton_size/2+5})`);const e=o.Ys("#controls").select("svg"),a=(0,s.Ao)().min(0).max(10).step(1).width(390).tickValues([0,5,10]).on("onchange",(e=>{t.attraction_radius=5*e}));e.append("g").call(a).attr("transform","translate(10, 100)"),e.append("text").text("Attraction Radius").attr("y",80);const n=(0,s.Ao)().min(0).max(10).step(1).width(390).tickValues([0,5,10]).on("onchange",(e=>{t.alignment_radius=e/2}));e.append("g").call(n).attr("transform","translate(10, 190)"),e.append("text").text("Alignment").attr("y",170)}}}]);