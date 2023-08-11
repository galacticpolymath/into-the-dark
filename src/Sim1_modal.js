function createButton() {
  const info = document.createElement('div');
  info.textContent = 'Info';
  info.className = 'ph3 pv1 ba ma3';
  info.style.cursor = 'pointer';
  info.style.display = 'inline-block';
  info.onclick = function() {
    modal.style.display = "block";
    overlay.style.display = "block";
  };
  return info;
}

export default function setup_modal() {
    const sim = document.getElementById('sim')
    const newDiv = document.createElement("div")
    newDiv.id = 'modal';
    newDiv.className = "ba bw1";
    newDiv.style.display = "block";
    const modal = sim.appendChild(newDiv);
    const overlay = document.getElementById('overlay')
    overlay.style.display = "block";

    modal.innerHTML = 
    `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h1 style='color:rgb(38, 34, 144)'>Part 1: Intro</h1>
      <p>This is a simulation that models fish behavior. Each virtual fish is a point in a data grid. \
      It has an X and a Y coordinate, a speed, and a direction. Try changing the speed to see what happens.</p> 
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

  document.getElementById('button-container').append(createButton());
  document.getElementById('overhead-info').append(createButton());
}