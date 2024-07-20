'use strict';



/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAV TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);



/**
 * HEADER
 * 
 * active header when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);






document.addEventListener('DOMContentLoaded', function() {
  const successMessage = document.getElementById('success-message');
  const sendMessageBtn = document.getElementById('send-message-btn');

  sendMessageBtn.addEventListener('click', function() {
    successMessage.classList.add('show');
    setTimeout(function() {
      successMessage.classList.remove('show');
    }, 2000);
  });

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the success message
    successMessage.classList.add('show');

    // Hide the success message after 2 seconds
    setTimeout(function() {
      successMessage.classList.remove('show');
    }, 2000);

    // Optionally, clear the form fields (uncomment if needed)
    // event.target.reset();

    return false; // Prevent default form submission
  }
});
