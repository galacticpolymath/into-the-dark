export default function setup_modal() {
    const sim = document.getElementById('sim')
    const newDiv = document.createElement("div")
    newDiv.id = 'modal'
    newDiv.className = "ba bw1"
    newDiv.style.display = "block";
    const modal = sim.appendChild(newDiv)
    
    const overlay = document.getElementById('overlay')
    overlay.style.display = "block";

    modal.innerHTML = 
    `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h1 style='color:rgb(38, 34, 144)'>Part 5: Let's run an experiment!</h1>
      Now that you think you know what variable(s) control how a \
      school of fish finds its way to the dark and stays there, let's put it to the test. \
      <p>Goal: Maximize the percentage of fish in the dark. </p>\
      <p>Steps: </p>\
      <ol><li>When you press play, a 30 second trial will start. At the end, the average settings \
      and % Fish in the Dark will be added to the table. </li>\
      <li>Sliders can be adjusted throughout a trial. Use the running average plot to understand \
      how the sliders affect fish behavior.</li>
      <li>Run several trials to try to maximize the % of fish in the dark!</li>
      <li>See how your high score compares to others in your group.</li></ol>
    </div>`

    const span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == overlay) {
          modal.style.display = "none";
          overlay.style.display = "none";
        }
    }
  
    const info = document.createElement('div');
    info.textContent = 'Info';
    info.className = 'ph3 pv1 ba ma3';
    info.style.cursor = 'pointer';
    info.style.display = 'inline-block';
    info.onclick = function() {
      modal.style.display = "block";
      overlay.style.display = "block";
    };
    document.getElementById('button-container').append(info);
}

