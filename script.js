document.addEventListener('DOMContentLoaded', function () {
    const navigation = document.querySelector('.navigation');
    const menuItems = document.querySelectorAll('.navigation a');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navigation.style.backgroundColor = '#555';
      } else {
        navigation.style.backgroundColor = '#333';
      }
    });
  
    menuItems.forEach(function (item) {
      item.addEventListener('mouseover', function () {
        item.style.color = '#ff9900';
      });
  
      item.addEventListener('mouseout', function () {
        item.style.color = '#fff';
      });
    });
  });
  