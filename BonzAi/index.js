// NAVBAR SCROLL
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add('header--scrolled') // Change background color when scrolling down
    } else {
      navbar.classList.remove('header--scrolled') // Reset to original color when at the top
    }
  });
});

// Navbar links scroll effect
// Get all links with an href that starts with '#'
const links = document.querySelectorAll('a[href^="#"]');
// Loop through each link and add an event listener
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the target element's ID from the href attribute
    const targetID = link.getAttribute('href');

    // Get the target element
    const target = document.querySelector(targetID);

    // Calculate the distance from the top of the page to the target element
    const offset = target.offsetTop;

    // Scroll to the target element using the scrollIntoView method
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});

// Hamburger menu
function toggleSidebar() {
    var sidebar = document.getElementById('headerList');
    if (sidebar.style.right === '0px' || sidebar.style.right === '') {
      sidebar.style.right = '-100%';
    } else {
      sidebar.style.right = '0';
    }
  }