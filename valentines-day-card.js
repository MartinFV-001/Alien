$('.js-open-envelope').on('click', function (event) {
  event.preventDefault();
  var $self = $(this);
  $self.find('.envelope').removeClass('tossing').addClass('open'); // Eliminar "tossing"
  $self.find('.heart use').attr("xlink:href", "#icon-heart-broken");
  $self.find('.envelope__card').addClass('open');
});



// Partículas en el fondo
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
  return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 2,
      speedY: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
  };
}

for (let i = 0; i < 50; i++) {
  particles.push(createParticle());
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let particle of particles) {
      ctx.fillStyle = `rgba(255, 0, 100, ${particle.opacity})`;
      ctx.font = `${particle.size}px Arial`;
      ctx.fillText("💌", particle.x, particle.y);
      particle.y -= particle.speedY;

      if (particle.y < -10) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
      }
  }
  
  requestAnimationFrame(drawParticles);
}

drawParticles();
