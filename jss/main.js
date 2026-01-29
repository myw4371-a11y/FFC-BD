// js/main.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { firebaseConfig } from './config.js';

// Firebase Init
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Check Login
const uid = localStorage.getItem('uid');
if (!uid) {
    window.location.href = '../index.html';
}

// 1. Load User Data (Balance & Name)
const userRef = ref(db, 'users/' + uid);
onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        document.getElementById('usernameDisplay').innerText = data.username;
        document.getElementById('balanceDisplay').innerText = data.balance;
        
        // Load Profile Pic if exists (Optional Feature)
        // if (data.profilePic && data.profilePic !== 'default') {
        //     document.getElementById('profilePic').src = data.profilePic;
        // }
    }
});

// 2. Slider Logic (Auto Slide every 4 seconds)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Start Loop
setInterval(nextSlide, 4000); // 4000ms = 4 seconds

// 3. Profile Image Upload Logic (Saved locally or logic for later)
const imgUpload = document.getElementById('imgUpload');
const profilePic = document.getElementById('profilePic');

profilePic.addEventListener('click', () => {
    imgUpload.click();
});

imgUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
            // Note: Actual upload to Firebase Storage requires paid plan or base64 string
            // For now, we just show it locally in this session
        }
        reader.readAsDataURL(file);
    }
});
