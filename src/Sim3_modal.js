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
      <h1 style='color:rgb(38, 34, 144)'>Part 3: Light</h1>
      <p>Imagine these fish are swimming in open water on a sunny day. \
      Any single fish could become easy prey for a larger predator.</p> \
      <p>Swimming in a larger group can make it more difficult for predators \
      to lock onto a single target. But schooling is not just about following, \
      but how well you align with other fish in your group.</p> \
      <p>Explore how Alignment affects schooling behavior. <i>It may take a few \
      seconds for group behavior to coalesce!</i></p>
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