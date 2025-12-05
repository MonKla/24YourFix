function authLogin() {
    const inputElement = document.getElementById('plateInput');
    const plate = inputElement.value.trim();

    if (!plate) {
        alert("โปรดระบุเลขทะเบียนรถ");
        return;
    }

    if (carData[plate]) {
        localStorage.setItem("currentPlate", plate);
        startApp(plate);
        
        document.getElementById('page-login').classList.add('hidden');
        document.getElementById('page-dashboard').classList.remove('hidden');
    } else {
        alert(`ไม่พบข้อมูลทะเบียน "${plate}" ในระบบ\nกรุณาตรวจสอบความถูกต้อง หรือใช้ข้อมูลทดสอบ: 1กข9999`);
    }
}

function authLogout() {
    localStorage.removeItem("currentPlate");
    document.getElementById('plateInput').value = "";
    document.getElementById('page-dashboard').classList.add('hidden');
    document.getElementById('page-guide').classList.add('hidden');
    document.getElementById('page-login').classList.remove('hidden');
}