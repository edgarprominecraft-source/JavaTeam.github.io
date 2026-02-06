// переключение вкладок меню
function openPage(id) {
    document.querySelectorAll(".page-block").forEach(b => {
        b.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

// toggle карт
document.querySelectorAll(".map-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});

// button кнопки приглашения1
document.querySelectorAll(".info-button").forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.add("active");
        setTimeout(() => {
            this.classList.remove("active");
        }, 300);
    });
});

// button кнопки приглашения1
document.querySelectorAll(".praki-submit").forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.add("active");
        setTimeout(() => {
            this.classList.remove("active");
        }, 300);
    });
});

// toggle кнопки приглашения2
document.querySelectorAll(".map-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});
