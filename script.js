gsap.registerPlugin(ScrollTrigger);

// ---------------- Banner timeline ----------------
let bannerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner",
    start: "top top",    
    end: "bottom top",   
    scrub: true,         
    pin: true            
  }
});

// Animate banner background and text together
bannerTl.to(".banner", { "--after-bg": "#000000", backgroundColor: "#000000", ease: "none" }, 0)
        .to(".banner h1", { color: "#ffffff", ease: "none" }, 0);

// ---------------- Make section timeline ----------------
let makeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".make",
    start: "top 80%",  
    toggleActions: "play none none none", 
  }
});

// Animate list items with overshoot
makeTl.to(".make li", {
  x: 0,
  opacity: 1,
  duration: 0.4,
  ease: "back.out(1.7)",  // overshoot effect
  stagger: 0.2
});

gsap.to(".banner-cover", {
  y: () => document.querySelector(".banner").offsetHeight * 0.5, // scroll distance
  ease: "none",
  scrollTrigger: {
    trigger: ".banner",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: false // element moves along with scroll
  }
});

const bannerCover = document.querySelector(".banner-cover");
const numDots = 1000; // number of dots

for (let i = 0; i < numDots; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  // random position in %
  const top = Math.random() * 100;
  const left = Math.random() * 100;

  // optional random size for variation
  const size = Math.random() * 3 + 2; // 2px to 5px
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;

  dot.style.top = `${top}%`;
  dot.style.left = `${left}%`;

  bannerCover.appendChild(dot);
}

gsap.to(".banner-cover .dot", {
  y: () => Math.random() * 20 - 10, // subtle float effect
  x: () => Math.random() * 20 - 10,
  duration: 3,
  repeat: -1,
  yoyo: true,
  stagger: 0.05,
  ease: "sine.inOut"
});

const track = document.querySelector(".about-track");

gsap.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".about",
    start: "top top",
    end: () => "+=" + track.scrollWidth,
    scrub: 0.8,
    ease: "power1.out",
    pin: true,
    anticipatePin: 1
  }
});