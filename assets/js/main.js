const togglerEl = document.getElementById("toggler-icon");
const overlayEl = document.querySelector(".overlay");
const crossEl = document.getElementById("cross-icon");
const offcanvasEl = document.querySelector(".offcanvas");

togglerEl.addEventListener('click', function () {
    overlayEl.style.display = "block";
    setTimeout(function () {
        offcanvasEl.style.transform = 'translateX(0)';
    }, 0)

});

crossEl.addEventListener('click', function () {
    offcanvasEl.style.transform = 'translateX(100%)';
    setTimeout(function () {
        overlayEl.style.display = "none";
    }, 400)
});

overlayEl.addEventListener('click', function (e) {
    if (e.target === overlayEl) {
        overlayEl.style.display = "none";
    }
});


