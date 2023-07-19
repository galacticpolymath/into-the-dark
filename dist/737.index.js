"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[737,894],{8737:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var i=a(8882),s=a(7894),r=a(8508),o=a(1263);class n extends i.Z{constructor(){const t=o.Z.mode2;t.N=t.N_def,t.attraction_radius=t.ar_def,super(t),this.params=t,this.N=t.N,r.Ys("#controls").select("svg").style("width","100%").attr("viewBox","0 0 500 270"),r.Ys("#overhead-text").html('So far, the fish have all been moving randomly on their own. We                can simulate group behavior by introducing 2 new variables and                changing the algorithm (simulation rules). On this page, each                fish <i>(i)</i> will follow its nearest neighbor if it falls within the                defined attraction radius.<p/>                <b>Play with the sliders, explore, and observe! </b><p/>                New Variables:                <br>• <b>N</b>: Number of fish                 <br>• <b>Attraction Radius</b>: the maximum distance between a                 nearest neighbor" can be for a fish to follow it. <p/>                <b>Questions for your exploration</b>: <p/>                1. How many fish are in a school? Is there a "magic number" N                 for which schooling behavior emerges? <p/>                2. How does Attraction Radius affect schooling behavior?'),r.Ys("#control-text").html('So far, the fish have all been moving randomly on their own. We                can simulate group behavior by introducing 2 new variables and                changing the algorithm (simulation rules). On this page, each                fish <i>(i)</i> will follow its nearest neighbor if it falls within the                defined attraction radius.<p/>                <b>Play with the sliders, explore, and observe! </b><p/>                New Variables:                <br>• <b>N</b>: Number of fish                 <br>• <b>Attraction Radius</b>: maximum distance between a fish and its                "nearest neighbor" for the fish to follow it. <p/>                <b>Questions for your exploration</b>: <p/>                1. How many fish are in a school? Is there a "magic number" N                 for which schooling behavior emerges? <p/>                2. How does Attraction Radius affect schooling behavior?'),this.sliders=(0,s.default)(t)}go(){if(this.N!=this.params.N)return this.N=this.params.N,void this.initialize(this.params);super.go()}reset(){this.sliders.n_slider.value(1),this.sliders.ar_slider.value(0),this.params.N=this.params.N_def,this.params.attraction_radius=this.params.ar_def,this.N=this.params.N,this.initialize(this.params)}}function h(){return document.getElementById("sim").innerHTML="",new n}},7894:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var i=a(8508),s=a(8662);const r=t=>{const e=i.Ys("#controls").select("svg"),a=(0,s.Ao)().min(1).max(30).step(1).width(460).tickValues([1,15,30]).value(1).on("onchange",(e=>{t.N=e}));e.append("g").call(a).attr("transform","translate(15, 40)"),e.append("text").text("N").attr("x",240).attr("text-anchor","middle").attr("y",20);const r=(0,s.Ao)().min(0).max(10).step(1).width(460).tickValues([0,5,10]).value(0).on("onchange",(e=>{t.attraction_radius=4*e}));return e.append("g").call(r).attr("transform","translate(15, 130)"),e.append("text").text("Attraction Radius").attr("x",240).attr("text-anchor","middle").attr("y",110),{n_slider:a,ar_slider:r}}}}]);