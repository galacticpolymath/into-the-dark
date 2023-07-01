import logoPng from './gp_logo_gradient_transBG.png'

function addBFListener (link, navLinks) {
    link.addEventListener('click', function(e) {
        const mode = +e.target.dataset.mode;
        e.preventDefault();

        if (!navLinks) {
            console.log('navLinks', navLinks)
            throw new Error('navLinks undefined');
        }

        for (var j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove('active-link');
        }

        // Add the active class to the clicked link
        document.getElementById('nav').children[mode + 1].classList.add('active-link');

        loadModule(mode);
    });
}

window.onload = function() {
    const navLinks = document.getElementsByClassName("nav-link");

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function(e) {
            e.preventDefault();
            loadModule(+e.target.dataset.mode);

            for (var j = 0; j < navLinks.length; j++) {
                navLinks[j].classList.remove('active-link');
            }
    
            // Add the active class to the clicked link
            this.classList.add('active-link');
        });
    }

    const bfLinks = document.getElementById('backnext').children;

    for (var i = 0; i < bfLinks.length; i++) {
        addBFListener(bfLinks[i], navLinks)
    }
}

function backNextLinks(mode, navLinks) {
    const back = document.getElementById('back');
    const next = document.getElementById('next');

    if (back) {back.remove()}
    if (next) {next.remove()}

    const backnext = document.getElementById('backnext')

    if (!navLinks) {
        console.log('navLinks', navLinks)
        throw new Error('navLinks undefined');
    }

    // Add next link first (because of float right)
    if (mode < 5) {
        let newDiv = document.createElement("div");
        let newLink = document.createElement("a");

        // Set their properties
        newDiv.className = "fr ph3 pv1 ba mr5";
        newDiv.id = 'next';
        newLink.href = "#";
        newLink.dataset.mode = `${mode+1}`; // This sets a data attribute
        newLink.textContent = "Next";

        // Append the link to the div
        newDiv.appendChild(newLink);

        // Now you can append the new div to a parent node. For example, to append to the body:
        backnext.appendChild(newDiv);
        addBFListener(document.getElementById('next'), navLinks);   
    }

    // Add back link
    if (mode > 0) {
        let newDiv = document.createElement("div");
        let newLink = document.createElement("a");

        // Set their properties
        newDiv.className = "fr ph3 pv1 ba mr4 bg-dark-gray";
        newDiv.id = 'back';
        newLink.href = "#";
        newLink.className = 'white';
        newLink.dataset.mode = `${mode-1}`; // This sets a data attribute
        newLink.textContent = "Back";

        // Append the link to the div
        newDiv.appendChild(newLink);

        // Now you can append the new div to a parent node. For example, to append to the body:
        backnext.appendChild(newDiv);
        addBFListener(document.getElementById('back'), navLinks);
    }
}

function loadModule(mode) {
    if (typeof mode !== 'number' || mode < 0 || mode > 5) {
        throw new Error('Invalid value for mode');
    }

    const navLinks = document.getElementsByClassName("nav-link");

    backNextLinks(mode, navLinks);
    if (mode === 0) {
        import('./index.js')
            .then((module) => {
                module.default();
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 1) {
        import('./Sim1.js')
            .then((module) => {
                module.default();
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 2) {
        import('./Sim2.js')
            .then((module) => {
                module.default();
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 3) {
        import('./Sim3.js')
            .then((module) => {
                module.default();
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 4) {
        import('./Sim4.js')
            .then((module) => {
                module.default();
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 5) {
        import('./Sim5.js')
            .then((module) => {
                module.default();
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
}