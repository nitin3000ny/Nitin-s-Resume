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


// Function to increment the visitor count
function incrementVisitorCount() {
  // Retrieve the current count from the span element
  var countElement = document.getElementById('count');
  var count = parseInt(countElement.innerText);

  // Increment the count by 1
  count++;

  // Update the count in the span element
  countElement.innerText = count;
}

// Call the incrementVisitorCount function when the page loads
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  setTimeout(function() {
    document.body.classList.add("loaded");
  }, 1240);
});

