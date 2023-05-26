const btn = document.getElementById('toggle');
const menu = document.getElementById('nav-links');
btn.addEventListener('click', () => {
  menu.classList.toggle('active');
})
window.addEventListener('scroll', function () {
  const navBarHeight = document.getElementById('nav').offsetHeight;
  const backButton = document.querySelector('.top');

  if (window.pageYOffset > navBarHeight) {
    backButton.classList.add('visible');
  } else {
    backButton.classList.remove('visible');
  }
}); document.addEventListener('DOMContentLoaded', function () {
  var socialMediaLinks = document.querySelectorAll('.social-media a');
  var loadingOverlay = document.querySelector('.loading-overlay');

  socialMediaLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      var linkText = link.getAttribute('data-link-text');
      showLoadingOverlay(linkText);

      setTimeout(function () {
        hideLoadingOverlay();
        window.location.href = link.href;
      }, 500);
    });
  });

  function showLoadingOverlay(linkText) {
    var loadingText = document.createElement('span');
    loadingText.classList.add('loading-text');
    loadingText.textContent = 'Redirecting ' + linkText + '...';

    loadingOverlay.appendChild(loadingText);
    loadingOverlay.style.display = 'block';
  }

  function hideLoadingOverlay() {
    var loadingText = document.querySelector('.loading-text');
    loadingOverlay.removeChild(loadingText);
    loadingOverlay.style.display = 'none';
  }
});



const text = document.querySelector(".typing");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Web Designer";
    text.style.color = "#1db847";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Content Writer";
    text.style.color = "#095587";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Computer Engineer";
    text.style.color = "#028300";
  }, 12000);
};

textLoad();
setInterval(textLoad, 16000);




// Call the incrementVisitorCount function when the page loads
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 1240);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (
      entry.isIntersecting
    ) {
      entry.target.classList.add('animating-skill')
    }
    else {
      entry.target.classList.remove('animating-skill');
    }
  });
});

const noAnimation = document.querySelectorAll('.no-animation');
noAnimation.forEach((el) => observer.observe(el)); console.log(document.getElementById('#nav').offsetHeight);

