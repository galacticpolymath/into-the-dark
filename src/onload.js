import logoPng from './gp_logo_gradient_transBG.png'
import {each} from 'lodash-es'

function addBFListener (link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        loadModule(e.target.dataset.mode);
    });
}

window.onload = function() {
    var navLinks = document.getElementsByClassName("nav-link");

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function(e) {
            e.preventDefault();
            loadModule(e.target.dataset.mode);

            for (var j = 0; j < navLinks.length; j++) {
                navLinks[j].classList.remove('active-link');
            }
    
            // Add the active class to the clicked link
            this.classList.add('active-link');
        });
    }

    var bfLinks = document.getElementsByClassName("bf-link");

    for (var i = 0; i < bfLinks.length; i++) {
        addBFListener(bfLinks[i])
    }
}

function loadModule(mode) {
    if (mode === 'title') {
        const bflinks = document.getElementsByClassName("bf-link");
        bflinks[0].innerHTML = ``;
        bflinks[1].innerHTML = `<a href="#" data-mode="sim1">Next</a>`
        each(bflinks, addBFListener)

        import('./index.js')
            .then((module) => {
                module.default();
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 'sim1') {
        const bflinks = document.getElementsByClassName("bf-link");
        bflinks[0].innerHTML = `<a href="#" data-mode="title">Back</a>`;
        bflinks[1].innerHTML = `<a href="#" data-mode="sim2">Next</a>`
        each(bflinks, addBFListener)

        import('./Sim1.js')
            .then((module) => {
                console.log(module.default());
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 'sim2') {
        const bflinks = document.getElementsByClassName("bf-link");
        bflinks[0].innerHTML = `<a href="#" data-mode="sim1">Back</a>`;
        bflinks[1].innerHTML = `<a href="#" data-mode="sim3">Next</a>`
        each(bflinks, addBFListener)
        
        import('./Sim2.js')
            .then((module) => {
                console.log(module.default());
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 'sim3') {
        const bflinks = document.getElementsByClassName("bf-link");
        bflinks[0].innerHTML = `<a href="#" data-mode="sim2">Back</a>`;
        bflinks[1].innerHTML = `<a href="#" data-mode="sim4">Next</a>`
        each(bflinks, addBFListener)
        
        import('./Sim3.js')
            .then((module) => {
                console.log(module.default());
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 'sim4') {
        const bflinks = document.getElementsByClassName("bf-link");
        bflinks[0].innerHTML = `<a href="#" data-mode="sim3">Back</a>`;
        bflinks[1].innerHTML = `<a href="#" data-mode="sim5">Next</a>`
        each(bflinks, addBFListener)
        
        import('./Sim4.js')
            .then((module) => {
                console.log(module.default());
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 'sim5') {
        const bflinks = document.getElementsByClassName("bf-link");
        bflinks[0].innerHTML = `<a href="#" data-mode="sim4">Back</a>`;
        bflinks[1].innerHTML = ``
        each(bflinks, addBFListener)

        import('./Sim5.js')
            .then((module) => {
                console.log(module.default());
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }

}