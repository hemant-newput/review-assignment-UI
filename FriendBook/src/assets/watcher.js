var container = document.querySelector("html");
container.addEventListener("mousemove", e => {
  var eyes = document.querySelectorAll(".eye");
  [].forEach.call(eyes, function (eye) {
    let mouseX = eye.getBoundingClientRect().right;
    if (eye.classList.contains("eye-left")) {
      mouseX = eye.getBoundingClientRect().left;
    }
    let mouseY = eye.getBoundingClientRect().top;
    var radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    var rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
    eye.style.transform = `rotate(${rotationDegrees}deg)`;
  });
});
