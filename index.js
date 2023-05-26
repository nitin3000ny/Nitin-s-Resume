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

