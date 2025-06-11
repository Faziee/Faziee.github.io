// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// PDF Viewer Functions
function openPdf(pdfUrl) {
  const viewer = document.getElementById("pdf-viewer");
  viewer.src = pdfUrl + "#view=fitH";
  document.getElementById("pdf-modal").style.display = "block";
}

function closePdf() {
  document.getElementById("pdf-modal").style.display = "none";
  document.getElementById("pdf-viewer").src = "";
}

// Close PDF modal when clicking outside
window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("pdf-modal")) {
    closePdf();
  }
});

// Gallery Filter functionality
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
      });

      this.classList.add("active");

      const filter = this.getAttribute("data-filter");
      const items = document.querySelectorAll(".gallery-item");

      items.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
