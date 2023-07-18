"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[477,170,889],{9477:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var s=a(8882),r=a(4170),l=a(889),n=a(8508),d=a(1263);class i extends s.Z{constructor(){const t=d.Z.mode1;super(t),this.params=t,n.Ys("#controls").style("height","450px").select("svg").attr("viewBox","0 0 480 100"),n.Ys("#control-text").style("position","relative").html("This is a simulation that models fish behavior. Each<br/>            virtual fish is a point in a data grid.<p/>            It has an X and a Y coordinate, a speed, and a direction.<p/>            Try changing the speed with the slider below."),(0,r.default)(this.params),(0,l.default)(this.agents),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",0).attr("y1",250).attr("x2",10).attr("y2",250),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",250).attr("y1",490).attr("x2",250).attr("y2",500),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",25).attr("y1",490).attr("x2",25).attr("y2",500),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",475).attr("y1",490).attr("x2",475).attr("y2",500),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",0).attr("y1",25).attr("x2",10).attr("y2",25),this.display.append("line").style("stroke-width",1).style("stroke","black").attr("x1",0).attr("y1",475).attr("x2",10).attr("y2",475),this.display.append("text").text("0").attr("transform","translate(25, 480)").style("font-size","14px").style("text-anchor","middle"),this.display.append("text").text("5").attr("transform","translate(25, 255)").style("font-size","14px").style("text-anchor","middle"),this.display.append("text").text("10").attr("transform","translate(25, 30)").style("font-size","14px").style("text-anchor","middle"),this.display.append("text").text("5").attr("transform","translate(250, 480)").style("font-size","14px").style("text-anchor","middle"),this.display.append("text").text("10").attr("transform","translate(475, 480)").style("font-size","14px").style("text-anchor","middle"),this.display.append("text").text("Y").attr("transform","translate(49, 257)").style("font-size","20px").style("text-anchor","middle").attr("font-weight",600),this.display.append("text").text("X").attr("transform","translate(250, 455)").style("font-size","20px").style("text-anchor","middle").attr("font-weight",600)}go(){(0,l.default)(this.agents),super.go()}}function o(){return document.getElementById("sim").innerHTML="",new i}},4170:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var s=a(8508),r=a(8662);const l=t=>{s.Ys("#controls").select("svg");const e=s.Ys("#controls").select("svg").append("g").attr("id","sliders").attr("transform","translate(10,0)");for(let t=0;t<10;t++)e.append("line").style("stroke-width",1).style("stroke","black").attr("x1",10+410*t/9).attr("y1",48).attr("x2",10+410*t/9).attr("y2",52);const a=(0,r.Ao)().min(1).max(10).step(1).width(410).value(2).tickValues([]).displayValue(!1).on("onchange",(e=>{t.speed_in_the_light=e/3-.2}));e.append("g").call(a).attr("transform","translate(15, 50)"),e.append("text").text("Slow").attr("x",10).attr("y",75).style("font-size","16px"),e.append("text").text("Fast").attr("x",425).attr("y",75).style("font-size","16px").attr("text-anchor","end"),e.append("text").text("Speed").attr("x",217).attr("y",30).style("font-size","20px").attr("text-anchor","middle")}},889:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(8508);const r=t=>{let e=s.Ys("#controls");const a=["Red","Blue","Purple"],r=s.BYU().domain([.1333,3.1333]).range([1,10]);let l=t.map((t=>({Color:a[t.id],X:(t.x/13).toFixed(0),Y:(10-t.y/13).toFixed(0),Angle:t.theta.toFixed(0),Speed:r(t.speed).toFixed(0)}))),n=["Color","X","Y","Angle","Speed"],d=e.select("table");d.empty()&&(d=e.append("table").style("background-color","Gainsboro").style("color","black").style("border","1px solid Gray").attr("id","sim1-table"),d.append("thead").append("tr").selectAll("th").data(n).enter().append("th").text((t=>t)),d.append("tbody"));let i=d.select("tbody").selectAll("tr").data(l);i.enter().append("tr").merge(i).selectAll("td").data((t=>n.map((e=>t[e])))).join("td").text((t=>t)),i.exit().remove()}}}]);