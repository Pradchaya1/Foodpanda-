// --- 1. ระบบจัดการเปลี่ยนภาษา (Dictionary) ---
let currentLang = 'th'; // ภาษากำหนดเริ่มต้น

const translations = {
    th: {
        nav_menu: "MENU", nav_dash: "DASHBOARD", nav_member: "MEMBER",
        header_title: "Super Performance Insight", header_sub: "Food and more, delivery",
        lbl_city: "เลือกพื้นที่วิเคราะห์:", opt_all_city: "ทุกเมือง (Overall)",
        lbl_rest: "เลือกร้านอาหาร:", opt_all_rest: "ทุกร้าน (All Restaurants)",
        kpi_rev: "ยอดขายรวม (Gross Revenue)", kpi_rev_sub: "● ข้อมูลอัปเดตล่าสุด",
        kpi_ord: "จำนวนคำสั่งซื้อ (Total Orders)", kpi_ord_sub: "ออเดอร์ทั้งหมดในระบบ",
        kpi_rat: "คะแนนรีวิวเฉลี่ย (Rating)",
        chart_rev: "เปรียบเทียบยอดขายรายเมือง (Revenue Comparison)",
        chart_pay: "ช่องทางการชำระเงิน", chart_del: "สถานะการจัดส่ง",
        chart_cat: "ยอดขายแยกตามหมวดหมู่", chart_age: "สัดส่วนลูกค้าตามช่วงวัย",
        top_menu: "เมนูยอดนิยม 5 อันดับแรก (ตามยอดขาย)",
        menu_title: "Menu Insights", menu_sub: "การวิเคราะห์ข้อมูลเชิงลึกของเมนูอาหาร (Market Basket Analysis)",
        menu_gallery: "ข้อมูลยอดขายรายเมนู (คลิกที่ชื่อเพื่อดูรายละเอียด)",
        menu_combo: "Top 3 Combo ยอดฮิต (สั่งคู่กันบ่อยที่สุด)",
        member_title: "Team Members", member_sub: "รายชื่อสมาชิกผู้วิเคราะห์ข้อมูล (Data Analysts)",
        modal_close: "ปิด", info: "Information",
        
        // ข้อมูลกราฟ & ไดนามิก
        lbl_rev_rs: "ยอดขาย (Rs.)", lbl_qty_person: "จำนวน (คน)",
        pay_cash: "เงินสด (Cash)", pay_card: "บัตร (Card)", pay_wallet: "กระเป๋าเงิน (Wallet)",
        del_success: "สำเร็จ (Delivered)", del_delay: "ล่าช้า (Delayed)", del_cancel: "ยกเลิก (Cancelled)",
        age_teen: "วัยรุ่น (Teenager)", age_adult: "วัยทำงาน (Adult)", age_senior: "ผู้สูงอายุ (Senior)",
        cat_labels: ['Italian', 'Dessert', 'Fast Food', 'Continental', 'Chinese'],
        
        // ข้อมูล Popup และ Combo
        action_lbl: "💡 Action:",
        action_1: "จัดโปรโมชัน Value Meal คู่กันเพื่อดันยอดบิล",
        action_2: "ทำเซ็ตสุดคุ้ม 'Italian Lover' สำหรับลูกค้ากลุ่มครอบครัว",
        action_3: "แนะนำเป็นเซ็ตอาหารกลางวัน (Lunch Box) คุ้มราคา",
        desc_rev: "ยอดขาย:", desc_ord: "จำนวน:", desc_ord_unit: "ออเดอร์",
        desc_price: "ราคา:", desc_price_unit: "ชิ้น", desc_rat: "เรตติ้ง:",
        pasta_desc: "ยอดขายรวมสูงสุดของร้าน",
        sandwich_desc: "เมนูยอดฮิตช่วงเช้า",
        pizza_desc: "เหมาะสำหรับทานเป็นครอบครัว",
        fries_desc: "ของทานเล่นสั่งคู่กันบ่อยสุด",
        burger_desc: "เมนูยอดฮิตมื้อดึก",

        // ชื่อสมาชิกและ Footer
        mem_1: "อาฑิตญาภรณ์ สินเกต",
        mem_2: "ภิรตา ดำรงรัตน์",
        mem_3: "ปรัชญา ปิงยศ",
        mem_4: "ปวีณ์นุช มัชวงค์",
        mem_5: "ณัฐภรณ์ วิชางาม",
        mem_6: "ศุภวิทย์ แดงสกล",
        footer_text: "© อาฑิตญาภรณ์ สินเกต, ภิรตา ดำรงรัตน์, ปรัชญา ปิงยศ, ปวีณ์นุช มัชวงค์, ณัฐภรณ์ วิชางาม, ศุภวิทย์ แดงสกล 2026"
    },
    en: {
        nav_menu: "MENU", nav_dash: "DASHBOARD", nav_member: "MEMBER",
        header_title: "Super Performance Insight", header_sub: "Food and more, delivery",
        lbl_city: "Select Area:", opt_all_city: "All Cities (Overall)",
        lbl_rest: "Select Restaurant:", opt_all_rest: "All Restaurants",
        kpi_rev: "Gross Revenue", kpi_rev_sub: "● Latest updated data",
        kpi_ord: "Total Orders", kpi_ord_sub: "All orders in system",
        kpi_rat: "Average Rating",
        chart_rev: "Revenue Comparison by City",
        chart_pay: "Payment Methods", chart_del: "Delivery Status",
        chart_cat: "Revenue by Category", chart_age: "Customer Age Proportion",
        top_menu: "Top 5 Popular Menus (by Revenue)",
        menu_title: "Menu Insights", menu_sub: "Market Basket Analysis",
        menu_gallery: "Menu Sales Data (Click name for details)",
        menu_combo: "Top 3 Popular Combos (Frequently ordered together)",
        member_title: "Team Members", member_sub: "List of Data Analysts",
        modal_close: "Close", info: "Information",

        // ข้อมูลกราฟ & ไดนามิก
        lbl_rev_rs: "Revenue (Rs.)", lbl_qty_person: "Volume (People)",
        pay_cash: "Cash", pay_card: "Card", pay_wallet: "Wallet",
        del_success: "Delivered", del_delay: "Delayed", del_cancel: "Cancelled",
        age_teen: "Teenager", age_adult: "Adult", age_senior: "Senior",
        cat_labels: ['Italian', 'Dessert', 'Fast Food', 'Continental', 'Chinese'],

        // ข้อมูล Popup และ Combo
        action_lbl: "💡 Action:",
        action_1: "Create a Value Meal combo to boost ticket size",
        action_2: "Offer 'Italian Lover' value set for families",
        action_3: "Recommend as a cost-effective Lunch Box set",
        desc_rev: "Revenue:", desc_ord: "Volume:", desc_ord_unit: "orders",
        desc_price: "Price:", desc_price_unit: "item", desc_rat: "Rating:",
        pasta_desc: "Highest total revenue",
        sandwich_desc: "Popular morning menu",
        pizza_desc: "Perfect for family meals",
        fries_desc: "Most frequently ordered side dish",
        burger_desc: "Popular late-night menu",

        // ชื่อสมาชิกและ Footer ภาษาอังกฤษ
        mem_1: "Artittayaporn Singate",
        mem_2: "Pirata Damrongrat",
        mem_3: "Pradchaya Pingyot",
        mem_4: "Paweenuch Matchwong",
        mem_5: "Nattaporn Vichangam",
        mem_6: "Supawit Dangsaskoi",
        footer_text: "© Artittayaporn Singate, Pirata Damrongrat, Pradchaya Pingyot, Paweenuch Matchwong, Nattaporn Vichangam, Supawit Dangsaskoi 2026"
    }
};

