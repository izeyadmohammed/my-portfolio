document.addEventListener("DOMContentLoaded", function() {
  const headerWrap = document.querySelector("header .wrap");
  if (headerWrap) {
    const btn = document.createElement("button");
    btn.className = "mobile-menu-btn";
    btn.id = "mobile-hamburger";
    btn.innerHTML = "<span></span><span></span><span></span>";
    headerWrap.prepend(btn);

    btn.addEventListener("click", function() {
      const nav = document.querySelector("header nav");
      if (nav) {
        nav.classList.toggle("active");
        btn.classList.toggle("active");
      }
    });

    document.querySelectorAll("header nav a").forEach(link => {
      link.addEventListener("click", () => {
        const nav = document.querySelector("header nav");
        if (nav) nav.classList.remove("active");
        btn.classList.remove("active");
      });
    });
  }
});
