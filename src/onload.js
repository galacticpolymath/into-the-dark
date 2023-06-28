import logoPng from './gp_logo_gradient_transBG.png'

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
}

function loadModule(mode) {
    if (mode === 'title') {
        import('./title.js')
            .then((module) => {
                module.default();
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 'sim1') {
        import('./Sim1.js')
            .then((module) => {
                console.log(module.default());
                //console.log(module.load());
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 'sim2') {
        import('./Sim2.js')
            .then((module) => {
                console.log(module.default());
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 'sim3') {
        import('./Sim3.js')
            .then((module) => {
                console.log(module.default());
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 'sim4') {
        import('./Sim4.js')
            .then((module) => {
                console.log(module.default());
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }
    else if (mode === 'sim5') {
        import('./Sim5.js')
            .then((module) => {
                console.log(module.default());
            })
            .catch((error) => {
                console.error(`Error loading module ${mode}: ${error}`);
            });
    }

}