// ฟังก์ชันสลับภาษาเมื่อกด Dropdown
function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // เปลี่ยนข้อความตาม id-i18n ใน HTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerText = t[key];
    });

    // โหลดกราฟและข้อมูลใหม่เพื่อให้ภาษาเปลี่ยน
    initCharts(); 
    updateDashboard(document.getElementById('city-select').value);
    renderMenuInsights();
}

// --- 2. ข้อมูล Dataset ของระบบ ---
const cityData = {
    all: {
        revenue: 14343912, orders: "6,000", rating: "3.0",
        menus: ["Pasta", "Sandwich", "Pizza", "Fries", "Burger"],
        payment: [2039, 2002, 1959], delivery: [2060, 1972, 1968],
        category: [3006032, 2649188, 2870929, 2928524, 2889236], age: [2062, 1984, 1954]
    },
    Multan: {
        revenue: 3052313, orders: "1,256", rating: "3.0",
        menus: ["Fries", "Pasta", "Burger", "Sandwich", "Pizza"],
        payment: [452, 417, 387], delivery: [430, 410, 416],
        category: [675969, 488620, 641836, 668897, 576990], age: [429, 389, 438]
    },
    Lahore: {
        revenue: 2916372, orders: "1,217", rating: "3.0",
        menus: ["Pasta", "Fries", "Sandwich", "Burger", "Pizza"],
        payment: [412, 395, 410], delivery: [409, 396, 412],
        category: [664721, 525636, 505473, 569086, 651454], age: [419, 426, 372]
    },
    Karachi: {
        revenue: 2633229, orders: "1,145", rating: "3.0",
        menus: ["Sandwich", "Pasta", "Pizza", "Burger", "Fries"],
        payment: [377, 393, 375], delivery: [412, 376, 357],
        category: [540540, 489273, 595612, 538130, 469672], age: [385, 390, 370]
    },
    Peshawar: {
        revenue: 2906686, orders: "1,195", rating: "3.0",
        menus: ["Pasta", "Sandwich", "Pizza", "Burger", "Fries"],
        payment: [402, 390, 403], delivery: [402, 399, 394],
        category: [548249, 570796, 586542, 592423, 608674], age: [402, 370, 423]
    },
    Islamabad: {
        revenue: 2835310, orders: "1,187", rating: "3.0",
        menus: ["Fries", "Pasta", "Pizza", "Burger", "Sandwich"],
        payment: [396, 407, 384], delivery: [407, 391, 389],
        category: [576552, 574862, 541464, 559986, 582444], age: [427, 409, 351]
    }
};

