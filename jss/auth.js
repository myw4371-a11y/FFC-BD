// js/auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { firebaseConfig } from './config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// রেজিস্ট্রেশন ফাংশন
export const registerUser = async (user, pass) => {
    const fakeEmail = user + "@ffcbd.com";
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, fakeEmail, pass);
        const uid = userCredential.user.uid;
        await set(ref(db, 'users/' + uid), {
            username: user,
            balance: 0,
            password: pass,
            profilePic: "default"
        });
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// লগআউট ফাংশন
export const logoutUser = () => {
    signOut(auth).then(() => {
        localStorage.clear();
        window.location.href = '../index.html';
    });
};
