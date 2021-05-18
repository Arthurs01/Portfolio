var btnMenu1 = document.getElementById('submenu');
var nav1 = document.getElementById('submenu1');

 btnMenu1.addEventListener('click', function(){
     nav1.classList.toggle('mostrar-submenu');
 })