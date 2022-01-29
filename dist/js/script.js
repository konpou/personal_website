// Year footer
const yearNow = document.querySelector(".year");

const now = new Date();
yearNow.textContent = now.getFullYear();

// Reveal projects on scroll
const allProjects = document.querySelectorAll(".project");
const projectReveal = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden--project");
  observer.unobserve(entry.target);
};
const projectObserver = new IntersectionObserver(projectReveal, {
  root: null,
  threshold: 0.15,
});

allProjects.forEach(function (section) {
  projectObserver.observe(section);
  section.classList.add("hidden--project");
});
// Implement reveal on scroll for form (left-right)
// Implement lazy load images
