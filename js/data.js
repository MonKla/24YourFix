const carData = {
    "1กข9999": { 
        brand: "Toyota", 
        model: "Yaris", 
        year: 2017,
        mileage: "125,000 กม.", 
        fuel: "เบนซิน 91", 
        insurance: "หมดอายุ: 12 ส.ค. 68",
        parts: {
            engine:  { status: "warning",  percent: 75 },
            battery: { status: "critical", percent: 30 },
            tire:    { status: "good",     percent: 90 },
            brake:   { status: "good",     percent: 85 },
            shock:   { status: "warning",  percent: 60 }
        }
    },
    "2กค5555": { 
        brand: "Honda", 
        model: "Civic", 
        year: 2023, 
        mileage: "45,000 กม.", 
        fuel: "แก๊สโซฮอล์ 95", 
        insurance: "หมดอายุ: 05 ม.ค. 69",
        parts: {
            engine:  { status: "good",     percent: 98 },
            battery: { status: "good",     percent: 92 },
            tire:    { status: "critical", percent: 15 },
            brake:   { status: "good",     percent: 95 },
            shock:   { status: "good",     percent: 90 }
        }
    }
};

const repairData = {
    "engine": {
        title: "เครื่องยนต์ / ความร้อน",
        preventive: "หมั่นเช็กระดับน้ำยาหล่อเย็นและน้ำมันเครื่องทุกสัปดาห์",
        steps: [
            "จอดพักทันที",
            "รอเครื่องเย็น 20 นาที",
            "เติมน้ำยาหล่อเย็น",
            "ติดต่อช่าง"
        ],
        priceDiy: "300.-", pricePro: "1,500.-", 
        adText: "น้ำมันเครื่องสังเคราะห์แท้ ลด 20%",
        adImage: "asset/part-engine.png"
    },
    "battery": {
        title: "แบตเตอรี่",
        preventive: "ปิดไฟหน้า/แอร์ ก่อนดับเครื่องทุกครั้ง เพื่อยืดอายุแบต",
        steps: ["ดับเครื่องยนต์", "เช็กขั้วแบต", "พ่วงแบต", "เรียกช่างเปลี่ยน"],
        priceDiy: "2,200.-", pricePro: "2,500.-", 
        adText: "แบตเตอรี่ GS พร้อมส่งด่วน 24 ชม.",
        adImage: "asset/part-battery.png"
    },
    "tire": {
        title: "ยางรถยนต์",
        preventive: "เช็กลมยางเดือนละ 1 ครั้ง และสลับยางทุก 10,000 กม.",
        steps: ["จอดไหล่ทาง", "ขึ้นแม่แรง", "เปลี่ยนยางอะไหล่", "ปะยาง"],
        priceDiy: "0.-", pricePro: "500.-", 
        adText: "ยาง Michelin ซื้อ 3 แถม 1",
        adImage: "asset/part-tire.png"
    },
    "brake": {
        title: "ระบบเบรก",
        preventive: "เลี่ยงการเบรกกะทันหัน เช็กน้ำมันเบรกทุก 6 เดือน",
        steps: ["เช็กระดับน้ำมันเบรก", "ฟังเสียงผิดปกติ", "ติดต่อช่างทันที"],
        priceDiy: "400.-", pricePro: "1,800.-", 
        adText: "ผ้าเบรก Bendix เบรกนุ่ม หนึบ",
        adImage: "asset/part-brake.jpg"
    },
    "shock": {
        title: "โช๊คอัพ / ช่วงล่าง",
        preventive: "ชะลอความเร็วเมื่อเจอเนินระนาด หลีกเลี่ยงหลุมบ่อ",
        steps: ["ก้มดูรอยรั่วซึม", "ขย่มรถเช็กการคืนตัว", "เข้าอู่ตรวจสอบ"],
        priceDiy: "ยากมาก", pricePro: "3,000.-", 
        adText: "โช๊คอัพ Kayaba นุ่มนวล เกาะถนน",
        adImage: "asset/part-shock.jpg"
    }
};