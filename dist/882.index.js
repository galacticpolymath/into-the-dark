"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[882],{8882:(t,s,e)=>{e.d(s,{Z:()=>y}),e(4089);var i=e(3555),a=e(2489),r=e(5420);class n{constructor(t,s,e){this.params=e,this.id=t,this.x=Math.random()*e.L,this.y=Math.random()*e.L,this.theta=360*Math.random(),this.speed_var=1+Math.random()*e.speed_variation,this.ishidden=1==e.dark_zones&&(0,a.Z)(s,(t=>(0,i.TK)(this,t)<t.r)).length?1:0,this.speed=this.adjust_speed(s)}adjust_angle(t){let s=[];var e,n,o,h;if(s=(0,a.Z)(t,(t=>(0,i.TK)(this,t)<this.params.collision_radius&&t.id!=this.id)),s.length>0)e=this.x-(0,r.Z)(s,(t=>t.x)),n=this.y-(0,r.Z)(s,(t=>t.y));else{const s=(0,a.Z)(t,(t=>{let s=t.x-this.x,e=t.y-this.y;return t.r=Math.sqrt(s*s+e*e),t.r<this.params.attraction_radius&&t.id!=this.id})),l=(0,a.Z)(s,(t=>t.r<this.params.alignment_radius)),d=(0,a.Z)(s,(t=>t.r>this.params.alignment_radius));if(o=this.theta,h=this.theta,l.length>0&&this.params.collective_behavior){const t=(0,r.Z)(l,(t=>Math.cos((0,i.Vl)(t.theta)))),s=(0,r.Z)(l,(t=>Math.sin((0,i.Vl)(t.theta))));o=(0,i.BV)(Math.atan2(s,t))}if(d.length>0&&this.params.collective_behavior){const t=(0,r.Z)(d,(t=>t.x)),s=(0,r.Z)(d,(t=>t.y));h=(0,i.BV)(Math.atan2(s-this.y,t-this.x))}e=.5*(Math.cos((0,i.Vl)(o))+Math.cos((0,i.Vl)(h))),n=.5*(Math.sin((0,i.Vl)(o))+Math.sin((0,i.Vl)(h)))}const l=Math.cos((0,i.Vl)(this.theta))+this.params.angular_increment*e,d=Math.sin((0,i.Vl)(this.theta))+this.params.angular_increment*n,_=(self.t_dark+self.t_light)%3==0?this.params.wiggle:0;return(0,i.BV)(Math.atan2(d,l))+(Math.random()-.5)*_}adjust_speed(t){return 1!=this.params.dark_zones?this.params.speed_in_the_light:(this.ishidden=(0,a.Z)(t,(t=>(0,i.TK)(this,t)<t.r)).length?1:0,this.ishidden?this.params.speed_in_the_dark:this.params.speed_in_the_light)}set_new_pos(t,s){this.theta=this.adjust_angle(t),this.speed=this.adjust_speed(s);const e=(0,i.Vl)(this.theta);let a=this.params.dt*this.speed*this.speed_var*Math.cos(e),r=this.params.dt*this.speed*this.speed_var*Math.sin(e),n=this.x+a,o=this.y+r;(n<0||n>128)&&(a*=-1),(o<0||o>128)&&(r*=-1),this.x=this.x+a,this.y=this.y+r,this.theta=(0,i.BV)(Math.atan2(r,a))}}class o{constructor(t,s){const e=Math.random()*Math.PI*2;this.id=t,this.x=Math.random()*s.L,this.y=Math.random()*s.L,this.vx=s.speed_hideouts*Math.cos(e),this.vy=s.speed_hideouts*Math.sin(e),this.r=s.size_hideouts,this.params=s}set_new_pos(){let t=this.params.dt*this.vx,s=this.params.dt*this.vy,e=this.x+t,i=this.y+s;(e<0||e>this.params.L)&&(t*=-1,this.vx*=-1),(i<0||i>this.params.L)&&(s*=-1,this.vy*=-1),this.x=this.x+t,this.y=this.y+s}}var h=e(335),l=e(1897),d=e(9400),_=e(8508),c=e(7126);function p(t,s){t.playing?s.src="./pause.svg":s.src="./play.svg"}e(1263);const g=_.BYU().domain([0,128]),u=_.BYU().domain([0,128]);class y{constructor(t){this.params=t;const s=(t=>{const s=_.Ys("#sim").classed("mw8 center cf",!0);s.append("div").attr("id","overhead-text").style("width","100%").style("word-wrap","break-word");const e=s.append("div").attr("id","display").attr("class","display-panel").classed(t.display_class,!0).append("svg").attr("viewBox",`0 0 ${t.display_size.width} ${t.display_size.height}`),i=s.append("div").attr("id","controls").attr("class","control-panel").classed(t.controls_class,!0);i.append("div").attr("id","control-text").style("width","100%").classed("notsim5",!0),i.append("div").attr("id","button-container").style("height","50px").attr("class","flex w-95 items-center justify-center");const a=i.append("svg").attr("viewBox",`0 0 ${t.controls_size.width} ${t.controls_size.height}`);return t.controls_border&&a.append("rect").attr("class","border").attr("width",t.controls_size.width).attr("height",t.controls_size.height),t.display_border&&e.append("rect").attr("class","border").attr("width",t.display_size.width).attr("height",t.display_size.height),{display:e,controls:a}})(t);this.display=s.display,this.controls=s.controls,this.agents=[],this.hideouts=[],this.initialize(this.params),this.timer={},this.playing=!1,function(t){const s=document.getElementById("button-container");s.innerHTML='<img id="playpause" src=./play.svg width="30" height="30" class=\'pr3\'/>',t.params.reset_enabled&&(s.innerHTML+='<img id="reset" src=./reset.svg width="30" height="30" class=\'ph2\'/>',document.getElementById("reset").addEventListener("click",(function(){t.playing=!1,t.timer&&t.timer.stop(),p(t,e),t.reset(t.params)})));const e=document.getElementById("playpause");e.addEventListener("click",(function(){t.playing=!t.playing,p(t,e),t.playing?(t.start&&(t.start=c.ou.now()),t.timer=_.FG_((()=>t.go()))):t.timer.stop()}))}(this)}initialize(t){this.hideouts=(0,h.Z)((0,l.Z)(t.number_hideouts),(s=>new o(s,t))),this.agents=(0,h.Z)((0,l.Z)(t.N),(s=>new n(s,this.hideouts,t)));const s=t.display_size.width,e=t.display_size.height;g.range([0,s]),u.range([0,e]),this.display.select("#origin").remove();const a=this.display.append("g").attr("id","origin");a.selectAll(".hideout").data(this.hideouts).enter().append("circle").attr("class","hideout").attr("r",(function(t){return g(t.r)})).attr("cx",(t=>g(t.x))).attr("cy",(t=>u(t.y))).style("fill",t.simulation.hideout_color).style("opacity",t.dark_zones?1:0),a.selectAll(".agent").data(this.agents).enter().append("g").attr("class","agent").attr("transform",(t=>`translate(${g(t.x)}, ${u(t.y)})rotate(${t.theta})`)).append("path").attr("d",(0,i.bx)(t.agentsize)).attr("fill",((s,e)=>t.colors[e%t.colors.length]))}go(){(0,d.Z)(this.hideouts,(t=>t.set_new_pos())),(0,d.Z)(this.agents,(t=>t.set_new_pos(this.agents,this.hideouts))),this.display.selectAll(".hideout").attr("cx",(t=>g(t.x))).attr("cy",(t=>u(t.y))),this.display.selectAll(".agent").attr("transform",(t=>"translate("+g(t.x)+","+u(t.y)+")rotate("+t.theta+")"))}}},1263:(t,s,e)=>{e.d(s,{Z:()=>i});const i={basic:{N:3,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collision_radius:1,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:.5,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:0,wiggle:0,collective_behavior:!1,dark_zones:!1,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:5.5,y:5.5},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:480,height:480},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw7 center cf"},mode1:{N:3,colors:["rgb(190, 39, 113)","rgb(97, 171, 241)","rgb(38, 34, 144)"],L:128,agentsize:30,dt:1,speed_variation:.5,angular_increment:.2,collision_radius:1,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:.5,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:0,wiggle:0,collective_behavior:!1,dark_zones:!1,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:5.5,y:5.5},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:480},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw7 center cf"},mode2:{N:1,N_def:1,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:.1,alignment_radius:0,ar_def:0,attraction_radius:0,wiggle:0,collective_behavior:!0,dark_zones:!1,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},display_type:"svg",debug:!1,controls_border:!1,display_border:!0,debug_lattice:"debug-grid-16",controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:650},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw7 center cf",reset_enabled:!0},mode3:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,speed_in_the_light:1,speed_in_the_dark:.1,alignment_radius:0,al_def:0,attraction_radius:0,ar_def:0,wiggle:0,collective_behavior:!0,dark_zones:!1,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},display_type:"svg",debug:!1,controls_border:!1,display_border:!0,debug_lattice:"debug-grid-16",controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw8 center cf",reset_enabled:!0},mode4:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,number_hideouts:3,speed_hideouts:.04,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:1,speed_def:1,alignment_radius:2,al_def:2,dark_al:2,attraction_radius:40,ar_def:40,dark_ar:40,wiggle:20,collective_behavior:!0,dark_zones:!0,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw8 center cf",reset_enabled:!0},mode5:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,number_hideouts:3,speed_hideouts:.04,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:1,speed_def:1,alignment_radius:2,al_def:2,dark_al:2,attraction_radius:40,ar_def:40,dark_ar:40,wiggle:20,collective_behavior:!0,dark_zones:!0,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:400},display_class:"fl w-100 w-50-ns ph3-ns",controls_class:"fl w-100 w-50-ns ph3-ns",container_class:"mw8 center cf",reset_enabled:!0}}},3555:(t,s,e)=>{e.d(s,{BV:()=>o,TK:()=>h,Vl:()=>n,bx:()=>d,tD:()=>l});var i=e(8508),a=e(335),r=e(1897);const n=i.BYU().domain([0,360]).range([0,2*Math.PI]),o=i.BYU().range([0,360]).domain([0,2*Math.PI]),h=(t,s)=>{const e=t.x-s.x,i=t.y-s.y;return Math.sqrt(e*e+i*i)},l=(t,s,e)=>(t*(e-1)+s)/e,d=t=>i.jvg().x((s=>t*s.x)).y((s=>t*s.y))((0,a.Z)((0,r.Z)(30),(t=>({x:-2*Math.cos(t/30*Math.PI*2),y:Math.sin(t/30*Math.PI*2)*Math.pow(Math.sin(t/30/2*Math.PI*2),6)}))))}}]);