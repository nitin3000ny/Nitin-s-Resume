const btn = document.getElementById('toggle');
const menu = document.getElementById('nav-links');
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
})

const text = document.querySelector(".typing");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Web Designer";
    text.style.color="#1db847";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Content Writer";
    text.style.color="#095587";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Computer Engineer";
    text.style.color="#095587";
  }, 12000);
};

textLoad();
setInterval(textLoad,16000);

