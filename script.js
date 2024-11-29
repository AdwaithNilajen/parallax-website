// Change Navbar Background on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



// actually not needed but i keep it there if i want to customize scrolling and its performance is same as scroll-behavior: smooth;
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Fade-in Effect on Scroll
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.content-section, .parallax .content');
    const scrollPosition = window.scrollY + window.innerHeight;
  
    elements.forEach(el => {
      if (scrollPosition > el.offsetTop + el.offsetHeight / 3) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  });
  
  // Initial Styles for Animation
  document.querySelectorAll('.content-section, .parallax .content').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 1s, transform 1s';
  });
  
  // Dim Background Effect on Scroll these section works for serenity part
document.addEventListener('scroll', () => {
  const section = document.querySelector('#forest2');
  const scrollPosition = window.scrollY;

  if (scrollPosition > section.offsetTop - window.innerHeight / 2) {
    section.style.filter = 'brightness(80%)';
  } else {
    section.style.filter = 'brightness(100%)';
  }
});

// it tooks the users details by input tag and after clicking submit button displays an alert message
document.getElementById('visitor-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('visitor-email').value;
  const phone = document.getElementById('visitor-phone').value;
  const location = document.getElementById('visitor-location').value;

  if (email && phone && location) {
    alert('Thank you for getting in touch! We will reach out to you soon.');
    document.getElementById('visitor-form').reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});

