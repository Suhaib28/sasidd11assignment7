var navLinks = document.querySelectorAll('.nav-links a');
var sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
  var current = '';
  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(function(link) {
    link.style.color = '#9a9a9a';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#d4a853';
    }
  });
});

var form = document.getElementById('contactForm');
var successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('fname').value;
  var email = document.getElementById('femail').value;
  var message = document.getElementById('fmessage').value;
  if (name && email && message) {
    successMsg.style.display = 'block';
    form.reset();
    setTimeout(function() {
      successMsg.style.display = 'none';
    }, 4000);
  }
});