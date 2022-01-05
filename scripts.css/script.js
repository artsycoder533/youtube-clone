const hamburger = document.getElementById("hamburger");

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show-sidebar");
}

hamburger.addEventListener("click", toggleSidebar);