let revenueChart, paymentChart, deliveryChart, categoryChart, ageChart;
const cities = ['Multan', 'Lahore', 'Karachi', 'Peshawar', 'Islamabad'];
const revenues = [3052313, 2916372, 2633229, 2906686, 2835310];

const comboData = [
    { items: "Burger + Fries", percent: 85, recKey: "action_1" },
    { items: "Pizza + Pasta", percent: 72, recKey: "action_2" },
    { items: "Sandwich + Fries", percent: 68, recKey: "action_3" }
];

const menuDetailData = [
    { id: 'pasta', name: 'PASTA', image: 'pasta.jpg', rev: '2,925,553', qty: '1,222', price: '2,394', rating: '4.8', descKey: 'pasta_desc' },
    { id: 'sandwich', name: 'SANDWICH', image: 'sandwich.jpg', rev: '2,895,309', qty: '1,215', price: '2,383', rating: '4.7', descKey: 'sandwich_desc' },
    { id: 'pizza', name: 'PIZZA', image: 'pizza.jpg', rev: '2,883,673', qty: '1,202', price: '2,399', rating: '4.9', descKey: 'pizza_desc' },
    { id: 'fries', name: 'FRIES', image: 'fries.jpg', rev: '2,836,321', qty: '1,189', price: '2,385', rating: '4.6', descKey: 'fries_desc' },
    { id: 'burger', name: 'BURGER', image: 'burger.jpg', rev: '2,803,055', qty: '1,172', price: '2,392', rating: '4.8', descKey: 'burger_desc' }
];

function switchTab(tabName) {
    document.getElementById('tab-dashboard').classList.remove('active');
    document.getElementById('tab-member').classList.remove('active');
    document.getElementById('tab-menu').classList.remove('active');

    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('member-view').style.display = 'none';
    document.getElementById('menu-view').style.display = 'none';

    document.getElementById('tab-' + tabName).classList.add('active');
    document.getElementById(tabName + '-view').style.display = 'block';
}

