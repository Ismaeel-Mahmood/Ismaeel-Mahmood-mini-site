// Navigation : ouverture/fermeture du menu burger
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

function toggleMenu() {
  menu.classList.toggle("show");
  burger.setAttribute("aria-expanded", String(menu.classList.contains("show")));
}
burger.addEventListener("click", toggleMenu);
// accessibilité clavier (le burger a tabindex="0")
burger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMenu();
  }
});
// Fermer le menu quand on clique à l'extérieur
document.addEventListener("click", (e) => {
  if (!burger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
    burger.setAttribute("aria-expanded", "false");
  }
});
// Affiche chaque article lorsque l'utilisateur fait défiler la page
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll("article");
  function handleScroll() {
    articles.forEach((article) => {
      const rect = article.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        article.classList.add("fade-in");
      }
    });
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

// Formulaire de contact : GitHub Pages est un hébergement statique (pas de PHP).
// On affiche donc une confirmation au lieu d'envoyer les données à msg.php.
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // la validation "required" a déjà eu lieu
    form.reset();
    document.getElementById("confirmation").hidden = false;
  });
}
