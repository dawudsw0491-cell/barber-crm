# BPMN CUSTOMER MANAGEMENT PROCESS

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Business Process Model and Notation (BPMN)

### Process Name

Customer Management Process

### Version

1.0

### Status

Draft

---

# 2. Process Objective

Mendefinisikan proses bisnis pengelolaan data pelanggan mulai dari pendaftaran customer hingga pemeliharaan data customer.

---

# 3. Process Scope

### Start Event

Manager menerima data customer baru atau permintaan perubahan data customer.

### End Event

Data customer tersimpan dan siap digunakan oleh modul booking dan reporting.

---

# 4. Process Actors

| Actor    | Role                                     |
| -------- | ---------------------------------------- |
| Customer | Memberikan informasi customer            |
| Manager  | Mengelola data customer                  |
| System   | Menyimpan dan menyediakan data customer  |
| Owner    | Menggunakan data customer untuk analisis |

---

# 5. BPMN Narrative

## Main Process Flow

### Step 1

Manager menerima informasi customer.

Input:

* Nama
* Nomor Telepon
* Email (Opsional)

---

### Step 2

Manager melakukan validasi data customer.

Decision:

Apakah data customer lengkap?

### YES

Lanjut ke Step 3

### NO

Kembali ke customer untuk melengkapi data.

---

### Step 3

Manager memeriksa apakah customer sudah terdaftar.

Decision:

Apakah customer sudah ada?

### YES

Lanjut ke Step 4

### NO

Lanjut ke Step 5

---

### Step 4

Manager memperbarui data customer.

Output:

* Updated Customer Record

End Process

---

### Step 5

Manager membuat data customer baru.

Output:

* Customer Record

---

### Step 6

System menyimpan data customer.

Output:

* Customer ID
* Customer Record

---

### Step 7

System menampilkan data customer pada daftar customer.

Output:

* Customer List

---

### End Event

Data customer aktif dan dapat digunakan pada proses booking.

---

# 6. Alternative Flow

## AF-01 Search Customer

Manager mencari customer berdasarkan:

* Nama
* Nomor Telepon

Output:

* Customer Search Result

---

## AF-02 Delete Customer

Manager menghapus data customer.

Decision:

Apakah customer memiliki booking aktif?

### YES

Penghapusan ditolak.

### NO

Customer dapat dihapus.

---

# 7. Business Rules

### BR-CUST-001

Nomor telepon customer harus unik.

### BR-CUST-002

Nama customer wajib diisi.

### BR-CUST-003

Customer tidak boleh memiliki data duplikat.

### BR-CUST-004

Customer dengan booking aktif tidak dapat dihapus.

---

# 8. Inputs

* Customer Information
* Customer Update Request
* Search Criteria

---

# 9. Outputs

* Customer Record
* Customer List
* Customer Search Result
* Updated Customer Record

---

# 10. KPI

| KPI                        | Target      |
| -------------------------- | ----------- |
| Customer Registration Time | < 3 Minutes |
| Data Accuracy              | > 95%       |
| Duplicate Customer Rate    | < 1%        |

---

# 11. Approval

Dokumen BPMN Customer Management menjadi dasar desain Customer Module, Customer CRUD, Customer History, dan Data Model Customer pada Barbershop CRM.
