# NON-FUNCTIONAL REQUIREMENTS SPECIFICATION (NFR)

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Non-Functional Requirements Specification

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen ini mendefinisikan kebutuhan non-fungsional yang harus dipenuhi oleh sistem Barbershop CRM untuk menjamin kualitas sistem sesuai karakteristik ISO/IEC 25010.

---

# 3. Performance Requirements

## NFR-PERF-001

Sistem harus dapat menampilkan halaman dashboard dalam waktu kurang dari 3 detik pada kondisi normal.

Priority:
High

---

## NFR-PERF-002

Sistem harus dapat memproses pencarian customer dalam waktu kurang dari 2 detik.

Priority:
Medium

---

## NFR-PERF-003

Sistem harus mampu menangani minimal 20 pengguna aktif secara bersamaan untuk skala MVP.

Priority:
Medium

---

# 4. Availability Requirements

## NFR-AVL-001

Sistem harus tersedia minimal 95% selama jam operasional.

Priority:
Medium

---

# 5. Security Requirements

## NFR-SEC-001

Akses ke sistem harus memerlukan autentikasi pengguna.

Priority:
High

---

## NFR-SEC-002

Data harus terlindungi dari akses tidak sah.

Priority:
High

---

## NFR-SEC-003

Aktivitas penting harus dapat ditelusuri melalui audit log pada versi berikutnya.

Priority:
Low

---

# 6. Usability Requirements

## NFR-USA-001

Antarmuka harus mudah digunakan oleh pengguna non-teknis.

Priority:
High

---

## NFR-USA-002

Navigasi harus konsisten pada seluruh modul.

Priority:
High

---

## NFR-USA-003

Pengguna harus dapat menyelesaikan proses utama tanpa pelatihan teknis khusus.

Priority:
Medium

---

# 7. Reliability Requirements

## NFR-REL-001

Data customer, service, dan booking harus tersimpan secara konsisten.

Priority:
High

---

## NFR-REL-002

Sistem harus mampu menangani kesalahan input pengguna dengan pesan yang jelas.

Priority:
Medium

---

# 8. Maintainability Requirements

## NFR-MNT-001

Kode harus mengikuti standar pengembangan yang ditetapkan proyek.

Priority:
High

---

## NFR-MNT-002

Arsitektur sistem harus mendukung pengembangan modul baru di masa depan.

Priority:
High

---

## NFR-MNT-003

Dokumentasi SDLC harus diperbarui setiap terjadi perubahan signifikan.

Priority:
High

---

# 9. Scalability Requirements

## NFR-SCL-001

Sistem harus dapat dikembangkan untuk mendukung multi-branch pada versi berikutnya.

Priority:
Medium

---

## NFR-SCL-002

Struktur data harus mendukung pertumbuhan jumlah customer, service, dan booking.

Priority:
Medium

---

# 10. Compatibility Requirements

## NFR-CMP-001

Sistem harus dapat berjalan pada browser modern:

* Chrome
* Edge
* Safari
* Firefox

Priority:
Medium

---

# 11. Quality Attribute Mapping

| Quality Attribute | Requirement |
| ----------------- | ----------- |
| Performance       | NFR-PERF    |
| Availability      | NFR-AVL     |
| Security          | NFR-SEC     |
| Usability         | NFR-USA     |
| Reliability       | NFR-REL     |
| Maintainability   | NFR-MNT     |
| Scalability       | NFR-SCL     |
| Compatibility     | NFR-CMP     |

---

# 12. Approval

Dokumen ini menjadi dasar evaluasi kualitas sistem, desain arsitektur, pengujian non-fungsional, dan implementasi Barbershop CRM.
