window.addEventListener("mousemove", function(dets){
    var rect = document.querySelector("#center");
    // console.log(dets.clientX);
    var rectVal = gsap.utils.mapRange(0, window.innerWidth, 200+rect.getBoundingClientRect().width/2, window.innerWidth-(200+rect.getBoundingClientRect().width/2),dets.clientX);
    gsap.to("#center",{
        // left:dets.clientX + "px",
        left:rectVal,
        ease:Power3,
    });
});