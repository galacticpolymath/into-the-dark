"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[119],{504:(t,e,s)=>{s.d(e,{Z:()=>x}),s(4089);var a=s(6103),i=s(335),r=s(1897);const n=a.BYU().domain([0,360]).range([0,2*Math.PI]),o=a.BYU().range([0,360]).domain([0,2*Math.PI]),l=(t,e)=>{const s=t.x-e.x,a=t.y-e.y;return Math.sqrt(s*s+a*a)};var d=s(2489),h=s(5420);class p{constructor(t,e,s){this.params=s,this.id=t,this.x=Math.random()*s.L,this.y=Math.random()*s.L,this.theta=360*Math.random(),this.speed_var=1+Math.random()*s.speed_variation,this.ishidden=1==s.dark_zones&&(0,d.Z)(e,(t=>l(this,t)<t.r)).length?1:0,this.speed=this.adjust_speed(e)}adjust_angle(t){let e=[];var s,a,i,r;if(e=(0,d.Z)(t,(t=>l(this,t)<this.params.collision_radius&&t.id!=this.id)),e.length>0)s=this.x-(0,h.Z)(e,(t=>t.x)),a=this.y-(0,h.Z)(e,(t=>t.y));else{const e=(0,d.Z)(t,(t=>{let e=t.x-this.x,s=t.y-this.y;return t.r=Math.sqrt(e*e+s*s),t.r<this.params.attraction_radius&&t.id!=this.id})),l=(0,d.Z)(e,(t=>t.r<this.params.alignment_radius)),p=(0,d.Z)(e,(t=>t.r>this.params.alignment_radius));if(i=this.theta,r=this.theta,l.length>0&&this.params.collective_behavior){const t=(0,h.Z)(l,(t=>Math.cos(n(t.theta)))),e=(0,h.Z)(l,(t=>Math.sin(n(t.theta))));i=o(Math.atan2(e,t))}if(p.length>0&&this.params.collective_behavior){const t=(0,h.Z)(p,(t=>t.x)),e=(0,h.Z)(p,(t=>t.y));r=o(Math.atan2(e-this.y,t-this.x))}s=.5*(Math.cos(n(i))+Math.cos(n(r))),a=.5*(Math.sin(n(i))+Math.sin(n(r)))}const p=Math.cos(n(this.theta))+this.params.angular_increment*s,_=Math.sin(n(this.theta))+this.params.angular_increment*a,c=(self.t_dark+self.t_light)%3==0?this.params.wiggle:0;return o(Math.atan2(_,p))+(Math.random()-.5)*c}adjust_speed(t){return 1!=this.params.dark_zones?this.params.speed_in_the_light:(this.ishidden=(0,d.Z)(t,(t=>l(this,t)<t.r)).length?1:0,this.ishidden?this.params.speed_in_the_dark:this.params.speed_in_the_light)}set_new_pos(t,e){this.theta=this.adjust_angle(t),this.speed=this.adjust_speed(e);const s=n(this.theta);let a=this.params.dt*this.speed*this.speed_var*Math.cos(s),i=this.params.dt*this.speed*this.speed_var*Math.sin(s),r=this.x+a,l=this.y+i;(r<0||r>128)&&(a*=-1),(l<0||l>128)&&(i*=-1),this.x=this.x+a,this.y=this.y+i,this.theta=o(Math.atan2(i,a))}}class _{constructor(t,e){const s=Math.random()*Math.PI*2;this.id=t,this.x=Math.random()*e.L,this.y=Math.random()*e.L,this.vx=e.speed_hideouts*Math.cos(s),this.vy=e.speed_hideouts*Math.sin(s),this.r=e.size_hideouts,this.params=e}set_new_pos(){let t=this.params.dt*this.vx,e=this.params.dt*this.vy;t*=(this.id+1)/3,e*=(this.id+1)/3;let s=this.x+t,a=this.y+e;(s<0||s>this.params.L)&&(t*=-1,this.vx*=-1),(a<0||a>this.params.L)&&(e*=-1,this.vy*=-1),this.x=this.x+t,this.y=this.y+e}}var c=s(9400),g=s(7467);s(1263);const y=a.BYU().domain([0,128]),u=a.BYU().domain([0,128]);class x{constructor(t){this.params=t;const e=(t=>{const e=a.Ys("#sim").classed(t.container_class,!0),s=e.append("div").attr("id","display").attr("class","display-panel").classed(t.display_class,!0).append("svg").attr("viewBox",`0 0 ${t.display_size.width} ${t.display_size.height}`).style("width","100%"),i=e.append("div").attr("id","controls").attr("class","control-panel").classed(t.controls_class,!0);i.append("div").attr("id","control-text").style("width","500px");const r=i.append("svg").attr("viewBox",`0 0 ${t.controls_size.width} ${t.controls_size.height}`);return t.controls_border&&r.append("rect").attr("class","border").attr("width",t.controls_size.width).attr("height",t.controls_size.height),t.display_border&&s.append("rect").attr("class","border").attr("width",t.display_size.width).attr("height",t.display_size.height),{display:s,controls:r}})(t);this.display=e.display,this.controls=e.controls,this.agents=[],this.hideouts=[],this.initialize(this.params),this.timer={},(t=>{const e=t.params,s=g.LI().actions(["play","pause"]),i=[s];let r;t.params.reset_enabled&&(r=g.LI().actions(["rewind"]),i.push(r),r.update((()=>{t.initialize(t.params)}))),s.size(e.widgets.playbutton_size),a.Ys("#controls").select("svg").selectAll(".button").data(i).enter().append(g.Zg).attr("transform","translate(250, 250)"),s.update((()=>{1==s.value()?t.timer=a.FG_((()=>t.go()),e.simulation.delay):t.timer.stop()}))})(this)}initialize(t){this.hideouts=(0,i.Z)((0,r.Z)(t.number_hideouts),(e=>new _(e,t))),this.agents=(0,i.Z)((0,r.Z)(t.N),(e=>new p(e,this.hideouts,t)));const e=t.display_size.width,s=t.display_size.height;y.range([0,e]),u.range([0,s]),this.display.select("#origin").remove();const n=this.display.append("g").attr("id","origin");var o;n.selectAll(".hideout").data(this.hideouts).enter().append("circle").attr("class","hideout").attr("r",(function(t){return y(t.r)})).attr("cx",(t=>y(t.x))).attr("cy",(t=>u(t.y))).style("fill",t.simulation.hideout_color).style("opacity",t.dark_zones?1:0),n.selectAll(".agent").data(this.agents).enter().append("g").attr("class","agent").attr("transform",(t=>`translate(${y(t.x)}, ${u(t.y)})rotate(${t.theta})`)).append("path").attr("d",(o=t.agentsize,a.jvg().x((t=>o*t.x)).y((t=>o*t.y))((0,i.Z)((0,r.Z)(30),(t=>({x:-2*Math.cos(t/30*Math.PI*2),y:Math.sin(t/30*Math.PI*2)*Math.pow(Math.sin(t/30/2*Math.PI*2),6)})))))).attr("fill",((e,s)=>t.colors[s%t.colors.length]))}go(){(0,c.Z)(this.hideouts,(t=>t.set_new_pos())),(0,c.Z)(this.agents,(t=>t.set_new_pos(this.agents,this.hideouts))),this.display.selectAll(".hideout").attr("cx",(t=>y(t.x))).attr("cy",(t=>u(t.y))),this.display.selectAll(".agent").attr("transform",(t=>"translate("+y(t.x)+","+u(t.y)+")rotate("+t.theta+")"))}}},2119:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var a=s(504),i=s(6103),r=s(2582);const n=t=>{let e=i.Ys("#controls");const s=["Red","Blue","Purple"],a=i.BYU().domain([.1333,3.1333]).range([1,10]);let r=t.map((t=>({Color:s[t.id],X:(t.x/13).toFixed(0),Y:(10-t.y/13).toFixed(0),Angle:t.theta.toFixed(0),Speed:a(t.speed).toFixed(0)}))),n=["Color","X","Y","Angle","Speed"],o=e.select("table");o.empty()&&(o=e.append("table").style("background-color","Gainsboro").style("color","black").style("border","1px solid Gray").attr("id","sim1-table"),o.append("thead").append("tr").selectAll("th").data(n).enter().append("th").text((t=>t)),o.append("tbody"));let l=o.select("tbody").selectAll("tr").data(r);l.enter().append("tr").merge(l).selectAll("td").data((t=>n.map((e=>t[e])))).join("td").text((t=>t)),l.exit().remove()};var o=s(1263);class l extends a.Z{constructor(){const t=o.Z.mode1;super(t),this.params=t,i.Ys("#controls").style("height","450px").select("svg").attr("viewBox","0 0 480 200"),i.Ys("#control-text").style("position","relative").html("This is a simulation that models fish behavior. Each<br/>            virtual fish is a point in a data grid.<p/>            It has an X and a Y coordinate, a speed, and a direction.<p/>            Try changing the speed with the slider below."),(t=>{i.Ys("#controls").select("svg");const e=(i.Ys("#controls").select(".button").attr("transform",`translate(240, ${t.widgets.playbutton_size/2+150-130})`),i.Ys("#controls").select("svg").append("g").attr("id","sliders"));for(let t=0;t<10;t++)e.append("line").style("stroke-width",1).style("stroke","black").attr("x1",10+450*t/9).attr("y1",148).attr("x2",10+450*t/9).attr("y2",152);const s=(0,r.Ao)().min(1).max(10).step(1).width(450).value(2).tickValues([]).displayValue(!1).on("onchange",(e=>{t.speed_in_the_light=e/3-.2}));e.append("g").call(s).attr("transform","translate(15, 150)"),e.append("text").text("Slow").attr("x",10).attr("y",175).style("font-size","16px"),e.append("text").text("Fast").attr("x",430).attr("y",175).style("font-size","14px").attr("text-anchor","end"),e.append("text").text("Speed").attr("x",237).attr("y",130).style("font-size","24px").attr("text-anchor","middle")})(this.params),n(this.agents),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",0).attr("y1",250).attr("x2",10).attr("y2",250),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",250).attr("y1",490).attr("x2",250).attr("y2",500),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",25).attr("y1",490).attr("x2",25).attr("y2",500),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",475).attr("y1",490).attr("x2",475).attr("y2",500),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",0).attr("y1",25).attr("x2",10).attr("y2",25),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",0).attr("y1",475).attr("x2",10).attr("y2",475),this.display.append("text").text("0").attr("transform","translate(25, 480)").style("font-size","14px").style("text-anchor","middle"),this.display.append("text").text("5").attr("transform","translate(25, 255)").style("font-size","14px").style("text-anchor","middle"),this.display.append("text").text("10").attr("transform","translate(25, 30)").style("font-size","14px").style("text-anchor","middle"),this.display.append("text").text("5").attr("transform","translate(250, 480)").style("font-size","14px").style("text-anchor","middle"),this.display.append("text").text("10").attr("transform","translate(475, 480)").style("font-size","14px").style("text-anchor","middle"),this.display.append("text").text("Y").attr("transform","translate(49, 257)").style("font-size","20px").style("text-anchor","middle").attr("font-weight",600),this.display.append("text").text("X").attr("transform","translate(250, 455)").style("font-size","20px").style("text-anchor","middle").attr("font-weight",600)}go(){n(this.agents),super.go()}}function d(){return document.getElementById("sim").innerHTML="",new l}},1263:(t,e,s)=>{s.d(e,{Z:()=>a});const a={basic:{N:3,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collision_radius:1,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:.5,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:0,wiggle:0,collective_behavior:!1,dark_zones:!1,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:5.5,y:5.5},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:480,height:480},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode1:{N:3,colors:["rgb(190, 39, 113)","rgb(97, 171, 241)","rgb(38, 34, 144)"],L:128,agentsize:30,dt:1,speed_variation:.5,angular_increment:.2,collision_radius:1,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:.5,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:0,wiggle:0,collective_behavior:!1,dark_zones:!1,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:5.5,y:5.5},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:480},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode2:{N:1,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,number_hideouts:0,speed_hideouts:.075,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:.1,alignment_radius:0,attraction_radius:10,wiggle:0,collective_behavior:!0,dark_zones:!1,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},display_type:"svg",debug:!1,controls_border:!1,display_border:!0,debug_lattice:"debug-grid-16",controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:650},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode3:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,speed_in_the_light:1,speed_in_the_dark:.1,alignment_radius:2,attraction_radius:10,wiggle:0,collective_behavior:!0,dark_zones:!1,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},display_type:"svg",debug:!1,controls_border:!1,display_border:!0,debug_lattice:"debug-grid-16",controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode4:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,number_hideouts:3,speed_hideouts:.2,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:1,alignment_radius:2.25,dark_al:2.25,attraction_radius:20,dark_ar:20,wiggle:20,collective_behavior:!0,dark_zones:!0,widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf"},mode5:{N:30,colors:["rgb(38, 34, 144)"],L:128,agentsize:15,dt:1,speed_variation:.5,angular_increment:.2,collission_radius:1,number_hideouts:3,speed_hideouts:.2,size_hideouts:30,speed_in_the_light:1,speed_in_the_dark:1,alignment_radius:2.25,dark_al:2.25,attraction_radius:20,dark_ar:20,wiggle:20,collective_behavior:!0,dark_zones:!0,text_pos:{x:0,y:40},widgets:{toggle_anchor:{x:7,y:1.5},toggle_label_pos:"right",toggle_gap:1.5,playbutton_size:60,playbutton_anchor:{x:0,y:0},backbutton_anchor:{x:4,y:4.5},resetbutton_anchor:{x:2,y:4.5}},simulation:{delay:0,hideout_color:"rgb(80,80,80)"},controls_border:!1,display_border:!0,controls_grid:{nx:12,ny:12},display_size:{width:500,height:500},controls_size:{width:600,height:600},display_class:"fl w-100 w-50-ns pa2 ph3-ns",controls_class:"fl w-100 w-50-ns pa2 ph3-ns",container_class:"mw8 center cf",reset_enabled:!0}}}}]);