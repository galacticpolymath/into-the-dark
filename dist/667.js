"use strict";(self.webpackChunk_explorables_into_the_dark=self.webpackChunk_explorables_into_the_dark||[]).push([[667],{8667:(e,n,t)=>{function a(){const e=document.createElement("div");return e.textContent="Info",e.className="ph3 pv1 ba mv3",e.style.cursor="pointer",e.style.display="inline-block",e.onclick=function(){modal.style.display="block",overlay.style.display="block"},e}function l(){const e=document.getElementById("sim"),n=document.createElement("div");n.id="modal",n.className="ba bw1",n.style.display="block";const t=e.appendChild(n),l=document.getElementById("overlay");l.style.display="block",t.innerHTML='\n    <div class="modal-content">\n      <span class="close">&times;</span>\n      <h1 style=\'color:rgb(38, 34, 144)\'>Part 1: Intro</h1>\n      <p>This is a simulation that models fish behavior. Each virtual fish is a point in a data grid.       It has an X and a Y coordinate, a speed, and a direction. Try changing the speed to see what happens.</p> \n    </div>',document.getElementsByClassName("close")[0].onclick=function(){t.style.display="none",l.style.display="none"},window.onclick=function(e){e.target==l&&(t.style.display="none",l.style.display="none")},document.getElementById("info-container").append(a()),document.getElementById("overhead-info").append(a())}t.r(n),t.d(n,{default:()=>l})}}]);