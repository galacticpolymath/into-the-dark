// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
    basic: {
        N: 3,
        colors: ["rgb(38, 34, 144)"],
        L:128,
        agentsize: 15.0,
        dt:1,
        speed_variation: 0.5,
        angular_increment:0.2,
        collision_radius:1.0,
		number_hideouts:0,
		speed_hideouts:0.075,
		size_hideouts:30,
        speed_in_the_light: 0.5, 
        speed_in_the_dark: 0.1,
        alignment_radius: 0,
        attraction_radius: 0,
        wiggle: 0,
        collective_behavior: false,
        dark_zones: false, 
        widgets:{
            toggle_anchor: {x:7, y:1.5},
            toggle_label_pos:"right",
            toggle_gap:1.5,
            playbutton_size: 60,
            playbutton_anchor:{x:5.5, y:5.5},
            backbutton_anchor:{x:4,y:4.5},
            resetbutton_anchor:{x:2,y:4.5}
        },
        simulation: {
            delay: 0,
            hideout_color: "rgb(80,80,80)"
        },
        controls_border:false,
        display_border:true,
        controls_grid:{nx:12,ny:12},
        display_size: {width:500,height:500},
        controls_size: {width:480,height:480},
        display_class:"fl w-100 w-50-ns ph3-ns",
        controls_class:"fl w-100 w-50-ns ph3-ns",
        container_class:"mw8 center cf"
    }, 
    mode1: {
        N: 3,
        colors: ["rgb(190, 39, 113)", "rgb(97, 171, 241)", "rgb(38, 34, 144)"],
        L:128,
        agentsize: 30.0,
        dt:1,
        speed_variation: 0.5,
        angular_increment:0.2,
        collision_radius:1.0,
		number_hideouts:0,
		speed_hideouts:0.075,
		size_hideouts:30,
        speed_in_the_light: 0.5, 
        speed_in_the_dark: 0.1,
        alignment_radius: 0,
        attraction_radius: 0,
        wiggle: 0,
        collective_behavior: false,
        dark_zones: false, 
        widgets:{
            toggle_anchor: {x:7, y:1.5},
            toggle_label_pos:"right",
            toggle_gap:1.5,
            playbutton_size: 60,
            playbutton_anchor:{x:5.5, y:5.5},
            backbutton_anchor:{x:4,y:4.5},
            resetbutton_anchor:{x:2,y:4.5}
        },
        simulation: {
            delay: 0,
            hideout_color: "rgb(80,80,80)"
        },
        controls_border:false,
        display_border:true,
        controls_grid:{nx:12,ny:12},
        display_size: {width:500,height:500},
        controls_size: {width:600,height:480},
        display_class:"fl w-100 w-50-ns ph3-ns",
        controls_class:"fl w-100 w-50-ns ph3-ns",
        container_class:"mw8 center cf"
    }, 
    mode2: {
        N: 1,
        N_def: 1,
        colors: ["rgb(38, 34, 144)"],
        L:128,
        agentsize: 15.0,
        dt:1,
        speed_variation: 0.5,
        angular_increment:0.2,
        number_hideouts:0,
		speed_hideouts:0.075,
		size_hideouts:30,
        speed_in_the_light: 1.0,
        speed_in_the_dark: 0.1,
        alignment_radius: 0,
        ar_def: 0,
        attraction_radius: 10,
        wiggle: 0,
        collective_behavior: true,
        dark_zones: false, 
        text_pos: {x: 0, y: 40},
        widgets:{
            toggle_anchor: {x:7, y:1.5},
            toggle_label_pos:"right",
            toggle_gap:1.5,
            playbutton_size: 60,
            playbutton_anchor:{x: 0, y: 0},
            backbutton_anchor:{x:4,y:4.5},
            resetbutton_anchor:{x:2,y:4.5}
        },
        simulation: {
            delay:0,
            hideout_color:"rgb(80,80,80)"
        },
        display_type:"svg", // either svg or canvas depending on explorable
        debug:false,  // if set to true, draws dots on the control panel to help widget placement
        controls_border:false,
        display_border:true,
        debug_lattice:"debug-grid-16",
        controls_grid:{nx:12,ny:12},
        display_size: {width:500,height:500},
        controls_size: {width:600,height:650},
        display_class:"fl w-100 w-50-ns ph3-ns",
        controls_class:"fl w-100 w-50-ns ph3-ns",
        container_class:"mw8 center cf",
        reset_enabled: true
    },
    mode3: {
        N: 30,
        colors: ["rgb(38, 34, 144)"],
        L:128,
        agentsize: 15.0,
        dt:1,
        speed_variation: 0.5,
        angular_increment:0.2,
        collission_radius:1.0,
        speed_in_the_light: 1.0,
        speed_in_the_dark: 0.1,
        alignment_radius: 0,
        al_def: 0,
        attraction_radius: 0,
        ar_def: 0,
        wiggle: 0,
        collective_behavior: true,
        dark_zones: false, 
        text_pos: {x: 0, y: 40},
        widgets:{
            toggle_anchor: {x:7, y:1.5},
            toggle_label_pos:"right",
            toggle_gap:1.5,
            playbutton_size: 60,
            playbutton_anchor:{x: 0, y: 0},
            backbutton_anchor:{x:4,y:4.5},
            resetbutton_anchor:{x:2,y:4.5}
        },
        simulation: {
            delay:0,
            hideout_color:"rgb(80,80,80)"
        },
        display_type:"svg", // either svg or canvas depending on explorable
        debug:false,  // if set to true, draws dots on the control panel to help widget placement
        controls_border:false,
        display_border:true,
        debug_lattice:"debug-grid-16",
        controls_grid:{nx:12,ny:12},
        display_size: {width:500,height:500},
        controls_size: {width:600,height:600},
        display_class:"fl w-100 w-50-ns ph3-ns",
        controls_class:"fl w-100 w-50-ns ph3-ns",
        container_class:"mw8 center cf",
        reset_enabled: true
    },
    mode4: {
        N: 30,
        colors: ["rgb(38, 34, 144)"],
        L:128,
        agentsize: 15.0,
        dt:1,
        speed_variation: 0.5,
        angular_increment:0.2,
        collission_radius:1.0,
        number_hideouts:3,
		speed_hideouts: 0.04,
		size_hideouts: 30,
        speed_in_the_light: 1,
        speed_in_the_dark: 1,
        speed_def: 1,
        alignment_radius: 2, // 0-5ish
        al_def: 2,
        dark_al: 2,
        attraction_radius: 40, // 0-80ish
        ar_def: 40,
        dark_ar: 40,
        wiggle:	20,
        collective_behavior: true,
        dark_zones: true, 
        widgets:{
            toggle_anchor: {x:7, y:1.5},
            toggle_label_pos:"right",
            toggle_gap:1.5,
            playbutton_size: 60,
            playbutton_anchor:{x: 0, y: 0},
            backbutton_anchor:{x:4,y:4.5},
            resetbutton_anchor:{x:2,y:4.5}
        },
        simulation: {
            delay:0,
            hideout_color:"rgb(80,80,80)"
        },
        controls_border:false,
        display_border:true,
        controls_grid:{nx:12,ny:12},
        display_size: {width:500,height:500},
        controls_size: {width:600,height:600},
        display_class:"fl w-100 w-50-ns ph3-ns",
        controls_class:"fl w-100 w-50-ns ph3-ns",
        container_class:"mw8 center cf",
        reset_enabled: true
    },
    mode5: {
        N: 30,
        colors: ["rgb(38, 34, 144)"],
        L:128,
        agentsize: 15.0,
        dt:1,
        speed_variation: 0.5,
        angular_increment: 0.2,
        collission_radius: 1.0,
        number_hideouts: 3,
		speed_hideouts: 0.04,
		size_hideouts: 30,
        speed_in_the_light: 1,
        speed_in_the_dark: 1,
        speed_def: 1,
        alignment_radius: 2,
        al_def: 2,
        dark_al: 2,
        attraction_radius: 40,
        ar_def: 40,
        dark_ar: 40,
        wiggle: 20,
        collective_behavior: true,
        dark_zones: true, 
        text_pos: {x: 0, y: 40},
        widgets:{
            toggle_anchor: {x:7, y:1.5},
            toggle_label_pos:"right",
            toggle_gap:1.5,
            playbutton_size: 60,
            playbutton_anchor:{x: 0, y: 0},
            backbutton_anchor:{x:4,y:4.5},
            resetbutton_anchor:{x:2,y:4.5}
        },
        simulation: {
            delay: 0,
            hideout_color:"rgb(80,80,80)"
        },
        controls_border:false,
        display_border:true,
        controls_grid:{nx:12,ny:12},
        display_size: {width:500,height:500},
        controls_size: {width:600,height:600},
        display_class:"fl w-100 w-50-ns ph3-ns",
        controls_class:"fl w-100 w-50-ns ph3-ns",
        container_class:"mw8 center cf", 
        reset_enabled: true
    }
 
}
