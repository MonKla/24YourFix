let currentCar = null;

function startApp(plate) {
    currentCar = carData[plate];
    renderDashboard();
}

function renderDashboard() {
    if (!currentCar) return;

    document.getElementById('carTitle').innerText = `${currentCar.brand} ${currentCar.model}`;
    
    const currentYear = 2025;
    const age = currentYear - currentCar.year;
    let score = 100 - (age * 3) - Math.floor(Math.random() * 5);
    if (score < 0) score = 0;

    const scoreText = document.getElementById('healthScore');
    const circle = document.getElementById('healthCircle');
    
    scoreText.innerText = `${score}%`;

    if (score >= 80) {
        circle.style.borderColor = "#00c300";
        circle.style.color = "#00c300";
    } else if (score >= 50) {
        circle.style.borderColor = "#ffcc00";
        circle.style.color = "#ffcc00";
    } else {
        circle.style.borderColor = "#ff0000";
        circle.style.color = "#ff0000";
    }

    const issue = repairData[currentCar.issueType];
    document.getElementById('issueName').innerText = issue ? issue.title : "ไม่พบข้อมูล";
}

function goToGuide() {
    if (!currentCar) return;

    const issue = repairData[currentCar.issueType];
    
    document.getElementById('guideTitle').innerText = issue.title;
    document.getElementById('adBanner').innerText = issue.adText;
    document.getElementById('priceDiy').innerText = issue.priceDiy;
    document.getElementById('pricePro').innerText = issue.pricePro;
    
    const list = document.getElementById('guideSteps');
    list.innerHTML = '';
    issue.steps.forEach(step => {
        const li = document.createElement('li');
        li.innerText = step;
        list.appendChild(li);
    });
    
    document.getElementById('page-dashboard').classList.add('hidden');
    document.getElementById('page-guide').classList.remove('hidden');
}

function goBack(targetId) {
    document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
    document.getElementById(targetId).classList.remove('hidden');
}

function openContact() { window.location.href = "tel:1234"; }
function openLine() { window.open("https://line.me"); }

function renderDashboard() {
    if (!currentCar) return;

    document.getElementById('carTitle').innerText = `${currentCar.brand} ${currentCar.model}`;
    document.getElementById('carMileage').innerText = currentCar.mileage;
    document.getElementById('carFuel').innerText = currentCar.fuel;
    document.getElementById('carInsurance').innerText = currentCar.insurance;

    const currentYear = 2025;
    const age = currentYear - currentCar.year;
    let score = 100 - (age * 3) - Math.floor(Math.random() * 5);
    if (score < 0) score = 0;

    const scoreText = document.getElementById('healthScore');
    const circle = document.getElementById('healthCircle');
    
    scoreText.innerText = `${score}%`;

    if (score >= 80) {
        circle.style.borderColor = "#00c300";
        circle.style.color = "#00c300";
    } else if (score >= 50) {
        circle.style.borderColor = "#ffcc00";
        circle.style.color = "#ffcc00";
    } else {
        circle.style.borderColor = "#ff0000";
        circle.style.color = "#ff0000";
    }

    const issue = repairData[currentCar.issueType];
    document.getElementById('issueName').innerText = issue ? issue.title : "ไม่พบข้อมูล";
}