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
      <h1 style='color:rgb(38, 34, 144)'>Part 2: Groups</h1>
      <p>So far, the fish have all been moving randomly on their own. \
      We can simulate group behavior by introducing 2 new variables and \
      changing the algorithm (simulation rules). On this page, each fish (i) \
      will follow its nearest neighbor if it falls within the defined attraction radius.</p> 
      <p><b>Play with the sliders, explore, and observe!</b></p>
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