Accordion = () => {
  const accordion = document.querySelectorAll(".heading");

  accordion.forEach((item, key) => {
    if (key === 0) {
      item.classList.add("active");
      item.nextElementSibling.classList.add("panel-open");
    }

    item.addEventListener("click", () => {
      accordion.forEach(element => {
        if (element.classList.contains("active")) {
          element.classList.remove("active");
          element.nextElementSibling.classList.remove("panel-open");
        }
      });

      item.classList.add("active");
      item.nextElementSibling.classList.add("panel-open");
    });
  });
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    Accordion();
  },
  false
);
