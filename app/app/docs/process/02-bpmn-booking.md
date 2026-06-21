# BPMN BOOKING PROCESS

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Business Process Model and Notation (BPMN)

### Process Name

Booking Management Process

### Version

1.0

### Status

Draft

---

# 2. Process Objective

Mendefinisikan proses bisnis booking layanan pelanggan mulai dari permintaan booking hingga penyelesaian layanan.

---

# 3. Process Scope

### Start Event

Customer meminta booking layanan.

### End Event

Booking selesai atau dibatalkan.

---

# 4. Process Actors

| Actor    | Role                           |
| -------- | ------------------------------ |
| Customer | Meminta layanan                |
| Manager  | Mengelola booking              |
| Barber   | Melaksanakan layanan           |
| System   | Menyimpan dan menampilkan data |

---

# 5. BPMN Narrative

## Process Flow

### Step 1

Customer mengajukan permintaan booking.

Output:

* Booking Request

---

### Step 2

Manager menerima permintaan booking.

Decision:

Apakah customer sudah terdaftar?

### YES

Lanjut ke Step 4

### NO

Lanjut ke Step 3

---

### Step 3

Manager membuat data customer baru.

Output:

* Customer Record

---

### Step 4

Manager memilih layanan yang diminta.

Input:

* Service Data

Output:

* Selected Service

---

### Step 5

Manager menentukan jadwal booking.

Input:

* Available Schedule

Output:

* Booking Schedule

---

### Step 6

System membuat booking.

Output:

* Booking Record
* Booking ID

---

### Step 7

Barber melihat jadwal booking.

Output:

* Booking Queue

---

### Step 8

Pada hari layanan, barber memulai pelayanan.

Status:

IN PROGRESS

---

### Step 9

Setelah layanan selesai.

Status:

COMPLETED

---

### Step 10

System memperbarui status booking.

Output:

* Updated Booking Status

---

### End Event

Booking selesai dan tersimpan pada sistem.

---

# 6. Alternative Flow

## AF-01 Reschedule Booking

Manager mengubah jadwal booking.

Output:

* Updated Schedule

---

## AF-02 Cancel Booking

Manager membatalkan booking.

Status:

CANCELLED

Output:

* Cancellation Record

---

# 7. Business Rules

### BR-001

Customer harus memiliki data customer sebelum booking dibuat.

### BR-002

Booking harus memiliki layanan yang valid.

### BR-003

Status booking hanya boleh:

* Scheduled
* In Progress
* Completed
* Cancelled

### BR-004

Booking yang selesai tidak dapat dibatalkan.

---

# 8. Inputs

* Customer Data
* Service Data
* Booking Request
* Schedule Information

---

# 9. Outputs

* Booking Record
* Booking Status
* Booking History

---

# 10. KPI

| KPI                    | Target      |
| ---------------------- | ----------- |
| Booking Creation Time  | < 5 Minutes |
| Booking Accuracy       | > 95%       |
| Completed Booking Rate | > 90%       |

---

# 11. Approval

Dokumen BPMN Booking menjadi dasar desain sistem, screen flow, database design, dan implementasi modul booking pada Barbershop CRM.
