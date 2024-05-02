const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


gsap.from(".nlink",{
    stragger:.2,
    y:10,
    duration:1,
    ease: Power2,
    opacity:0,
})

Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    
  });


  gsap.from(".anim2",{
    y:50,
    opacity:0,
    stragger:.3,
    ease:expo,
    duration:1


  })

  Shery.imageEffect("#imgntext img", {
    style: 3, //Select Style
    debug: true, // Debug Panel
    config: {
      /* Config made from debug panel */
    },
   
  });