window.addEventListener("scroll", function(){
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})


$(document).ready(function(){
  $(window).scroll(function(){
    //    // sticky navbar on scroll script
      //  if(this.scrollY < 20){
        //    $('.navbar').addClass("sticky");
       // }else{
        //    $('.navbar').removeClass("sticky");
        //}
        
       // // scroll-up button show/hide script
        if(this.scrollY > 200){
        $('.scroll-up-btn').addClass("show");
       }else{
        $('.scroll-up-btn').removeClass("show");
       }
    });
    // slide-up script
   $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
       $('html').css("scrollBehavior", "auto");
    });
   $('.navbar .menu li a').click(function(){
      //  // applying again smooth scroll on menu items click
     $('html').css("scrollBehavior", "smooth");
   });
    });



particlesJS("particles-js-one", {
    "particles": {
        "number": {
            "value": 350,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#36454f",
        },
        "shape": {
            "type": ["circle"],
            "stroke": {
                "width": 0,
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 80,
            "color": "#36454f",
            "opacity": 0.8,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.3,
            "direction": "",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 50,
                "size": 5,
                "duration": 1,
                "opacity": 7,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
particlesJS("particles-js-two", {
    "particles": {
        "number": {
            "value": 350,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#f4f4f4"
        },
        "shape": {
            "type": ["circle"],
            "stroke": {
                "width": 0,
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 80,
            "color": "#f4f4f4",
            "opacity": 0.8,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.3,
            "direction": "",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 50,
                "size": 5,
                "duration": 1,
                "opacity": 7,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});



const toggleSwitch = document.querySelector('.toggleSwitch');
toggleSwitch.addEventListener('click', function(){
    document.body.classList.toggle("switch");
});




const textArray = [
    " Front End Developer",
    " Freelancer",
    " Designer"
]
const typingIndex = (index) => (
    {
        duration: 1.5,
        repeat: 1,
        repeatDelay: 2,
        yoyo: true,
        text: {
        value: textArray[index],
        delimiter: ""
        },
        ease: "ease.in",
    })
    
    const typing = () => {
        const keyframes = []
        for (let i = 0; i < textArray.length; i++) {
        keyframes.push(typingIndex(i))
        }
        return keyframes
    }
    const tl1 = gsap.timeline()

tl1.to(".span", {
    keyframes: typing(),
    repeat: -1,
})

$(".social-media-box").tilt({
	glare: true,
	maxGlare: 1,
	reset: true,
	scale: 1.05,
	easing: "cubic-bezier(.03,.98,.52,.99)",
	perspective: 1000,
	maxTilt: 50
});

AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 0,
    delay: 0.3,
    duration: 800,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
});
