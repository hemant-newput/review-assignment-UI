var box2 = document.querySelector('.container');
var box = document.querySelector('.parent');
var boxRect = box.getBoundingClientRect();

box.addEventListener('mousemove', e => {
  var xPosition = (e.clientX - boxRect.left) / boxRect.width;
  var yPosition = (e.clientY - boxRect.top) / boxRect.height - 0.8;
  var xOffset = -(xPosition - 0.8);
  var dxNorm = Math.min(Math.max(xOffset, -0.8), 0.8)
  box2.style.transform = `perspective(1000px)
                        rotateY(${dxNorm*10}deg)
                        rotateX(${yPosition*10}deg) `
  box.addEventListener('mouseleave', () => {
    box2.style.transform = 'skew'
  })
})
