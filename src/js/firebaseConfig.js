// firebaseConfig.js
const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
 // sử dụng Firestore làm database

// Cấu hình Firebase từ Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBwQP1xZCTcZG8GkeafszZE7hZ8PHudBBI",
  authDomain: "test-336.firebaseapp.com",
  databaseURL: "https://test-336-default-rtdb.firebaseio.com",
  projectId: "test-336",
  storageBucket: "test-336.firebasestorage.app",
  messagingSenderId: "76561015598",
  appId: "1:76561015598:web:df869fa3f8eb42db74d0bf",
  measurementId: "G-536WWVCQN9"
};

// Khởi tạo Firebase và Firestore
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
module.exports = {app, db};

