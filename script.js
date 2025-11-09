  const container = document.getElementById('decorScroll');
  const cloneCards = () => {
  const cards = container.querySelectorAll('.decor-card');
    cards.forEach(card => {
  const clone = card.cloneNode(true);
  container.appendChild(clone);
    });
  };
  function scrollDecor(scrollOffset) {
    container.scrollBy({
      left: scrollOffset,
      behavior: 'smooth'
    });
  }
  function startAutoScroll() {
    setInterval(() => {
      container.scrollBy({ left: 1, behavior: 'smooth' });
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
        container.scrollLeft = 0;
      }
    }, 20);
  }

  const eventDate = new Date("2025-12-31T23:59:59").getTime();
  const countdownFunc = setInterval(function () {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;
  if (timeLeft < 0) {
    clearInterval(countdownFunc);
    document.getElementById("countdown").innerHTML = "<strong>Offer Expired!</strong>";
    return;
  }
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}, 1000);

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop the form from refreshing the page

  // select the form card section
  const formCard = document.querySelector(".ss-form-card");

  // add a simple fade-out effect
  formCard.style.opacity = "0";
  formCard.style.transition = "opacity 0.5s ease";

  // after fade-out, show success message
  setTimeout(() => {
    formCard.innerHTML = `
      <div style="text-align:center; padding:40px;">
        <h2>Submission Successful Wait For The Call</h2>
        <p>Thank you for booking a call with SS Events.<br> We’ll contact you shortly!</p>
      </div>
    `;
    formCard.style.opacity = "1";
  }, 500); // wait until fade-out ends
});

  window.addEventListener('load', () => {
    cloneCards();
    cloneCards(); 
    startAutoScroll();
  });