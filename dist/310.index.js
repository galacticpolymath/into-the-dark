"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[310],{504:(t,e,a)=>{a.d(e,{Z:()=>m}),a(4089);var s=a(6103),i=a(335),r=a(1897);const n=s.BYU().domain([0,360]).range([0,2*Math.PI]),o=s.BYU().range([0,360]).domain([0,2*Math.PI]),l=(t,e)=>{const a=t.x-e.x,s=t.y-e.y;return Math.sqrt(a*a+s*s)};var h=a(2489),d=a(5420);class _{constructor(t,e,a){this.params=a,this.id=t,this.x=Math.random()*a.L,this.y=Math.random()*a.L,this.theta=360*Math.random(),this.speed_var=1+Math.random()*a.speed_variation,this.ishidden=1==a.dark_zones&&(0,h.Z)(e,(t=>l(this,t)<t.r)).length?1:0,this.speed=this.adjust_speed(e)}adjust_angle(t){let e=[];var a,s,i,r;if(e=(0,h.Z)(t,(t=>l(this,t)<this.params.collision_radius&&t.id!=this.id)),e.length>0)a=this.x-(0,d.Z)(e,(t=>t.x)),s=this.y-(0,d.Z)(e,(t=>t.y));else{const e=(0,h.Z)(t,(t=>{let e=t.x-this.x,a=t.y-this.y;return t.r=Math.sqrt(e*e+a*a),t.r<this.params.attraction_radius&&t.id!=this.id})),l=(0,h.Z)(e,(t=>t.r<this.params.alignment_radius)),_=(0,h.Z)(e,(t=>t.r>this.params.alignment_radius));if(i=this.theta,r=this.theta,l.length>0&&this.params.collective_behavior){const t=(0,d.Z)(l,(t=>Math.cos(n(t.theta)))),e=(0,d.Z)(l,(t=>Math.sin(n(t.theta))));i=o(Math.atan2(e,t))}if(_.length>0&&this.params.collective_behavior){const t=(0,d.Z)(_,(t=>t.x)),e=(0,d.Z)(_,(t=>t.y));r=o(Math.atan2(e-this.y,t-this.x))}a=.5*(Math.cos(n(i))+Math.cos(n(r))),s=.5*(Math.sin(n(i))+Math.sin(n(r)))}const _=Math.cos(n(this.theta))+this.params.angular_increment*a,c=Math.sin(n(this.theta))+this.params.angular_increment*s,p=(self.t_dark+self.t_light)%3==0?this.params.wiggle:0;return o(Math.atan2(c,_))+(Math.random()-.5)*p}adjust_speed(t){return 1!=this.params.dark_zones?this.params.speed_in_the_light:(this.ishidden=(0,h.Z)(t,(t=>l(this,t)<t.r)).length?1:0,this.ishidden?this.params.speed_in_the_dark:this.params.speed_in_the_light)}set_new_pos(t,e){this.theta=this.adjust_angle(t),this.speed=this.adjust_speed(e);const a=n(this.theta);let s=this.params.dt*this.speed*this.speed_var*Math.cos(a),i=this.params.dt*this.speed*this.speed_var*Math.sin(a),r=this.x+s,l=this.y+i;(r<0||r>128)&&(s*=-1),(l<0||l>128)&&(i*=-1),this.x=this.x+s,this.y=this.y+i,this.theta=o(Math.atan2(i,s))}}class c{constructor(t,e){const a=Math.random()*Math.PI*2;this.id=t,this.x=Math.random()*e.L,this.y=Math.random()*e.L,this.vx=e.speed_hideouts*Math.cos(a),this.vy=e.speed_hideouts*Math.sin(a),this.r=e.size_hideouts,this.params=e}set_new_pos(){let t=this.params.dt*this.vx,e=this.params.dt*this.vy;t*=(this.id+1)/3,e*=(this.id+1)/3;let a=this.x+t,s=this.y+e;(a<0||a>this.params.L)&&(t*=-1,this.vx*=-1),(s<0||s>this.params.L)&&(e*=-1,this.vy*=-1),this.x=this.x+t,this.y=this.y+e}}var p=a(9400),g=a(7467);a(1263);const u=s.BYU().domain([0,128]),y=s.BYU().domain([0,128]);class m{constructor(t){this.params=t;const e=(t=>{const e=s.Ys("#sim").classed(t.container_class,!0),a=e.append("div").attr("id","display").attr("class","display-panel").classed(t.display_class,!0).append("svg").attr("viewBox",`0 0 ${t.display_size.width} ${t.display_size.height}`).style("width","100%"),i=e.append("div").attr("id","controls").attr("class","control-panel").classed(t.controls_class,!0);i.append("div").attr("id","control-text").style("width","500px");const r=i.append("svg").attr("viewBox",`0 0 ${t.controls_size.width} ${t.controls_size.height}`);return t.controls_border&&r.append("rect").attr("class","border").attr("width",t.controls_size.width).attr("height",t.controls_size.height),t.display_border&&a.append("rect").attr("class","border").attr("width",t.display_size.width).attr("height",t.display_size.height),{display:a,controls:r}})(t);this.display=e.display,this.controls=e.controls,this.agents=[],this.hideouts=[],this.initialize(this.params),(t=>{const e=t.params;let a={};const i=g.LI().actions(["play","pause"]),r=[i];let n;t.params.reset_enabled&&(n=g.LI().actions(["rewind"]),r.push(n),n.update((()=>{t.initialize(t.params)}))),i.size(e.widgets.playbutton_size),s.Ys("#controls").select("svg").selectAll(".button").data(r).enter().append(g.Zg).attr("transform","translate(250, 250)"),i.update((()=>{1==i.value()?a=s.FG_((()=>t.go()),e.simulation.delay):a.stop()}))})(this)}initialize(t){this.hideouts=(0,i.Z)((0,r.Z)(t.number_hideouts),(e=>new c(e,t))),this.agents=(0,i.Z)((0,r.Z)(t.N),(e=>new _(e,this.hideouts,t)));const e=t.display_size.width,a=t.display_size.height;u.range([0,e]),y.range([0,a]),this.display.select("#origin").remove();const n=this.display.append("g").attr("id","origin");var o;n.selectAll(".hideout").data(this.hideouts).enter().append("circle").attr("class","hideout").attr("r",(function(t){return u(t.r)})).attr("cx",(t=>u(t.x))).attr("cy",(t=>y(t.y))).style("fill",t.simulation.hideout_color).style("opacity",t.dark_zones?1:0),n.selectAll(".agent").data(this.agents).enter().append("g").attr("class","agent").attr("transform",(t=>`translate(${u(t.x)}, ${y(t.y)})rotate(${t.theta})`)).append("path").attr("d",(o=t.agentsize,s.jvg().x((t=>o*t.x)).y((t=>o*t.y))((0,i.Z)((0,r.Z)(30),(t=>({x:-2*Math.cos(t/30*Math.PI*2),y:Math.sin(t/30*Math.PI*2)*Math.pow(Math.sin(t/30/2*Math.PI*2),6)})))))).attr("fill",((e,a)=>t.colors[a%t.colors.length]))}go(){(0,p.Z)(this.hideouts,(t=>t.set_new_pos())),(0,p.Z)(this.agents,(t=>t.set_new_pos(this.agents,this.hideouts))),this.display.selectAll(".hideout").attr("cx",(t=>u(t.x))).attr("cy",(t=>y(t.y))),this.display.selectAll(".agent").attr("transform",(t=>"translate("+u(t.x)+","+y(t.y)+")rotate("+t.theta+")"))}}},5310:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var s=a(504),i=a(6103),r=a(2582),n=a(1263);class o extends s.Z{constructor(){const t=n.Z.mode4;super(t),this.params=t,i.Ys("#controls").style("height","650px").select("svg").style("height","420").style("width","450px").attr("viewBox","0 0 450 420"),i.Ys("#control-text").html("Hiding in the dark is a common strategy for prey to avoid being <br/>            eaten. But <i>how does a school of fish find its way into the dark?</i> <br/>            Each fish only has a small, partial field of view and a little control <br/>            over where the school is going. (it is effectively leaderless). <p/>            <b>Hypothesis</b>: Scientists have proposed that fish schools might be <br/>            found more in the dark than the light if the behavioral rules <br/>            controlling their movement are consistently different in the light <br/>            versus the dark. <p/>            <b>Question</b>: How can you configure the sliders below to maximize <br/>            the time in the dark for an average fish?"),(t=>{const e=100,a=(i.Ys("#controls").select(".button").attr("transform",`translate(205, ${t.widgets.playbutton_size/2+5})`),i.Ys("#controls").select("svg").append("g").attr("id","sliders").attr("transform","translate(10, 100)")),s=["Much Greater","Equal","Much Greater"];for(let t=0;t<3;t++){a.append("rect").attr("width",410).attr("height",30).attr("x",-10).attr("y",e*t+10).attr("fill","url(#svgGradient)");for(let s=0;s<5;s++)a.append("line").style("stroke-width",1).style("stroke","darkgray").attr("x1",410*s/4-10).attr("y1",e*t+40).attr("x2",410*s/4-10).attr("y2",e*t+50);a.append("text").text("In the Light").attr("x",0).attr("y",e*t+30).attr("text-anchor","start"),a.append("text").text("In the Dark").attr("x",390).attr("y",e*t+30).attr("text-anchor","end"),a.append("text").text(s[0]).attr("x",10).attr("y",e*t+62).style("font-size","12px").attr("text-anchor","start"),a.append("text").text(s[1]).attr("x",195).attr("y",e*t+62).style("font-size","12px").attr("text-anchor","middle"),a.append("text").text(s[2]).attr("x",370).attr("y",e*t+62).style("font-size","12px").attr("text-anchor","end");const i=["Relative Speed","Relative Alignment Radius","Relative Attraction Radius"];a.append("text").text(i[0]).attr("x",195).attr("text-anchor","middle"),a.append("text").text(i[1]).attr("x",195).attr("y",e).attr("text-anchor","middle"),a.append("text").text(i[2]).attr("x",195).attr("y",200).attr("text-anchor","middle")}var n=a.append("defs").append("linearGradient").attr("id","svgGradient").attr("x1","0%").attr("x2","100%").attr("y1","0%").attr("y2","100%");n.append("stop").attr("class","start").attr("offset","0%").attr("stop-color","white").attr("stop-opacity",0),n.append("stop").attr("class","end").attr("offset","100%").attr("stop-color","black").attr("stop-opacity",1);const o=(0,r.Ao)().min(0).max(10).step(1).width(390).value(5).displayValue(!1).tickValues([]).on("onchange",(e=>{t.speed_in_the_light=1.5-e/10,t.speed_in_the_dark=.5+e/10})),l=(a.append("g").call(o).attr("transform","translate(0, 40)"),(0,r.Ao)().min(0).max(10).step(1).width(390).tickValues([]).value(5).displayValue(!1).on("onchange",(e=>{e<=4?(t.alignment_radius=4,t.dark_al=0+4*e/5):e>=6?(t.alignment_radius=4-4*(e-5)/5,t.dark_al=4):(t.alignment_radius=4,t.dark_al=4)}))),h=(a.append("g").call(l).attr("transform","translate(0, 140)"),80),d=(0,r.Ao)().min(0).max(10).step(1).width(390).tickValues([]).value(5).displayValue(!1).on("onchange",(e=>{e<=4?(t.attraction_radius=h,t.dark_ar=5+75*e/5):e>=6?(t.attraction_radius=h-75*(e-5)/5,t.dark_ar=h):(t.attraction_radius=h,t.dark_ar=h)}));a.append("g").call(d).attr("transform","translate(0, 240)")})(this.params)}}function l(){document.getElementById("sim").innerHTML="",new o}},1263:(t,e,a)=>{a.d(e,{Z:()=>s});const s={basic:{N:3,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collision_radius:1,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:.5,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:0,wiggle:0,collective_behavior:!1,dark_zones:!1,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:5.5,y:5.5},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:480,height:480},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode1:{N:3,colors:["rgb(190, 39, 113)","rgb(97, 171, 241)","rgb(38, 34, 144)"],L:128,agentsize:30,dt:1,speed_variation:.5,angular_increment:.2,collision_radius:1,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:.5,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:0,wiggle:0,collective_behavior:!1,dark_zones:!1,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:5.5,y:5.5},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:480},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode2:{N:1,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:10,wiggle:0,collective_behavior:!0,dark_zones:!1,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},display_type:"svg",debug:!1,controls_border:!1,display_border:!0,debug_lattice:"debug-grid-16",controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:650},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode3:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,speed_in_the_light:1,speed_in_the_dark:.1,alignment_radius:2,attraction_radius:10,wiggle:0,collective_behavior:!0,dark_zones:!1,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},display_type:"svg",debug:!1,controls_border:!1,display_border:!0,debug_lattice:"debug-grid-16",controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode4:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,number_hideouts:3,speed_hideouts:.2,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:1,alignment_radius:2.25,dark_al:2.25,attraction_radius:20,dark_ar:20,wiggle:20,collective_behavior:!0,dark_zones:!0,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode5:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,number_hideouts:3,speed_hideouts:.2,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:1,alignment_radius:2.25,dark_al:2.25,attraction_radius:20,dark_ar:20,wiggle:20,collective_behavior:!0,dark_zones:!0,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf",reset_enabled:!0}}}}]);