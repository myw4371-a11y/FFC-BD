// js/config.js
// FFC-BD Configuration File

const firebaseConfig = {
    apiKey: "AIzaSyBlljkD4UEqNGY2N5_zkEL_r9b50HVkwKA",
    authDomain: "ffc-bd.firebaseapp.com",
    projectId: "ffc-bd",
    storageBucket: "ffc-bd.firebasestorage.app",
    messagingSenderId: "533178061001",
    appId: "1:533178061001:web:37517e33f9594290d2bd18",
    measurementId: "G-NZN55GC3KX"
};

const telegramConfig = {
    botToken: "8526863710:AAGQMMjFuHoWfuN5Is9lF1I4Wcf8Y0nTWXo",
    chatId: "7068444019"
};

const adminConfig = {
    username: "admin",
    password: "ffcbd2025", // Admin Login Password
    contact: {
        whatsapp: "+8801xxxxxxxxx", // Default, Admin can change later
        telegram: "@admin_ffcbd"
    }
};

// Exporting variables for use in other files
export { firebaseConfig, telegramConfig, adminConfig };

