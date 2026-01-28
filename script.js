document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const popup = document.createElement("div");
    popup.className = "lightbox";
    popup.innerHTML = `<img src="${img.src}">`;
    popup.onclick = () => popup.remove();
    document.body.appendChild(popup);
  });
});
