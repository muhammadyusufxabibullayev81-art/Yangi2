const joinBtn = document.getElementById("joinBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

joinBtn.addEventListener("click", function() {
    modal.classList.add("active");
});

closeBtn.addEventListener("click", function() {
    modal.classList.remove("active");
});

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});


const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const modalResult = document.getElementById("modalResult");

submitBtn.addEventListener("click", function() {

    if (nameInput.value === "" || emailInput.value === "") {
        modalResult.textContent = "Fill all fields!";
        return;
    }

    modalResult.textContent =
        "Welcome to SportZone, " + nameInput.value + "!";
});


const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function() {
    document.getElementById("sports").scrollIntoView({
        behavior: "smooth"
    });
});


const likeBtns = document.querySelectorAll(".likeBtn");

likeBtns.forEach(function(btn) {

    btn.addEventListener("click", function() {

        btn.classList.toggle("liked");

        if (btn.classList.contains("liked")) {
            btn.textContent = "♥";
        } else {
            btn.textContent = "♡";
        }

    });

});


const sportBtns = document.querySelectorAll(".sportBtn");
const sportResult = document.getElementById("sportResult");

sportBtns.forEach(function(btn) {

    btn.addEventListener("click", function() {

        const card = btn.parentElement;
        const sport = card.querySelector("h3").textContent;

        sportResult.textContent =
            sport + " selected! Let's go! 🔥";

    });

});


const playerBtns = document.querySelectorAll(".playerBtn");
const playerResult = document.getElementById("playerResult");

playerBtns.forEach(function(btn) {

    btn.addEventListener("click", function() {

        const player = btn.parentElement.querySelector("h3").textContent;

        playerResult.textContent =
            player + " players section selected! 🏆";

    });

});


const startBtn = document.getElementById("startBtn");
const aboutResult = document.getElementById("aboutResult");

startBtn.addEventListener("click", function() {

    aboutResult.textContent =
        "🔥 Your sports journey starts today!";

});