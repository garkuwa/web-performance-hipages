const { containerWidth, registerNextClick } = setup();

const elements = Array.from(document.querySelectorAll('.element'));

registerNextClick(function (timestamp) {
  elements.forEach((element) => {
    const top = element.offsetTop;
    const nextPosition = +(
      ((Math.sin(top + timestamp / 1000) + 1) / 2) *
      containerWidth
    );
    element.style.transform = `translateX(${nextPosition}px)`;
  });
});

// requestAnimationFrame(() => {
//   element.style.transform = `translateX(${nextPosition}px)`;
// });

// nextPositions.forEach((p, i) => {
//   elements[i].style.transform = `translateX(${p}px)`;
// });

// element.style.transform = `translateX(${nextPosition}px)`;
