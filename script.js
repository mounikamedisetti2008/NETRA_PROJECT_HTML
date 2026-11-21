
/* Live Clock */

function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });
}

setInterval(updateClock, 1000);
updateClock();

/* Navigation Active Link */

const links = document.querySelectorAll(".navigation a");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        links.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

/* Dispatch Mission Button */

function dispatchMission() {
    alert("Welcome to NETRA Mission Dispatch!");
}
