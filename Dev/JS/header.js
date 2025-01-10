document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("header nav a"); // Tous les liens dans le <header>
  const currentPath = window.location.pathname.split("/").pop(); // Nom de fichier de la page actuelle

  links.forEach(link => {
    // Récupère le nom du fichier à partir de l'attribut href
    const linkPath = link.getAttribute("href").split("/").pop();

    // Compare le chemin actuel avec le chemin du lien
    if (currentPath === linkPath) {
      link.classList.add("title_color"); // Ajoute la classe si les chemins correspondent
    }
  });
});
