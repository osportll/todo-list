let sections;
let headerTitle;

export function initSiteLogic() {
  sections = document.querySelectorAll('.sections');
  headerTitle = document.querySelector('.header-title');
}

export function toggleSection() {
  sections.forEach((section) => {
    section.addEventListener('click', function () {
      sections.forEach((s) => s.classList.remove('layer-on')); 
      this.classList.add('layer-on');

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
