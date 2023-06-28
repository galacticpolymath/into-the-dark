import fishPng from './circle fish school.png'

export default function load () {
    let div = document.getElementById("sim");
    div.innerHTML = '';

    const introHTML = 
        `<div id="title">
            <div id="title-text">
                <h5>ASDF loaded from title.js</h5>
                <h1>Swimming in the Dark</h1>
                <h3>A simulation of fish schooling behavior</h3>
                <h6>This Simulation Connects to Part 4 of GP's "Animal Collective" Lesson</h6>
            </div>
            <div id="fish">
                
                    <img src='./circle fish school.png' alt="fish collective behavior" width="400" height="400">
                
            </div>
        </div>`;

    div.innerHTML = introHTML;
}   
    