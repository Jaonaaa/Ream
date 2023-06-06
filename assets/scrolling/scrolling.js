var ratio = 0.15;
var optionsObserver = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

export function handleIntersection(entries, observer) {
  entries.forEach((element) => {
    if (element.intersectionRatio >= ratio) {
      element.target.classList.add("reveal-on");
    } else {
      element.target.classList.remove("reveal-on");
    }
  });
}
export function goObserveSection() {
  var observer = new IntersectionObserver(handleIntersection, optionsObserver);
  let bigElement = document.querySelectorAll(".bigSection");
  bigElement.forEach((element) => {
    observer.observe(element);
  });
}
goObserveSection();
