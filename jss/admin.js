// js/admin.js
import { getDatabase, ref, push, update, remove, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// নতুন ম্যাচ অ্যাড করা
export const createMatch = (db, type, matchData) => {
    return push(ref(db, 'tournaments/' + type), matchData);
};

// ইউজার ব্যালেন্স আপডেট করা
export const setUserBalance = (db, uid, amount) => {
    return update(ref(db, 'users/' + uid), { balance: amount });
};

// ম্যাচ ডিলিট করা
export const removeMatch = (db, type, id) => {
    return remove(ref(db, `tournaments/${type}/${id}`));
};

// সেটিংস আপডেট করা
export const updateSettings = (db, data) => {
    return update(ref(db, 'adminInfo'), data);
};
