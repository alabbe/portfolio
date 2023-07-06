let scrollButton = document.getElementById("scroll");
const scrollWindowLevel = 200;

// Display scroll top button when the user scrolls down
window.addEventListener('scroll', function(){
    if (document.body.scrollTop > scrollWindowLevel || document.documentElement.scrollTop > scrollWindowLevel) {
       scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
});


scrollButton.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }));

  // show or hide the menu list
const toggleMenu = () => {
    if (mobileMenuList.style.display === 'flex') {
        mobileMenuList.style.display = 'none';
    } else {
        mobileMenuList.style.display = 'flex';
    }
}

let burgerBtn = document.getElementById('menu');
let mobileMenuList = document.getElementById('mobileMenuList');


burgerBtn.addEventListener('click', toggleMenu);

// close the menu as soon as the user clicks on an item
const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
);