const rect = document.querySelector("#center");
rect.addEventListener("mousemove", function(dets){
    // console.log(dets.clientX);
    gsap.to("#center",{
        left:dets.clientX + "px",
        ease:Power3,
    });
})