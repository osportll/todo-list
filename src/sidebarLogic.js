export const sections = document.querySelectorAll('.sections');
console.log(sections);

export function toggleSection() {
  sections.forEach((e) => {
    e.addEventListener('click', () => {
      sections.forEach((section) => {
        section.classList.remove('layer-on');
      });

      e.classList.add('layer-on');
    });
  });
}
