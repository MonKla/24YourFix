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
        
        // --- เปลี่ยนตรงนี้: Login เสร็จ ไปหน้า Dashboard เลย ---
        document.getElementById('page-login').classList.add('hidden');
        document.getElementById('page-dashboard').classList.remove('hidden');
        // --------------------------------------------------
        
    } else {
        alert(`ไม่พบข้อมูลทะเบียน "${plate}" ในระบบ\nกรุณาตรวจสอบความถูกต้อง หรือใช้ข้อมูลทดสอบ: 1กข9999`);
    }
}

function authLogout() {
    localStorage.removeItem("currentPlate");
    document.getElementById('plateInput').value = "";
    
    // ซ่อนทุกหน้า
    document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
    
    // เด้งกลับไปหน้า Home (หน้าแรกสุด)
    document.getElementById('page-home').classList.remove('hidden');
}