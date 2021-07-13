'use strict';
let message_flag = 0; // controls the changing of the message
const messages = [" Click on the flask containing AgNO3 (10^-3M, 100ml) soln to place it on magnetic stirrer & heater. ",
    " Click on the Magnetic bead to drop it into the Flask. ",
    " Click on the Heater knob to switch on the Heater. ",
    " Click on the Stirrer knob to switch on the Magnetic Stirrer.  ",
    " Wait till AgNO3 soln starts boiling... ",
    " Click on the Pipette to move it to beaker containing trisodium citrate 1% soln. ",
    " Click on the Pipette to draw 10ml of trisodium citrate solution. ",
    " Click on the pipette to move it over to the flask. ",
    " Click on the Pipette to add trisodium citrate solution drop-by-drop to boiling AgNO3 soln. ",
    " Golden coloured Silver colloid is formed... "
];

let message = messages[0];
document.getElementById("message").innerHTML = message;
let pipette_flag = 0; // handles the movement of pipette
// pipette_flag guide:
// 0 - no animation of pipette
// 1 - filling of pipette with solution
// 2 - motion of pipette to flask
// 3 - dropping solution from pipette into flask
// 4 - signifies end state

function dropflask() {
    const animation_1 = anime.timeline({
        targets: '#conicalflask',
        duration: 1000,
        easing: 'linear',
    }).add({
        translateY: '3.6vw',
    });

    const animation_2 = anime.timeline({
        targets: '#water-flask',
        duration: 800,
        easing: 'linear',
    }).add({
        translateY: '3.6vw',
    });

    const animation_3 = anime.timeline({
        targets: '#bead',
        duration: 1000,
        easing: 'linear',
    }).add({
        delay: '1000',
        opacity: '1'
    }).add({
        update: function() {
            message = messages[1];
            document.getElementById("message").innerHTML = message;
        }
    });
}

function dropbead() {
    const animation_1 = anime.timeline({
        targets: '#bead',
        duration: 1200,
        easing: 'linear',
    }).add({
        translateY: '7.6vw',
    }).add({
        update: function() {
            message = messages[2];
            document.getElementById("message").innerHTML = message;
        }
    });
}

function stir_bead() {
    const animation_1 = anime.timeline({
        targets: "#bead",
        duration: 1000,
        easing: 'linear',
        loop: true,
        direction: 'alternate',
    }).add({
        width: '0.4vw',
        rotateY: '10',
        translateX: '0.4vw'
    });

    const animation_2 = anime.timeline({
        targets: "",
        duration: 2500,
        easing: 'linear',
    }).add({
        delay: '2000',
        update: function() {
            message = messages[4];
            document.getElementById("message").innerHTML = message;
        }
    })

    const animation_3 = anime.timeline({
        targets: "#pipette",
        duration: 1500,
        easing: 'linear',
    }).add({
        delay: '3000',
        opacity: '0.9',
    }).add({
        update: function() {
            message = messages[5];
            document.getElementById("message").innerHTML = message;
        }
    });

    const animation_4 = anime.timeline({
        targets: "#flask",
        duration: 1500,
        easing: 'linear',
    }).add({
        delay: '3000',
        opacity: '0.5',
    });

    const animation_5 = anime.timeline({
        targets: "#water-main-beaker",
        duration: 1500,
        easing: 'linear',
    }).add({
        delay: '3000',
        opacity: '0.5',
    });
}


function heating() {
    const animation_1 = anime.timeline({
        targets: "",
        duration: 2500,
        easing: 'linear',
    }).add({
        update: function() {
            message = messages[3];
            document.getElementById("message").innerHTML = message;
        }
    });
}

function drop_pipette_to_beaker() {
    if (pipette_flag === 0) {
        const animation_1 = anime.timeline({
            targets: "#pipette",
            duration: 1000,
            easing: 'linear',
        }).add({
            translateY: '6vw',
            translateX: '-14vw',
        }).add({
            update: function() {
                message = messages[6];
                document.getElementById("message").innerHTML = message;
            }
        });
        pipette_flag = 1;
    }
}

function pipette_fill() {
    if (pipette_flag === 1) {
        const animation_1 = anime.timeline({
            targets: "#water-main-beaker",
            duration: 2000,
            easing: 'easeInOutQuad',
        }).add({
            delay: '1000',
            opacity: '0',
        }).add({
            update: function() {
                message = messages[7];
                document.getElementById("message").innerHTML = message;
            }
        });
        pipette_flag = 2;
    }
}

function pipette_move_to_flask() {
    if (pipette_flag === 2) {
        const animation_1 = anime.timeline({
            targets: "#pipette",
            duration: 1000,
            easing: 'linear',
        }).add({
            height: '8vw',
            translateX: '17.7vw',
            translateY: '-4vw',
        }).add({
            update: function() {
                message = messages[8];
                document.getElementById("message").innerHTML = message;
            }
        });

        const animation_2 = anime.timeline({
            targets: "#final-drop",
            duration: 200,
            easing: 'linear',
        }).add({
            delay: '1000',
            opacity: '1',
        });
        pipette_flag = 3;
    }
}

function make_solution() {
    if (pipette_flag === 3) {
        const animation_1 = anime.timeline({
            targets: "#final-drop",
            duration: 800,
            easing: 'linear',
            loop: '4'
        }).add({
            translateY: '6vw',
            opacity: '0'
        });

        const animation_2 = anime.timeline({
            targets: "#water-flask-final",
            duration: 2000,
            easing: 'linear',
        }).add({
            delay: '1000',
            opacity: '0.9',
        }).add({
            update: function() {
                message = messages[9];
                document.getElementById("message").innerHTML = message;
            }
        });
        pipette_flag = 4;
    }
}
