function authLogin() {
    const plateInput = document.getElementById('plateInput').value.trim();
    if (!plateInput) {
        alert("กรุณากรอกเลขทะเบียนรถค่ะ");
        return;
    }

    if (carData[plateInput]) {
        currentCar = carData[plateInput]; 
        renderDashboard();       
        document.getElementById('page-login').classList.add('hidden');
        document.getElementById('page-dashboard').classList.remove('hidden');

    } else {
        alert("❌ ไม่พบข้อมูลรถทะเบียนนี้ในระบบ\n(Demo: ลองใช้ 1กข9999 ดูนะคะ)");
    }
}

function authLogout() {
    currentCar = null;
    document.getElementById('plateInput').value = ""; 
    
    document.getElementById('page-dashboard').classList.add('hidden');
    document.getElementById('page-login').classList.remove('hidden');
    document.getElementById('page-guide').classList.add('hidden');
}