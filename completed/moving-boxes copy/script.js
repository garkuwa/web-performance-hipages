const { containerWidth, registerNextClick } = setup();

const elements = Array.from(document.querySelectorAll(".element"));

registerNextClick(function (timestamp) {
  const nextPositions = elements.map((element) => {
    const top = element.offsetTop;

    return +(((Math.sin(top + timestamp / 1000) + 1) / 2) * containerWidth);
  });

  nextPositions.forEach((p, i) => {
    elements[i].style.transform = `translateX(${p}px)`;
  });
});

// requestAnimationFrame(() => {
//   element.style.transform = `translateX(${nextPosition}px)`;
// });

// nextPositions.forEach((p, i) => {
//   elements[i].style.transform = `translateX(${p}px)`;
// });

// element.style.transform = `translateX(${nextPosition}px)`;
