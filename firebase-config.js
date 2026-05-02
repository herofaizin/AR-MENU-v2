/**
 * ╔══════════════════════════════════════════════════════╗
 * ║  FIREBASE CONFIG — SINGLE SOURCE OF TRUTH           ║
 * ║  Edit file ini SEKALI, semua device otomatis ikut   ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * Cara pakai:
 * 1. Isi nilai di bawah dengan config Firebase project lo
 * 2. Upload file ini ke hosting (taruh di root folder, sama level dengan index.html)
 * 3. Semua halaman (index.html, kasir.html, dll) akan fetch config dari sini
 * 4. Selesai — tidak perlu input ulang di device manapun
 *
 * Dimana ambil nilai ini?
 * Firebase Console → Project Settings → General → Your Apps → SDK setup → Config
 */

window.__FIREBASE_CONFIG__ = {
  apiKey:            "AIzaSyAhrIAagStYvSZlOVZZqKxk3PqZ_RYJ9J4",
  authDomain:        "ar-menu-2d9b3.firebaseapp.com",
  projectId:         "ar-menu-2d9b3",
  storageBucket:     "ar-menu-2d9b3.firebasestorage.app",
  messagingSenderId: "501643281791",
  appId:             "1:501643281791:web:8e9e8c8e562e4e3b24c64a"
};

/**
 * Konfigurasi aplikasi (nama restoran, slug, dll)
 * Ini terpisah dari Firebase config — bisa beda per klien
 */
window.__APP_CONFIG__ = {
  restaurantSlug: "warung-nusantara",   // slug unik per klien
  restaurantName: "Warung Nusantara",   // nama tampilan
  currency:       "Rp",
  timezone:       "Asia/Jakarta"
};
