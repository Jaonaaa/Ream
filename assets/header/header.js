export function setUpHeader() {
  let container = document.querySelector(".links-params");
  let sliderLink = document.querySelector(".slider-link");
  let blocks = document.querySelectorAll(".block-link");
  blocks.forEach((block) => {
    block.addEventListener("click", () => {
      selectBlockLink(block, container, sliderLink);
    });
  });
  selectBlockLink(blocks[0], container, sliderLink);
}

export function showHeader() {
  let header = document.getElementById("header");
  header.style.opacity = 1;
  header.style.transform = `translateY(0)`;
}
export function hideHeader() {
  let header = document.getElementById("header");
  header.style.opacity = 0;
  header.style.transform = `translateY(-100%)`;
}

export function selectBlockLink(block, container, sliderLink) {
  let leftDistanceContainer = container.getBoundingClientRect().left;
  let leftDistanceBlock = block.getBoundingClientRect().left;
  let leftDistance = leftDistanceBlock - leftDistanceContainer;
  sliderLink.style.left = leftDistance + "px";
  sliderLink.style.width = block.getBoundingClientRect().width + "px";
}
