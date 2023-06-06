import { setUpHeader } from "./header/header.js";
import { removeLoader } from "./loader_screen/loader.js";
import { slideUpText } from "./text_animate/Text_animate.js";
import { showHeader, hideHeader } from "./header/header.js";
setUpHeader();

setTimeout(() => {
  removeLoader();
  slideUpText();
  showHeader();
}, 4900);
setTimeout(() => {
  window.scrollTo(0, 0);
}, 50);

let header = document.getElementById("header");
let percent = document.getElementById("percent");
let scrollAmout = 1;

window.addEventListener(
  "wheel",
  (e) => {
    console.log(e.deltaY, " => ", scrolling(e));
  },
  { passive: false }
);

window.addEventListener(
  "scroll",
  (e) => {
    console.log(window.scrollY);
    //  console.log(e.deltaY, " => ", scrolling(e));
  },
  { passive: false }
);

/**
 * @param {Event} event
 */
function scrolling(event) {
  let availableScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  //event.preventDefault();
  scrollAmout += event.deltaY;
  // Restrict scrollAmout
  scrollAmout = Math.min(Math.max(0, scrollAmout), availableScroll);
  //console.log(scrollAmout);

  console.log(
    "TotalAvailable = ",
    availableScroll,
    " scrolled = ",
    scrollAmout,
    " Percent = ",
    ((100 * scrollAmout) / availableScroll).toFixed(2),
    "%"
  );
  percent.innerHTML = `${((100 * scrollAmout) / availableScroll).toFixed(0)}%`;
  return scrollAmout;
}
