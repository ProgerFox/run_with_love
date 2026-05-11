export const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({ top: elementPosition, behavior: "smooth" });
};
