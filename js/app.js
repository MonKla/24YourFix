document.addEventListener("DOMContentLoaded", () => {
    const plate = localStorage.getItem("currentPlate");
    if (!plate) {
        window.location.href = "index.html";
        return;
    }
    const car = mockDB[plate];
    document.getElementById("carName").innerText = `${car.brand} ${car.model}`;
    document.getElementById("healthScore").innerText = `${car.health}%`;
    if(car.health < 50) {
        document.getElementById("healthScore").style.color = "red";
    }
});

function goToGuide() {
    window.location.href = "guide.html";
}