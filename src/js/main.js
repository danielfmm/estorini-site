function toggleMenu() {
  var screenWidth = window.innerWidth;
  var menu = document.querySelector('.menu');
  var menuItems = menu.querySelectorAll('.itens');

  if (screenWidth <= 768) {
    if (menu.style.display === 'none') {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }

    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        menu.style.display = 'none';
      });
    });
  }
}

var menuButton = document.getElementById('m_menu');
menuButton.addEventListener('click', toggleMenu);
