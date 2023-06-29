"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[554],{28:(t,e,s)=>{s.d(e,{Z:()=>r});var i=s(8081),a=s.n(i),n=s(3645),o=s.n(n)()(a());o.push([t.id,".control-panel .border {\n\tfill: none;\n\tstroke: black;\n\tstroke-width: 1px;\n}\n\n.display-panel .border {\n\tfill: none;\n\tstroke: black;\n\tstroke-width: 1px;\n}\n\ntable {\n\tfill: none;\n\tposition: relative;\n\ttext-align: center;\n\tfont-size: 18px;\n}\n\ntable td {\n\tmin-width: 77px;\n}\n\n.slider text,\n.axis text {\n\tfont-size: 12px;\n}\n\n.axis path,\n.axis line {\n\tfill: none;\n\tstroke: #000;\n\tshape-rendering: crispEdges;\n}\n  \n#line {\n\tfill: none;\n\tstroke: steelblue;\n\tstroke-width: 1.5px;\n}\n\n#nav {\n\tfont-family: Arial;\n\tborder-style: solid;\n\tborder-width: 1px;\n\tbackground-color: AliceBlue;\n\ttext-align: center;\n\twidth: 835px;\n\theight: 50px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding-left: 50px;\n\tmargin-top: 40px;\n}\n\n.nav-link {\n\tmargin-left: 30px;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: black;\n}\n\na.active-link {\n    font-weight: bold;\n    text-decoration: underline;\n}\n\n#sim {\n\tdisplay: flex;\n\ttext-align: left;\n\tmargin-top: 50px;\n}\n\nbody {\n\tdisplay: flex;\n\theight: 100vh;\n\tflex-direction: column;\n}\n\n#title {\n\tdisplay: flex;\n\tflex-direction: row;\n\tpadding: 10px;\n}\n\n#title-text {\n\tjustify-content: center;\n}\n\n#display {\n\tpadding-left: 0px;\n}\n\n#controls {\n\tpadding-left: 0px;\n}",""]);const r=o},6554:(t,e,s)=>{s.d(e,{Z:()=>B});var i=s(3379),a=s.n(i),n=s(7795),o=s.n(n),r=s(569),l=s.n(r),h=s(3565),d=s.n(h),_=s(9216),c=s.n(_),p=s(4589),g=s.n(p),u=s(28),y={};y.styleTagTransform=g(),y.setAttributes=d(),y.insert=l().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=c(),a()(u.Z,y),u.Z&&u.Z.locals&&u.Z.locals;var b=s(6103),x=s(335),m=s(1897);const w=b.BYU().domain([0,360]).range([0,2*Math.PI]),v=b.BYU().range([0,360]).domain([0,2*Math.PI]),z=(t,e)=>{const s=t.x-e.x,i=t.y-e.y;return Math.sqrt(s*s+i*i)};var f=s(2489),k=s(5420);class M{constructor(t,e,s){this.params=s,this.id=t,this.x=Math.random()*s.L,this.y=Math.random()*s.L,this.theta=360*Math.random(),this.speed_var=1+Math.random()*s.speed_variation,this.ishidden=1==s.dark_zones&&(0,f.Z)(e,(t=>z(this,t)<t.r)).length?1:0,this.speed=this.adjust_speed(e)}adjust_angle(t){let e=[];var s,i,a,n;if(e=(0,f.Z)(t,(t=>z(this,t)<this.params.collision_radius&&t.id!=this.id)),e.length>0)s=this.x-(0,k.Z)(e,(t=>t.x)),i=this.y-(0,k.Z)(e,(t=>t.y));else{const e=(0,f.Z)(t,(t=>{let e=t.x-this.x,s=t.y-this.y;return t.r=Math.sqrt(e*e+s*s),t.r<this.params.attraction_radius&&t.id!=this.id})),o=(0,f.Z)(e,(t=>t.r<this.params.alignment_radius)),r=(0,f.Z)(e,(t=>t.r>this.params.alignment_radius));if(a=this.theta,n=this.theta,o.length>0&&this.params.collective_behavior){const t=(0,k.Z)(o,(t=>Math.cos(w(t.theta)))),e=(0,k.Z)(o,(t=>Math.sin(w(t.theta))));a=v(Math.atan2(e,t))}if(r.length>0&&this.params.collective_behavior){const t=(0,k.Z)(r,(t=>t.x)),e=(0,k.Z)(r,(t=>t.y));n=v(Math.atan2(e-this.y,t-this.x))}s=.5*(Math.cos(w(a))+Math.cos(w(n))),i=.5*(Math.sin(w(a))+Math.sin(w(n)))}const o=Math.cos(w(this.theta))+this.params.angular_increment*s,r=Math.sin(w(this.theta))+this.params.angular_increment*i,l=(self.t_dark+self.t_light)%3==0?this.params.wiggle:0;return v(Math.atan2(r,o))+(Math.random()-.5)*l}adjust_speed(t){return 1!=this.params.dark_zones?this.params.speed_in_the_light:(this.ishidden=(0,f.Z)(t,(t=>z(this,t)<t.r)).length?1:0,this.ishidden?this.params.speed_in_the_dark:this.params.speed_in_the_light)}set_new_pos(t,e){this.theta=this.adjust_angle(t),this.speed=this.adjust_speed(e);const s=w(this.theta);let i=this.params.dt*this.speed*this.speed_var*Math.cos(s),a=this.params.dt*this.speed*this.speed_var*Math.sin(s),n=this.x+i,o=this.y+a;(n<0||n>128)&&(i*=-1),(o<0||o>128)&&(a*=-1),this.x=this.x+i,this.y=this.y+a,this.theta=v(Math.atan2(a,i))}}class Z{constructor(t,e){const s=Math.random()*Math.PI*2;this.id=t,this.x=Math.random()*e.L,this.y=Math.random()*e.L,this.vx=e.speed_hideouts*Math.cos(s),this.vy=e.speed_hideouts*Math.sin(s),this.r=e.size_hideouts,this.params=e}set_new_pos(){let t=this.params.dt*this.vx,e=this.params.dt*this.vy;t*=(this.id+1)/3,e*=(this.id+1)/3;let s=this.x+t,i=this.y+e;(s<0||s>this.params.L)&&(t*=-1,this.vx*=-1),(i<0||i>this.params.L)&&(e*=-1,this.vy*=-1),this.x=this.x+t,this.y=this.y+e}}var L=s(9400),A=s(7467);s(1263);const I=b.BYU().domain([0,128]),j=b.BYU().domain([0,128]);class B{constructor(t){this.params=t;const e=(t=>{const e=b.Ys("#sim"),s=e.append("div").attr("id","display").attr("class","display-panel").append("svg").attr("viewBox",`0 0 ${t.display_size.width} ${t.display_size.height}`).style("height","500px").style("width","500px"),i=e.append("div").attr("id","controls").attr("class","control-panel");i.append("div").attr("id","control-text").style("width","500px");const a=i.append("svg").attr("viewBox",`0 0 ${t.controls_size.width} ${t.controls_size.height}`);return t.controls_border&&a.append("rect").attr("class","border").attr("width",t.controls_size.width).attr("height",t.controls_size.height),t.display_border&&s.append("rect").attr("class","border").attr("width",t.display_size.width).attr("height",t.display_size.height),{display:s,controls:a}})(t);this.display=e.display,this.controls=e.controls,this.agents=[],this.hideouts=[],this.initialize(this.params),(t=>{const e=t.params;let s={};const i=A.LI().actions(["play","pause"]),a=[i];let n;t.params.reset_enabled&&(n=A.LI().actions(["rewind"]),a.push(n),n.update((()=>{t.initialize(t.params)}))),i.size(e.widgets.playbutton_size),b.Ys("#controls").select("svg").selectAll(".button").data(a).enter().append(A.Zg).attr("transform","translate(250, 250)"),i.update((()=>{1==i.value()?s=b.FG_((()=>t.go()),e.simulation.delay):s.stop()}))})(this)}initialize(t){this.hideouts=(0,x.Z)((0,m.Z)(t.number_hideouts),(e=>new Z(e,t))),this.agents=(0,x.Z)((0,m.Z)(t.N),(e=>new M(e,this.hideouts,t)));const e=t.display_size.width,s=t.display_size.height;I.range([0,e]),j.range([0,s]),this.display.select("#origin").remove();const i=this.display.append("g").attr("id","origin");var a;i.selectAll(".hideout").data(this.hideouts).enter().append("circle").attr("class","hideout").attr("r",(function(t){return I(t.r)})).attr("cx",(t=>I(t.x))).attr("cy",(t=>j(t.y))).style("fill",t.simulation.hideout_color).style("opacity",t.dark_zones?1:0),i.selectAll(".agent").data(this.agents).enter().append("g").attr("class","agent").attr("transform",(t=>`translate(${I(t.x)}, ${j(t.y)})rotate(${t.theta})`)).append("path").attr("d",(a=t.agentsize,b.jvg().x((t=>a*t.x)).y((t=>a*t.y))((0,x.Z)((0,m.Z)(30),(t=>({x:-2*Math.cos(t/30*Math.PI*2),y:Math.sin(t/30*Math.PI*2)*Math.pow(Math.sin(t/30/2*Math.PI*2),6)})))))).attr("fill",((e,s)=>t.colors[s%t.colors.length]))}go(){(0,L.Z)(this.hideouts,(t=>t.set_new_pos())),(0,L.Z)(this.agents,(t=>t.set_new_pos(this.agents,this.hideouts))),this.display.selectAll(".hideout").attr("cx",(t=>I(t.x))).attr("cy",(t=>j(t.y))),this.display.selectAll(".agent").attr("transform",(t=>"translate("+I(t.x)+","+j(t.y)+")rotate("+t.theta+")"))}}},1263:(t,e,s)=>{s.d(e,{Z:()=>i});const i={basic:{N:3,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collision_radius:1,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:.5,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:0,wiggle:0,collective_behavior:!1,dark_zones:!1,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:5.5,y:5.5},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:480,height:480},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode1:{N:3,colors:["rgb(190, 39, 113)","rgb(97, 171, 241)","rgb(38, 34, 144)"],L:128,agentsize:30,dt:1,speed_variation:.5,angular_increment:.2,collision_radius:1,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:.5,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:0,wiggle:0,collective_behavior:!1,dark_zones:!1,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:5.5,y:5.5},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:480},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode2:{N:1,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:10,wiggle:0,collective_behavior:!0,dark_zones:!1,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},display_type:"svg",debug:!1,controls_border:!1,display_border:!0,debug_lattice:"debug-grid-16",controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:650},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode3:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,speed_in_the_light:1,speed_in_the_dark:.1,alignment_radius:2,attraction_radius:10,wiggle:0,collective_behavior:!0,dark_zones:!1,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},display_type:"svg",debug:!1,controls_border:!1,display_border:!0,debug_lattice:"debug-grid-16",controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode4:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,number_hideouts:3,speed_hideouts:.2,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:1,alignment_radius:2.25,dark_al:2.25,attraction_radius:20,dark_ar:20,wiggle:20,collective_behavior:!0,dark_zones:!0,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode5:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,number_hideouts:3,speed_hideouts:.2,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:1,alignment_radius:2.25,dark_al:2.25,attraction_radius:20,dark_ar:20,wiggle:20,collective_behavior:!0,dark_zones:!0,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf",reset_enabled:!0}}}}]);