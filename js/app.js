// js/app.js

let currentCar = null;

// พิกัดจุดบนรูปรถ (ปรับตามรูปจริงของเธอ)
const partPositions = {
    engine:  { top: "38%", left: "78%" },
    battery: { top: "32%", left: "68%" },
    tire:    { top: "68%", left: "18%" },
    brake:   { top: "68%", left: "78%" },
    shock:   { top: "52%", left: "20%" }
};

const partNames = {
    engine: "เครื่องยนต์", battery: "แบตเตอรี่",
    tire: "ยางรถยนต์", brake: "ระบบเบรก", shock: "ช่วงล่าง"
};

function startApp(plate) {
    currentCar = carData[plate];
    renderDashboard();
}

function renderDashboard() {
    if (!currentCar) return;

    // 1. ใส่ข้อมูลรถ
    document.getElementById('carTitle').innerText = `${currentCar.brand} ${currentCar.model}`;
    document.getElementById('carMileage').innerText = currentCar.mileage;
    document.getElementById('carFuel').innerText = currentCar.fuel;
    document.getElementById('carInsurance').innerText = currentCar.insurance;

    // 2. สร้างจุดและกราฟ
    const container = document.getElementById('carContainer');
    const statsList = document.getElementById('statsList');
    
    // เคลียร์ของเก่า
    if(container) container.querySelectorAll('.hotspot').forEach(el => el.remove());
    if(statsList) statsList.innerHTML = "";

    for (const [part, data] of Object.entries(currentCar.parts)) {
        let color = '#00c300';
        if (data.status === 'warning') color = '#ffcc00';
        if (data.status === 'critical') color = '#ff0000';

        // A. สร้างจุดบนรถ
        if (container && partPositions[part]) {
            const spot = document.createElement('div');
            spot.className = `hotspot status-${data.status}`;
            spot.style.top = partPositions[part].top;
            spot.style.left = partPositions[part].left;

            // Tooltip
            const info = repairData[part];
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip-box';
            tooltip.innerHTML = `<b>${info.title}</b><br>${info.preventive}`;
            spot.appendChild(tooltip);

            spot.onclick = () => {
                if (data.status !== 'good') goToGuide(part);
                else alert(`✅ ${info.title} สุขภาพดีเยี่ยม (${data.percent}%)`);
            };
            container.appendChild(spot);
        }

        // B. สร้างกราฟด้านข้าง
        if (statsList) {
            const statItem = document.createElement('div');
            statItem.className = 'stat-item';
            statItem.innerHTML = `
                <div class="stat-header">
                    <span>${partNames[part] || part}</span>
                    <span style="color:${color}">${data.percent}%</span>
                </div>
                <div class="stat-bar-bg">
                    <div class="stat-bar-fill" style="width: ${data.percent}%; background-color: ${color};"></div>
                </div>
            `;
            statsList.appendChild(statItem);
        }
    }
}

function goToGuide(partName) {
    const issue = repairData[partName || 'engine'];
    const banner = document.getElementById('adBanner');
    
    // โชว์รูปสินค้าแบบเต็มใบ
    if (issue.adImage) {
        banner.innerHTML = `<img src="${issue.adImage}" style="width:100%; height:100%; object-fit:contain;">`;
        banner.style.padding = "0"; banner.style.backgroundColor = "#fff";
    } else {
        banner.innerText = issue.adText;
        banner.style.padding = "20px"; banner.style.backgroundColor = "#eee";
    }

    document.getElementById('guideTitle').innerText = `การแก้ไข: ${issue.title}`;
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
function authLogout() {
    localStorage.removeItem("currentPlate");
    document.getElementById('plateInput').value = "";
    goBack('page-login');
}
function openContact() { window.location.href = "tel:1234"; }
function openLine() { window.open("https://line.me"); }