document.addEventListener("DOMContentLoaded", function () {
  const surpriseBtn = document.getElementById("surpriseBtn");
  const tipBanner = document.getElementById("tipBanner");

  const facts = [
    "Did you know? Papyrus was first made in Egypt over 5000 years ago!",
    "Egyptian artisans still use ancient techniques passed down generations!",
    "Henna designs in Egypt are inspired by Pharaonic and Nubian patterns.",
    "Arabic calligraphy is considered both a craft and a spiritual practice!",
    "Bedouin jewelry often uses protective symbols and semi-precious stones."
  ];

  let hideTimeout;

  surpriseBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    tipBanner.textContent = facts[randomIndex];
    tipBanner.classList.add("show");
    tipBanner.classList.remove("hidden");

    // Clear previous timeout if any
    if (hideTimeout) clearTimeout(hideTimeout);

    // Auto hide after 5 seconds
    hideTimeout = setTimeout(() => {
      tipBanner.classList.remove("show");
      tipBanner.classList.add("hidden");
    }, 5000);
  });

  // Allow user to click banner to hide immediately
  tipBanner.addEventListener("click", () => {
    tipBanner.classList.remove("show");
    tipBanner.classList.add("hidden");
    if (hideTimeout) clearTimeout(hideTimeout);
  });
});

const bookButtons = document.querySelectorAll(".book-btn");
  bookButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("🎉 Your seat has been reserved! We'll contact you with details soon.");
    });
  });
