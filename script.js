const links = document.querySelectorAll("nav a[href^='#']");
const sections = [...links]
  .map(l => document.querySelector(l.getAttribute("href")))
  .filter(Boolean);

window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  sections.forEach((sec, i) => {
    const active = sec.offsetTop <= y && sec.offsetTop + sec.offsetHeight > y;
    links[i].style.fontWeight = active ? "700" : "400";
  });
});