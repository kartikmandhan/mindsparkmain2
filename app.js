const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
  console.log(e.scrollPos);
  f(e.scrollPos);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);

const theme = document.querySelector(".theme");
function f(pos) {
  if (pos < 2000) {
    if (!theme.classList.contains("hide")) theme.classList.add("hide");
  } else if (pos > 2000 && pos < 4000) {
    theme.classList.remove("hide");
  } else if (pos > 4000) {
    if (!theme.classList.contains("hide")) theme.classList.add("hide");
  }
}
// var link = document.querySelector(".downloadBrochure");
// link.href = "./MindSpark'20 Brochure.pdf";
// link.download = "Brochure";
// link.dispatchEvent(new MouseEvent("click"));
