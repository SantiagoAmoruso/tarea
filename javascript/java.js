const headernav = `
  <div class="banner"></div>
  <header>
    <img class="img" src="image/logo.jpg" alt="logo">
    <button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>
    <article class="nav" id="nav">
      <button class="cerrar-menu" id="cerrar"><i class="bi bi-x-lg"></i></button>
      <ul class="nav-list">
        <li><a href="index.html">Página principal</a></li>
        <li><a href="pagina2.html">Segunda página</a></li>
        <li><a href="pagina3.html">Tercera página</a></li>
      </ul>
    </article>
  </header>
`;

const footer = `
  <div class="foot">
    <div class="categorias">
      <h2>ESCRIBINOS</h2>
      <h4><i class='bx bxl-whatsapp'> +54 223-878-8448</i></h4>
      <h4><i class="bi bi-envelope"> Lorem.lorem@gmail.com</i></h4>
      <h4><i class="bi bi-geo-alt-fill"> Lorem, Lorem, ipsum.</i></h4>
      <h4><i class='bx bx-heart'> Lorem ipsum dolor sit.</i></h4>
      <h4><i class='bx bxl-twitter'> Lorem.</i></h4>
      <h4><i class='bx bxl-google' style='color:#ffffff'> Lorem.</i></h4>
      <h4><i class='bx bxs-game'> Lorem.</i></h4>
      <h4>Promociones Bancarias</h4>
    </div>
    <div class="escribinos">
      <h2>ESCRIBINOS</h2>
   
      <p>Dirección:</p>
      <h3>Lorem, ipsum dolor.</h3>
    </div>
  </div>
  <p class="pie">Todos Los Derechos Reservados Lorem. © 2025</p>
`;

document.addEventListener("DOMContentLoaded", function () {

  const headerContainer = document.querySelector('#headernav');
  const footerContainer = document.querySelector('#footer');

  if (headerContainer) headerContainer.innerHTML = headernav;
  if (footerContainer) footerContainer.innerHTML = footer;

  setTimeout(() => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const header = document.querySelector("header");

    if (abrir && cerrar && nav) {
      abrir.addEventListener("click", () => {
        nav.classList.add("visible");
      });

      cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
      });
    }

    if (header) {
      window.addEventListener("scroll", function () {
        header.classList.toggle("abajo", window.scrollY > 0);
      });
    }
  }, 0);
});
