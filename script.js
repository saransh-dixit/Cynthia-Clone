document.addEventListener("DOMContentLoaded", function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    function firstPageAni() {
        gsap.from("#nav", {
            y: -10,
            opacity: 0,
            duration: 2,
            ease: "expo.inOut"
        });

        gsap.to(".boundingelem", {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "expo.inOut",
            stagger: 0.2
        });
    }

    firstPageAni();

    function circleMouseFollower() {
        window.addEventListener("mousemove", function(dets) {
            const miniCircle = document.querySelector("#miniCircle");
            miniCircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        });
    }

    function handleMouseEnter(event) {
        const img = event.currentTarget.querySelector("img");
        img.style.display = "block";
    }

    function handleMouseMove(event) {
        const elem = event.currentTarget;
        const img = elem.querySelector("img");
        const diff = event.clientY - elem.getBoundingClientRect().top;
        
        const diffRot = event.clientX - (elem.rotate || 0);
        elem.rotate = event.clientX;

        gsap.to(img, {
            opacity: 1,
            ease: Power1.easeOut,
            top: diff,
            left: event.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffRot * 0.5)
        });
    }

    function handleMouseLeave(event) {
        const img = event.currentTarget.querySelector("img");
        img.style.display = "none";
    }

    document.querySelectorAll(".elem").forEach(function(elem) {
        elem.addEventListener("mouseenter", handleMouseEnter);
        elem.addEventListener("mousemove", handleMouseMove);
        elem.addEventListener("mouseleave", handleMouseLeave);
    });

    circleMouseFollower();
});
