(function () {
  function init() {
    const filter = document.querySelector('.subject-filter');
    if (!filter) return;
    const cards = document.querySelectorAll('.subject-card');
    const buttons = filter.querySelectorAll('button[data-course]');

    function apply(course) {
      cards.forEach(card => {
        const courses = (card.dataset.courses || '').split(/\s+/).filter(Boolean);
        const match = course === 'all' || courses.includes(course);
        card.classList.toggle('is-hidden', !match);
      });
      buttons.forEach(b => b.classList.toggle('is-active', b.dataset.course === course));

      document.querySelectorAll('.landing-section').forEach(section => {
        const visible = section.querySelectorAll('.subject-card:not(.is-hidden)').length;
        section.classList.toggle('is-hidden', visible === 0);
      });
    }

    buttons.forEach(b => b.addEventListener('click', () => apply(b.dataset.course)));
    apply('all');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
