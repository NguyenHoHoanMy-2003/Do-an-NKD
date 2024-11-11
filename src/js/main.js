// main.js
const {ref, onValue } = require("firebase/database");
const { db } = require("./src/js/firebaseConfig.js");

// Hàm để hiển thị cảnh báo
function showAlert(type, message) {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", type);
    alertDiv.innerHTML = `<h3>${type.replace(/-/g, ' ')}!</h3><p>${message}</p>`;
    document.querySelector('.alerts-section').appendChild(alertDiv);
}

// Hàm để lấy và hiển thị dữ liệu từ Realtime Database
function fetchPetData() {
    const petDataRef = ref(db, 'petData'); // Đảm bảo 'petData' đúng là khóa bạn đã đặt trong Database

    onValue(petDataRef, (snapshot) => {
        const petData = snapshot.val();

        if (petData) {
            // Hiển thị dữ liệu lên trang web
            document.getElementById('heartRate').textContent = `${petData.heartRate} BPM`;
            document.getElementById('temperature').textContent = `${petData.temperature}°C`;

            // Kiểm tra và hiển thị cảnh báo nếu nhịp tim cao
            if (petData.heartRate > 120) {
                showAlert("high-heart-rate", `Your pet's heart rate has reached ${petData.heartRate} BPM.`);
            }
        } else {
            console.error("No data found in Realtime Database!");
        }
    }, (error) => {
        console.error("Error fetching pet data:", error);
    });
}

// Gọi hàm fetchPetData khi trang đã tải xong
document.addEventListener("DOMContentLoaded", () => {
    fetchPetData();
});
