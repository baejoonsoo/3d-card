const frame = document.getElementById("frame");
const card = document.getElementById("card");
const light = document.getElementById("light");

const { x, y, width, height } = frame.getBoundingClientRect();

frame.addEventListener("mouseenter", () => {
  frame.addEventListener("mousemove", (e) => {
    const left = e.clientX - x;
    const top = e.clientY - y;

    const centerX = left - width / 2;
    const centerY = top - height / 2;

    const radius = Math.sqrt(centerX ** 2 + centerY ** 2);

    card.style.boxShadow = `
    ${-centerX / 10}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.3)
    `;

    card.style.transform = `
    rotate3d(
      ${-centerY / 100},${centerX / 100},0,${radius / 5}deg
    )`;

    light.style.backgroundImage = `
      radial-gradient(
        circle at ${left}px ${top}px , #00000010, #ffffff00, #ffffff70
      )
    `;
  });
});

frame.addEventListener("mouseleave", () => {
  frame.removeEventListener("mousemove", () => {});
});
