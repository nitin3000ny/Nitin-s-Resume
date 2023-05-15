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
  }, 4000);
  setTimeout(() => {
    text.textContent = "Content Writer";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Computer Engineer";
  }, 12000);
};

textLoad();
setInterval(textLoad,16000);

