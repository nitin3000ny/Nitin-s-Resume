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
  }, 3500);
  setTimeout(() => {
    text.textContent = "Blogger";
  }, 7700);
};

textLoad();
setInterval(textLoad,12000)