function initCharts() {
    const t = translations[currentLang];

    // ลบกราฟเก่าทิ้งก่อนสร้างใหม่เพื่อไม่ให้ซ้อนกันตอนเปลี่ยนภาษา
    if (revenueChart) revenueChart.destroy();
    if (paymentChart) paymentChart.destroy();
    if (deliveryChart) deliveryChart.destroy();
    if (categoryChart) categoryChart.destroy();
    if (ageChart) ageChart.destroy();

    const ctxRev = document.getElementById('revenueChart').getContext('2d');
    revenueChart = new Chart(ctxRev, {
        type: 'bar',
        data: {
            labels: cities,
            datasets: [{ label: t.lbl_rev_rs, data: revenues, backgroundColor: '#d70f64', borderRadius: 10 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });

    const ctxPay = document.getElementById('paymentChart').getContext('2d');
    paymentChart = new Chart(ctxPay, {
        type: 'doughnut',
        data: {
            labels: [t.pay_cash, t.pay_card, t.pay_wallet],
            datasets: [{ data: [0,0,0], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    const ctxDel = document.getElementById('deliveryChart').getContext('2d');
    deliveryChart = new Chart(ctxDel, {
        type: 'pie',
        data: {
            labels: [t.del_success, t.del_delay, t.del_cancel],
            datasets: [{ data: [0,0,0], backgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'] }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    const ctxCat = document.getElementById('categoryChart').getContext('2d');
    categoryChart = new Chart(ctxCat, {
        type: 'bar',
        data: {
            labels: t.cat_labels,
            datasets: [{ label: t.lbl_rev_rs, data: [0,0,0,0,0], backgroundColor: '#d70f64' }]
        },
        options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });

    const ctxAge = document.getElementById('ageChart').getContext('2d');
    ageChart = new Chart(ctxAge, {
        type: 'bar',
        data: {
            labels: [t.age_teen, t.age_adult, t.age_senior],
            datasets: [{ label: t.lbl_qty_person, data: [0,0,0], backgroundColor: '#36A2EB' }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });
}

function renderMenuInsights() {
    const t = translations[currentLang];

    const galleryContainer = document.getElementById('menu-gallery');
    galleryContainer.innerHTML = menuDetailData.map(item => `
        <div class="menu-item-card" onclick="openModal('${item.id}')">
            <h4>${item.name}</h4>
        </div>
    `).join('');

    const comboList = document.getElementById('combo-list');
    comboList.innerHTML = comboData.map((combo, index) => `
        <div class="combo-card">
            <div class="combo-info">
                <div class="combo-names">${index + 1}. ${combo.items}</div>
                <div class="combo-action"><b>${t.action_lbl}</b> ${t[combo.recKey]}</div>
            </div>
            <div class="combo-percent">${combo.percent}%</div>
        </div>
    `).join('');
}

function updateDashboard(city) {
    const data = cityData[city];
    
    document.getElementById('revenue').innerText = "Rs. " + data.revenue.toLocaleString();
    document.getElementById('orders').innerText = data.orders;
    document.getElementById('rating').innerText = data.rating;

    const menuList = document.getElementById('top-menu');
    const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
    menuList.innerHTML = data.menus.map((item, index) => 
        `<li>
            <div class="medal-icon">${medals[index]}</div>
            <div>${item}</div>
         </li>`
    ).join('');

    if (revenueChart) {
        const newColors = cities.map(c => c === city ? '#FFD700' : '#d70f64');
        revenueChart.data.datasets[0].backgroundColor = (city === 'all') ? '#d70f64' : newColors;
        revenueChart.update();

        paymentChart.data.datasets[0].data = data.payment;
        paymentChart.update();

        deliveryChart.data.datasets[0].data = data.delivery;
        deliveryChart.update();

        categoryChart.data.datasets[0].data = data.category;
        categoryChart.update();

        ageChart.data.datasets[0].data = data.age;
        ageChart.update();
    }
}

function updateRestaurant(restaurant) {
    console.log("กำลังดูข้อมูลของร้าน: " + restaurant);
}

function openModal(id) {
    const item = menuDetailData.find(m => m.id === id);
    const t = translations[currentLang];
    
    if (item) {
        document.getElementById('modal-img').src = item.image;
        document.getElementById('modal-title').innerText = item.name;
        
        // สร้างข้อความ Popup ตามภาษาที่เลือก
        document.getElementById('modal-desc').innerHTML = `
            ${t[item.descKey]}<br>
            ${t.desc_rev} Rs. ${item.rev}<br>
            ${t.desc_ord} ${item.qty} ${t.desc_ord_unit}<br><br>
            <strong>🏷️ ${t.desc_price}</strong> Rs. ${item.price} / ${t.desc_price_unit}<br>
            <strong>⭐ ${t.desc_rat}</strong> ${item.rating} / 5.0
        `;
        
        document.getElementById('info-modal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('info-modal').style.display = 'none';
}

window.onload = () => {
    initCharts();
    updateDashboard('all');
    renderMenuInsights();
};