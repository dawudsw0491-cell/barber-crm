# BPMN SERVICE MANAGEMENT PROCESS

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Business Process Model and Notation (BPMN)

### Process Name

Service Management Process

### Version

1.0

### Status

Draft

---

# 2. Process Objective

Mendefinisikan proses bisnis pengelolaan layanan barbershop mulai dari pembuatan layanan hingga pemeliharaan informasi layanan.

---

# 3. Process Scope

### Start Event

Manager menambahkan atau memperbarui layanan.

### End Event

Data layanan tersimpan dan tersedia untuk proses booking.

---

# 4. Process Actors

| Actor    | Role                   |
| -------- | ---------------------- |
| Manager  | Mengelola layanan      |
| Barber   | Menggunakan layanan    |
| System   | Menyimpan data layanan |
| Customer | Memilih layanan        |

---

# 5. BPMN Narrative

## Main Process Flow

### Step 1

Manager mengidentifikasi kebutuhan layanan baru.

Input:

* Nama Layanan
* Harga
* Durasi

---

### Step 2

Manager mengisi informasi layanan.

Output:

* Service Information

---

### Step 3

Manager melakukan validasi data layanan.

Decision:

Apakah data layanan lengkap?

### YES

Lanjut ke Step 4

### NO

Perbaiki data layanan.

---

### Step 4

System memeriksa apakah layanan sudah ada.

Decision:

Apakah layanan sudah terdaftar?

### YES

Lanjut ke Step 5

### NO

Lanjut ke Step 6

---

### Step 5

Manager memperbarui layanan.

Output:

* Updated Service Record

End Process

---

### Step 6

Manager membuat layanan baru.

Output:

* New Service Record

---

### Step 7

System menyimpan data layanan.

Output:

* Service ID
* Service Record

---

### Step 8

System menampilkan layanan pada daftar layanan.

Output:

* Service List

---

### End Event

Layanan tersedia untuk digunakan pada proses booking.

---

# 6. Alternative Flow

## AF-01 Search Service

Manager mencari layanan berdasarkan nama layanan.

Output:

* Service Search Result

---

## AF-02 Delete Service

Manager menghapus layanan.

Decision:

Apakah layanan sudah digunakan pada booking?

### YES

Penghapusan ditolak.

### NO

Layanan dapat dihapus.

---

# 7. Business Rules

### BR-SRV-001

Nama layanan harus unik.

### BR-SRV-002

Harga layanan harus lebih besar dari nol.

### BR-SRV-003

Durasi layanan wajib diisi.

### BR-SRV-004

Layanan yang digunakan pada booking tidak dapat dihapus.

---

# 8. Inputs

* Service Information
* Service Update Request
* Search Criteria

---

# 9. Outputs

* Service Record
* Service List
* Service Search Result
* Updated Service Record

---

# 10. KPI

| KPI                   | Target      |
| --------------------- | ----------- |
| Service Creation Time | < 3 Minutes |
| Service Data Accuracy | > 95%       |
| Service Availability  | 100%        |

---

# 11. Approval

Dokumen BPMN Service Management menjadi dasar desain Service Module, Service Master Data, Pricing Management, dan Data Model Service pada Barbershop CRM.
