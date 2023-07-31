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
      <h1 style='color:rgb(38, 34, 144)'>Part 4: Dark</h1>
      <p>Hiding in the dark is a common strategy for prey to avoid being eaten. \
      But <i>how does a school of fish find its way into the dark?</i> Each fish only has \
      a small, partial field of view and a little control over where the school is \
      going. (it is effectively leaderless).</p>
      <p><b>Hypothesis:</b> Scientists have proposed that fish schools might be found more \
      in the dark than the light if the behavioral rules controlling their movement \
      are consistently different in the light versus the dark.</p>
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
    info.className = 'ph3 pv1 ba mv3';
    info.style.cursor = 'pointer';
    info.style.display = 'inline-block';
    info.onclick = function() {
      modal.style.display = "block";
      overlay.style.display = "block";
    };
    document.getElementById('info-container').append(info);
}