/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== MENU HIDDEN ===============*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //When clicking on each nav__link, we remove the show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById("contact-form"),
//   contactName = document.getElementById("contact-name"),
//   contactEmail = document.getElementById("contact-email"),
//   contactProject = document.getElementById("contact-project");
// contactMessage = document.getElementById("contact-message");

// const sendEmail = (e) => {
//   e.preventDefault();

//   //Check if the field has a value
//   if (
//     contactName.value === "" ||
//     contactEmail.value === "" ||
//     contactProject.value === ""
//   ) {
//     //Add and remove color
//     contactMessage.classList.remove("color-blue");
//     contactMessage.classList.add("color-red");

//     //Show message
//     contactMessage.textContent = "Write all the input fields!";
//   } else {
//     //serviceID - templateID - #form -publicKey
//     emailjs
//       .sendForm(
//         "service_9pl818r",
//         "template_lldh1sn",
//         "#contact-form",
//         "nUWjG4TMe4uHMn2Mg"
//       )
//       .then(
//         () => {
//           //Show message and add color
//           contactMessage.classList.add("color-blue");
//           contactMessage.textContent = "Message sent ☑️";

//           //Remove message after 5 seconds
//           setTimeout(() => {
//             contactMessage.textContent = "";
//           }, 5000);
//         },
//         (error) => {
//           alert("OOPS!, Something has failed...", error);
//         }
//       );

//     //To clear the input field
//     contactEmail.value = "";
//     contactName.value = "";
//     contactProject.value = "";
//   }
// };
// contactForm.addEventListener("submit", sendEmail);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  //when the scroll is higher than 350 viewport height add the show-scroll class to scrollup
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// /*=============== DARK LIGHT THEME ===============*/
// const themeButton = document.getElementById("theme-button");
// const darkTheme = "dark-theme";
// const iconTheme = "ri-moon-line";

// //Previously selected topic
// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// //We obtain the current theme that the interface has by validating the dark theme class
// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";
// const getCurrentIcon = () =>
//   themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// //We validate if the user previously chose a topic
// if (selectedTheme) {
//   //if validations is fulfilled, we ask what the issue was to know if we activated
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
//     iconTheme
//   );
// }

// //Activate or deactivate the theme manually with the button
// themeButton.addEventListener("click", () => {
//   console.log("Theme button clicked")
//   //Add or removing the dark icon theme
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);

//   //Save the theme and current icon to the localStorage
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   localStorage.setItem("selected-icon", getCurrentIcon());
// });

/*=============== FORCE DARK MODE ===============*/
const darkTheme = "dark-theme";

// Apply dark theme by default
document.body.classList.add(darkTheme);

// Remove theme button functionality
const themeButton = document.getElementById("theme-button");
if (themeButton) {
  themeButton.style.display = "none"; // Hide the theme button
}


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // when scroll is greater than 50 viewport height add scroll header
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true /* Animations repeat */
})

sr.reveal('.home__data, .projects__container, .footer__container')
sr.reveal('.home__info div', {delay:600, origin: 'bottom', interval: 100})
sr.reveal('.skills__content:nth-child(1), .contact__content:nth-child(1)', {delay:600, origin: 'left'})
sr.reveal('.skills__content:nth-child(2), .contact__content:nth-child(2)', {delay:600, origin: 'right'})
sr.reveal('.skills__content:nth-child(3)', {delay:600, origin: 'top'})
sr.reveal('.qualification__content, .services__card', {interval: 100})
