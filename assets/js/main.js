const now = new Date();
const yearEl = document.getElementById("year");
const updatedEl = document.getElementById("updated");

if (yearEl) {
  yearEl.textContent = String(now.getFullYear());
}

if (updatedEl) {
  updatedEl.textContent = now.toLocaleString("en-US", { hour12: false });
}

const navLinks = Array.from(document.querySelectorAll('.top-nav-links a[href^="#"]'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveNav = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if (navLinks.length > 0) {
  setActiveNav("about");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href").replace("#", "");
      setActiveNav(targetId);
    });
  });
}

if (sections.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length > 0) {
        setActiveNav(visibleEntries[0].target.id);
      }
    },
    {
      root: null,
      rootMargin: "-34% 0px -56% 0px",
      threshold: [0.05, 0.2, 0.45],
    },
  );

  sections.forEach((section) => observer.observe(section));
}
