// DARK MODE TOGGLE
const toggleBtn = document.querySelector(".toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// AUTO DARK MODE SYSTEM
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  document.body.classList.add("dark");
}

// 3D HOVER TILT
document.querySelectorAll(".job-card, .recent-card").forEach(card=>{
  card.addEventListener("mousemove", (e)=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width/2;
    const centerY = rect.height/2;
    const rotateX = -(y - centerY)/12;
    const rotateY = (x - centerX)/12;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("mouseleave", ()=>{
    card.style.transform="rotateX(0) rotateY(0)";
  });
});

// SALARY ANIMATION
document.querySelectorAll(".salary").forEach(counter=>{
  let target = +counter.getAttribute("data-target");
  let count = 0;
  let update = () => {
    let inc = target/50;
    if(count < target){
      count+=inc;
      counter.innerText="$"+Math.floor(count)+"/Mo";
      requestAnimationFrame(update);
    }else{
      counter.innerText="$"+target+"/Mo";
    }
  };
  update();
});

// RIPPLE EFFECT CINEMATIC
document.querySelectorAll(".job-card, .recent-card, button:not(.toggle-dark)").forEach(el=>{
  el.addEventListener("click", function(e){
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    ripple.style.left = e.clientX - rect.left + "px";
    ripple.style.top = e.clientY - rect.top + "px";

    setTimeout(()=>ripple.remove(), 600);
  });
});
const chatCard = document.querySelector(".job-card.full");
chatCard.addEventListener("click", () => {
  window.location.href = "history.html";
});
window.open("history.html", "_blank");
document.querySelector(".contact-us").addEventListener("click", () => {
  window.location.href = "https://www.livechat.com/chat-with/19516665/";
});
const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".job-card, .recent-card");

searchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();d

    if (text.includes(value)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
const music = document.getElementById("bgMusic");

function toggleMusic() {
  if (music.paused) {
    music.play();
    localStorage.setItem("musicPlaying", "true");
  } else {
    music.pause();
    localStorage.setItem("musicPlaying", "false");
  }
}

// Saat halaman dibuka
window.addEventListener("DOMContentLoaded", () => {
  const isPlaying = localStorage.getItem("musicPlaying");

  if (isPlaying === "true") {
    music.play();
  }
});