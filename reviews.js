document.addEventListener("DOMContentLoaded", () => {
    const reviewsContainer = document.getElementById("reviews-container");
    const form = document.getElementById("review-form");
  
    // 10 random, professional tourist reviews about Egyptian sites
    const presetReviews = [
      {
        name: "Isabella",
        nationality: "Italian",
        review: `Visiting the Pyramids of Giza was a dream come true. The site is breathtaking and full of history. The guided tours made the experience unforgettable.`,
        rating: 5,
      },
      {
        name: "James",
        nationality: "American",
        review: `The Nile cruise from Luxor to Aswan exceeded all expectations. Scenic views, excellent service, and the temples along the way were stunning.`,
        rating: 5,
      },
      {
        name: "Fatima",
        nationality: "Moroccan",
        review: `Exploring the Valley of the Kings was fascinating, but it got quite crowded during peak hours. Still, a must-see for history lovers!`,
        rating: 4,
      },
      {
        name: "Liam",
        nationality: "Irish",
        review: `The Karnak Temple complex impressed me with its grandeur. Wish I had more time to explore every corner.`,
        rating: 4,
      },
      {
        name: "Sophia",
        nationality: "Brazilian",
        review: `The local markets in Cairo offered a vibrant cultural experience. The website helped me find authentic spots that tourists often miss.`,
        rating: 5,
      },
      {
        name: "Yuki",
        nationality: "Japanese",
        review: `The sound and light show at the Pyramids was mesmerizing. The website’s info was very helpful for planning my trip.`,
        rating: 5,
      },
      {
        name: "Ahmed",
        nationality: "Egyptian",
        review: `Proud to see tourists enjoying the Red Sea resorts. The detailed site guides made it easy for my friends to explore safely.`,
        rating: 4,
      },
      {
        name: "Emily",
        nationality: "Australian",
        review: `Luxor's temples are stunning. The online reviews gave me confidence choosing the best tour operators.`,
        rating: 5,
      },
      {
        name: "Mohamed",
        nationality: "Sudanese",
        review: `Alexandria’s Mediterranean charm is unlike anywhere else. The website’s tips helped us navigate the city easily.`,
        rating: 4,
      },
      {
        name: "Anna",
        nationality: "German",
        review: `A beautiful mix of ancient history and modern culture. The site’s reviews were authentic and trustworthy.`,
        rating: 5,
      },
    ];
  
    // Function to create stars for rating
    function createStars(rating) {
      const maxStars = 5;
      let starsHTML = "";
      for (let i = 1; i <= maxStars; i++) {
        starsHTML += i <= rating ? "★" : "☆";
      }
      return starsHTML;
    }
  
    // Function to render a single review card
    function renderReview(review) {
      const div = document.createElement("div");
      div.classList.add("review-card");
      div.innerHTML = `
        <div class="review-header">
          <div>
            <span class="review-name">${escapeHTML(review.name)}</span>
            <span class="review-nationality">(${escapeHTML(review.nationality)})</span>
          </div>
          <div class="review-rating" aria-label="Rating: ${review.rating} out of 5 stars">
            <span class="stars">${createStars(review.rating)}</span>
            <span>${review.rating}/5</span>
          </div>
        </div>
        <p class="review-text">${escapeHTML(review.review)}</p>
      `;
      return div;
    }
  
    // Escape HTML to prevent injection
    function escapeHTML(str) {
      return str.replace(/[&<>"']/g, function (m) {
        return (
          {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          }[m] || m
        );
      });
    }
  
    // Render all preset reviews initially
    presetReviews.forEach(review => {
      const reviewCard = renderReview(review);
      reviewsContainer.appendChild(reviewCard);
    });
  
    // Handle form submit to add a new review
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const nationality = form.nationality.value.trim();
      const reviewText = form["review-text"].value.trim();
      const rating = parseInt(form.rating.value);
  
      if (!name || !nationality || !reviewText || !rating) {
        alert("Please fill out all fields and select a rating.");
        return;
      }
  
      const newReview = {
        name,
        nationality,
        review: reviewText,
        rating,
      };
  
      // Render and prepend new review
      const reviewCard = renderReview(newReview);
      reviewsContainer.prepend(reviewCard);
  
      // Reset form
      form.reset();
    });
  });
  