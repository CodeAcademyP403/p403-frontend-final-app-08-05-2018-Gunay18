
// Closing sidebar
var close = document.querySelector(".leftNav ul .close");
var menuIcon = document.querySelector(".leftNav ul .close a i")
var sidebar = document.querySelector(".sidebar");
var WgBoard = document.querySelector(".topNav header h1");
var board = document.querySelector(".topNav header h1 span");
var main = document.querySelector("main");
var sidebarTexts = document.querySelectorAll("nav.sidebar span");
var searchButton = document.querySelector(".sidebar button");

close.addEventListener("click", function (e) {

    if (!sidebar.classList.contains("minimized") && mediaQuery(window.matchMedia("(max-width: 768px)"))) {
        minimizeSidebar();
        removeSidebar();
    }
    else if (!sidebar.classList.contains("minimized")) {
        minimizeSidebar();
    }
    else if (sidebar.classList.contains("minimized") && mediaQuery(window.matchMedia("(max-width: 768px)"))) {
        expandSidebar();
        sidebar.style.width = window.innerWidth + "px";
        console.log(window.innerWidth);
    }
    else {
        expandSidebar();
    }
})

if (mediaQuery(window.matchMedia("(max-width: 768px)"))) {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
}
// Opening dropdownMenus
var expandingItem = document.querySelectorAll(".expanding-item");

for (var i of expandingItem) {
    i.addEventListener("click", function (e) {
        e.stopPropagation();
        var dropdownMenu = this.nextElementSibling;
        if (dropdownMenu != null && !dropdownMenu.classList.contains("active")) {
            dropdownMenu.classList.add("active");
            this.classList.add("expanded");
            // if sidebar is minimized, make sidebar large again
            if (this.parentElement.parentElement.parentElement == sidebar && sidebar.style.width == "100px") {
                expandSidebar();
            }


        } else if (dropdownMenu != null && dropdownMenu.classList.contains("active")) {
            e.preventDefault();
            dropdownMenu.classList.remove("active");
            this.classList.remove("expanded");

        }
    }
    )
}

var textInput = document.querySelector("nav.sidebar .input-group .form-control");
var searchButton = document.querySelector("nav.sidebar .input-group .btn");

textInput.addEventListener("click", function (e) {
    textInput.classList.add("active");
    searchButton.style.paddingLeft = "200px";
})

document.addEventListener("click", function (e) {
    var dropdown = document.querySelectorAll(".dropdownMenu");

    for (var i of dropdown) {
        if (i.classList.contains("active") && e.target != i) {
            i.classList.remove("active");
            i.previousElementSibling.classList.remove("expanded");
        }
    }
})

function expandSidebar() {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
    sidebar.classList.remove("minimized");

    main.style.paddingLeft = "250px";
    sidebar.style.width = "250px";
    WgBoard.style.width = "250px";
    board.style.display = "inline-block";
    searchButton.style.display = "block";
    for (var text of sidebarTexts) {

        text.style.display = "inline-block";
    }
}
function minimizeSidebar() {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
    sidebar.classList.add("minimized");
    main.style.paddingLeft = "100px";
    sidebar.style.width = "100px";
    WgBoard.style.width = "100px";
    board.style.display = "none";
    searchButton.style.display = "none";
    for (var text of sidebarTexts) {
        text.style.display = "none";
    }
    var dropdown = document.querySelectorAll(".sidebar ul li .dropdownMenu");
    for (var item of dropdown) {
        item.style.transition = "none";
    }
}

function mediaQuery(x) {
    if (x.matches) { // If media query matches
        return true;
    } else {
        return false;
    }
}

function removeSidebar() {
    sidebar.style.width = "0px";
    main.style.paddingLeft = "0px";
}

var x = window.matchMedia("(max-width: 768px)")
x.addListener(mediaQuery) // Attach listener function on state changes