import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCdrWLGf5ZuG9-Z5uV-8aVGdAOwl86uJc",
  authDomain: "mystore-347f6.firebaseapp.com",
  projectId: "mystore-347f6",
  storageBucket: "mystore-347f6.firebasestorage.app",
  messagingSenderId: "62104269268",
  appId: "1:62104269268:web:92ff8798aab1e8760f2641",
  measurementId: "G-SKB43LDPXJ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const email = document.getElementById("login-email");
const password = document.getElementById("login-password");
const submit = document.getElementById("submit-login");

submit.addEventListener("click", function (event) {
  // Lấy giá trị từ các ô input
  const emailValue = email.value;
  const passwordValue = password.value;

  // So sánh giá trị
  if (emailValue === "admin@gmail.com" && passwordValue === "admin") {
    window.location.href = "http://127.0.0.1:5500/admin.html";
    alert("Đăng nhập thanh cong");
  } else {
    alert("Đăng nhập sai. Vui lòng nhập lại.");
  }
});
