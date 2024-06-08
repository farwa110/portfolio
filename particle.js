const numParticles = 80;
const particleSize = 0.5;
const particleColor = "#787878";
const animationDuration = [30, 90]; // Min and max animation duration in seconds

for (let i = 0; i < numParticles; i++) {
  let particle = document.createElement("div");
  particle.className = "particle";

  // Randomly set animation properties
  const duration = Math.random() * (animationDuration[1] - animationDuration[0]) + animationDuration[0];
  const delay = -Math.random() * 6;
  const translateX = Math.random() * 100;
  const translateY = Math.random() * 100;
  const translateZ = Math.random() * 100;

  particle.style.animation = `particle-animation-${i} ${duration}s infinite`;
  particle.style.animationDelay = `${delay}s`;
  particle.style.transform = `translate3d(${translateX}vw, ${translateY}vh, ${translateZ}px)`;
  particle.style.opacity = Math.random().toFixed(2);

  document.getElementById("particles").appendChild(particle);

  // Create dynamic keyframes for each particle
  const styleSheet = document.styleSheets[0];
  const keyframes = `@keyframes particle-animation-${i} {
    100% {
      transform: translate3d(${Math.random() * 100}vw, ${Math.random() * 100}vh, ${Math.random() * 100}px);
    }
  }`;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}
