document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleTheme");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
});
