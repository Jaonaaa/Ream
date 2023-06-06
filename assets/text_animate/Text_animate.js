export function slideUpText() {
  let text = document.querySelectorAll(".text-slide-down");
  let timer = 0;
  text.forEach((txt) => {
    setTimeout(() => {
      txt.style.transform = `translateY(0%)`;
      txt.style.opacity = 1;
    }, timer);
    timer += 300;
  });
}
