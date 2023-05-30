"use strict";
const container = document.querySelector(".container");
const kits = ["crash", "kick", "snare", "tom"];

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.textContent = kit;
  btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
  container.appendChild(btnEl);
  //
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + kit + ".mp3";
  container.appendChild(audioEl);
  //
  btnEl.addEventListener("click", () => {
    audioEl.play();
  });
  // window.addEventListener("keydown", (event) => {});
});
