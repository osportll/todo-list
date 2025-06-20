import { DOM } from "./domRefs.js";

export function toggleSection() {
  DOM.sections.forEach((section) => {
    section.addEventListener("click", function () {
      sections.forEach((s) => s.classList.remove("layer-on"));
      this.classList.add("layer-on");
    });
  });
}

export function toggleHeaderTitle() {
  DOM.sections.forEach((e) => {
    e.addEventListener("click", () => {
      DOM.headerTitle.textContent = e.textContent;
    });
  });
}
