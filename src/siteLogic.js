export const sections = document.querySelectorAll('.sections');
export const headerTitle = document.querySelector('.header-title');

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

export function toggleHeaderTitle() {
  sections.forEach((e) => {
    e.addEventListener('click', () => {
      headerTitle.textContent = e.textContent;
    });
  });
}
