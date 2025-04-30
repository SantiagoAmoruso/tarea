const header=' <h1 class = "h1"><a href="index.html">Mi sitio</a></h1>'
const nav ='  <nav id="nav", class="nav"><ul class="nav-list"><li><a href="pagina2.html">pagina-1</a></li><li><a href="pagina3.html">pagina-2</a></li></ul></nav>'
const footer=' <footer id="footer"><i class="bx bxl-instagram red"><p>Lorem.</p></i><i class="bx bxl-whatsapp green" ><p>Lorem.</p></i><i class="bx bxl-linkedin blue" ><p>Lorem.</p></i></footer>'

document.querySelector('header').innerHTML=header;
document.querySelector('nav').innerHTML=nav;
document.querySelector('footer').innerHTML=footer;