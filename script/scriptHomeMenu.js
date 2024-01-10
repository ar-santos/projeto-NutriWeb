document.addEventListener("DOMContentLoaded", function () {
        const menuIcon = document.getElementById("menuIcon");
        const closeIcon = document.getElementById("closeIcon");
        const mobileMenu = document.getElementById("mobileMenu");

        menuIcon.addEventListener("click", function () {
            mobileMenu.style.display = "block";
        });

        closeIcon.addEventListener("click", function () {
            mobileMenu.style.display = "none";
        });
});