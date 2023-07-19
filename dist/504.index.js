"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[504],{504:(t,s,e)=>{e.d(s,{Z:()=>b}),e(4089);var a=e(6103),i=e(335),r=e(1897);const o=a.BYU().domain([0,360]).range([0,2*Math.PI]),n=a.BYU().range([0,360]).domain([0,2*Math.PI]),h=(t,s)=>{const e=t.x-s.x,a=t.y-s.y;return Math.sqrt(e*e+a*a)};var l=e(2489),d=e(5420);class _{constructor(t,s,e){this.params=e,this.id=t,this.x=Math.random()*e.L,this.y=Math.random()*e.L,this.theta=360*Math.random(),this.speed_var=1+Math.random()*e.speed_variation,this.ishidden=1==e.dark_zones&&(0,l.Z)(s,(t=>h(this,t)<t.r)).length?1:0,this.speed=this.adjust_speed(s)}adjust_angle(t){let s=[];var e,a,i,r;if(s=(0,l.Z)(t,(t=>h(this,t)<this.params.collision_radius&&t.id!=this.id)),s.length>0)e=this.x-(0,d.Z)(s,(t=>t.x)),a=this.y-(0,d.Z)(s,(t=>t.y));else{const s=(0,l.Z)(t,(t=>{let s=t.x-this.x,e=t.y-this.y;return t.r=Math.sqrt(s*s+e*e),t.r<this.params.attraction_radius&&t.id!=this.id})),h=(0,l.Z)(s,(t=>t.r<this.params.alignment_radius)),_=(0,l.Z)(s,(t=>t.r>this.params.alignment_radius));if(i=this.theta,r=this.theta,h.length>0&&this.params.collective_behavior){const t=(0,d.Z)(h,(t=>Math.cos(o(t.theta)))),s=(0,d.Z)(h,(t=>Math.sin(o(t.theta))));i=n(Math.atan2(s,t))}if(_.length>0&&this.params.collective_behavior){const t=(0,d.Z)(_,(t=>t.x)),s=(0,d.Z)(_,(t=>t.y));r=n(Math.atan2(s-this.y,t-this.x))}e=.5*(Math.cos(o(i))+Math.cos(o(r))),a=.5*(Math.sin(o(i))+Math.sin(o(r)))}const _=Math.cos(o(this.theta))+this.params.angular_increment*e,c=Math.sin(o(this.theta))+this.params.angular_increment*a,p=(self.t_dark+self.t_light)%3==0?this.params.wiggle:0;return n(Math.atan2(c,_))+(Math.random()-.5)*p}adjust_speed(t){return 1!=this.params.dark_zones?this.params.speed_in_the_light:(this.ishidden=(0,l.Z)(t,(t=>h(this,t)<t.r)).length?1:0,this.ishidden?this.params.speed_in_the_dark:this.params.speed_in_the_light)}set_new_pos(t,s){this.theta=this.adjust_angle(t),this.speed=this.adjust_speed(s);const e=o(this.theta);let a=this.params.dt*this.speed*this.speed_var*Math.cos(e),i=this.params.dt*this.speed*this.speed_var*Math.sin(e),r=this.x+a,h=this.y+i;(r<0||r>128)&&(a*=-1),(h<0||h>128)&&(i*=-1),this.x=this.x+a,this.y=this.y+i,this.theta=n(Math.atan2(i,a))}}class c{constructor(t,s){const e=Math.random()*Math.PI*2;this.id=t,this.x=Math.random()*s.L,this.y=Math.random()*s.L,this.vx=s.speed_hideouts*Math.cos(e),this.vy=s.speed_hideouts*Math.sin(e),this.r=s.size_hideouts,this.params=s}set_new_pos(){let t=this.params.dt*this.vx,s=this.params.dt*this.vy,e=this.x+t,a=this.y+s;(e<0||e>this.params.L)&&(t*=-1,this.vx*=-1),(a<0||a>this.params.L)&&(s*=-1,this.vy*=-1),this.x=this.x+t,this.y=this.y+s}}var p=e(9400),g=e(7467);e(1263);const u=a.BYU().domain([0,128]),y=a.BYU().domain([0,128]);class b{constructor(t){this.params=t;const s=(t=>{const s=a.Ys("#sim").classed("mw8 center cf",!0);s.append("div").attr("id","overhead-text").style("width","100%").style("word-wrap","break-word");const e=s.append("div").attr("id","display").attr("class","display-panel").classed(t.display_class,!0).append("svg").attr("viewBox",`0 0 ${t.display_size.width} ${t.display_size.height}`),i=s.append("div").attr("id","controls").attr("class","control-panel").classed(t.controls_class,!0);i.append("div").attr("id","control-text").style("width","100%");const r=i.append("svg").attr("viewBox",`0 0 ${t.controls_size.width} ${t.controls_size.height}`);return t.controls_border&&r.append("rect").attr("class","border").attr("width",t.controls_size.width).attr("height",t.controls_size.height),t.display_border&&e.append("rect").attr("class","border").attr("width",t.display_size.width).attr("height",t.display_size.height),{display:e,controls:r}})(t);this.display=s.display,this.controls=s.controls,this.agents=[],this.hideouts=[],this.initialize(this.params),this.timer={},(t=>{const s=t.params,e=g.LI().actions(["play","pause"]),i=[e];let r;t.params.reset_enabled&&(r=g.LI().actions(["rewind"]),i.push(r),r.update((()=>{t.initialize(t.params)}))),e.size(s.widgets.playbutton_size),a.Ys("#controls").select("svg").selectAll(".button").data(i).enter().append(g.Zg).attr("transform","translate(250, 250)"),e.update((()=>{1==e.value()?t.timer=a.FG_((()=>t.go()),s.simulation.delay):t.timer.stop()}))})(this)}initialize(t){this.hideouts=(0,i.Z)((0,r.Z)(t.number_hideouts),(s=>new c(s,t))),this.agents=(0,i.Z)((0,r.Z)(t.N),(s=>new _(s,this.hideouts,t)));const s=t.display_size.width,e=t.display_size.height;u.range([0,s]),y.range([0,e]),this.display.select("#origin").remove();const o=this.display.append("g").attr("id","origin");var n;o.selectAll(".hideout").data(this.hideouts).enter().append("circle").attr("class","hideout").attr("r",(function(t){return u(t.r)})).attr("cx",(t=>u(t.x))).attr("cy",(t=>y(t.y))).style("fill",t.simulation.hideout_color).style("opacity",t.dark_zones?1:0),o.selectAll(".agent").data(this.agents).enter().append("g").attr("class","agent").attr("transform",(t=>`translate(${u(t.x)}, ${y(t.y)})rotate(${t.theta})`)).append("path").attr("d",(n=t.agentsize,a.jvg().x((t=>n*t.x)).y((t=>n*t.y))((0,i.Z)((0,r.Z)(30),(t=>({x:-2*Math.cos(t/30*Math.PI*2),y:Math.sin(t/30*Math.PI*2)*Math.pow(Math.sin(t/30/2*Math.PI*2),6)})))))).attr("fill",((s,e)=>t.colors[e%t.colors.length]))}go(){(0,p.Z)(this.hideouts,(t=>t.set_new_pos())),(0,p.Z)(this.agents,(t=>t.set_new_pos(this.agents,this.hideouts))),this.display.selectAll(".hideout").attr("cx",(t=>u(t.x))).attr("cy",(t=>y(t.y))),this.display.selectAll(".agent").attr("transform",(t=>"translate("+u(t.x)+","+y(t.y)+")rotate("+t.theta+")"))}}},1263:(t,s,e)=>{e.d(s,{Z:()=>a});const a={basic:{N:3,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collision_radius:1,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:.5,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:0,wiggle:0,collective_behavior:!1,dark_zones:!1,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:5.5,y:5.5},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:480,height:480},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw7 center cf"},mode1:{N:3,colors:["rgb(190, 39, 113)","rgb(97, 171, 241)","rgb(38, 34, 144)"],L:128,agentsize:30,dt:1,speed_variation:.5,angular_increment:.2,collision_radius:1,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:.5,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:0,wiggle:0,collective_behavior:!1,dark_zones:!1,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:5.5,y:5.5},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:480},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw7 center cf"},mode2:{N:1,N_def:1,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:.1,alignment_radius:0,ar_def:0,attraction_radius:10,wiggle:0,collective_behavior:!0,dark_zones:!1,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},display_type:"svg",debug:!1,controls_border:!1,display_border:!0,debug_lattice:"debug-grid-16",controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:650},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw7 center cf",reset_enabled:!0},mode3:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,speed_in_the_light:1,speed_in_the_dark:.1,alignment_radius:0,al_def:0,attraction_radius:0,ar_def:0,wiggle:0,collective_behavior:!0,dark_zones:!1,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},display_type:"svg",debug:!1,controls_border:!1,display_border:!0,debug_lattice:"debug-grid-16",controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw8 center cf",reset_enabled:!0},mode4:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,number_hideouts:3,speed_hideouts:.04,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:1,speed_def:1,alignment_radius:2,al_def:2,dark_al:2,attraction_radius:40,ar_def:40,dark_ar:40,wiggle:20,collective_behavior:!0,dark_zones:!0,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw8 center cf",reset_enabled:!0},mode5:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,number_hideouts:3,speed_hideouts:.04,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:1,speed_def:1,alignment_radius:2,al_def:2,dark_al:2,attraction_radius:40,ar_def:40,dark_ar:40,wiggle:20,collective_behavior:!0,dark_zones:!0,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw8 center cf",reset_enabled:!0}}}}]);