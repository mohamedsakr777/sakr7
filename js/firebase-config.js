// 1. استدعاء أدوات فايربيز
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set, get, child, update, remove } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// 2. مفاتيح الإمبراطورية الخاصة بيك
const firebaseConfig = {
  apiKey: "AIzaSyC0eaAz23LDPwI_-zXMOL4U_QOFbLqVTX0",
  authDomain: "sakr-d12dc.firebaseapp.com",
  databaseURL: "https://sakr-d12dc-default-rtdb.firebaseio.com",
  projectId: "sakr-d12dc",
  storageBucket: "sakr-d12dc.firebasestorage.app",
  messagingSenderId: "874423050089",
  appId: "1:874423050089:web:b25dd95e5a1f7c3bd867f8",
  measurementId: "G-RHBY72DHE7"
};

// 3. تشغيل الخزنة
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 4. تصدير الأدوات عشان باقي صفحات التطبيق تستخدمها
export { database, ref, set, get, child, update, remove };