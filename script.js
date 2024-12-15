
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
  function showForm() {
    const form = document.getElementById('admission-form');
    form.classList.toggle('hidden');
}