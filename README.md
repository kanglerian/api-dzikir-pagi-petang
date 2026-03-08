# 🤲 API Dzikir Pagi Petang

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Active](https://img.shields.io/badge/Status-Active-emerald.svg)]()

API sederhana berbasis Node.js untuk menyajikan data Dzikir Pagi dan Petang sesuai dengan rujukan **Hisnul Muslim**. Proyek ini dibuat untuk memudahkan pengembang aplikasi Islam dalam mengakses konten doa yang otentik.

---

## 🚀 Live Demo Aplikasi
Aplikasi yang menggunakan API ini dapat dicoba langsung di:
👉 **[http://dzikir-pagi-sore.kodelabo.com/](http://dzikir-pagi-sore.kodelabo.com/)**

---

## 🛠️ Endpoint API

Semua respons diberikan dalam format **JSON**.

### 1. Welcome Message
Memberikan informasi dasar tentang API.
- **URL:** `/`
- **Method:** `GET`

### 2. Dzikir Pagi
Mendapatkan daftar lengkap bacaan dzikir pagi.
- **URL:** `/pagi`
- **Method:** `GET`

### 3. Dzikir Petang
Mendapatkan daftar lengkap bacaan dzikir petang.
- **URL:** `/petang`
- **Method:** `GET`

---

## 📦 Struktur Data JSON
Setiap item dalam array berisi:
- `judul`: Nama bacaan dzikir.
- `arab`: Teks dalam huruf Hijaiyah.
- `latin`: Transliterasi untuk membantu pembacaan.
- `arti`: Terjemahan dalam Bahasa Indonesia.
- `ulang`: Jumlah pengulangan yang disunnahkan.

---

## 📜 Lisensi & Penggunaan

Proyek ini bersifat **Open Source** dan bebas digunakan oleh siapa saja (**FREE**). 

> [!IMPORTANT]
> **Amal Jariyah:** Silakan gunakan API ini untuk membangun aplikasi bermanfaat lainnya. Tidak perlu izin khusus, namun mencantumkan atribusi sangat dihargai sebagai bentuk dukungan.

### 👤 Author
**Lerian** - Website: [kodelabo.com](http://dzikir-pagi-sore.kodelabo.com/)
- GitHub: [@kanglerian](https://github.com/kanglerian)

---

### 🌿 Kutipan
> *"Barangsiapa yang menunjuki kepada kebaikan maka dia akan mendapatkan pahala seperti pahala orang yang mengerjakannya."* > **(HR. Muslim)**

---
