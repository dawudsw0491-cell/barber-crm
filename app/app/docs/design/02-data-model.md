# DATA MODEL DOCUMENT

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Data Model Document

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen ini mendefinisikan struktur data utama yang digunakan oleh sistem Barbershop CRM.

Dokumen ini menjadi dasar penyusunan ERD, Database Design, API Design, dan implementasi aplikasi.

---

# 3. Data Model Overview

Sistem Barbershop CRM memiliki 3 entitas utama:

1. Customer
2. Service
3. Booking

Relasi:

* Customer dapat memiliki banyak Booking
* Service dapat digunakan pada banyak Booking
* Booking hanya terkait dengan satu Customer dan satu Service

---

# 4. Entity: Customer

## Description

Menyimpan informasi pelanggan.

### Attributes

| Field         | Type     | Required | Description       |
| ------------- | -------- | -------- | ----------------- |
| customer_id   | UUID     | Yes      | Unique Identifier |
| customer_name | String   | Yes      | Nama Customer     |
| phone_number  | String   | Yes      | Nomor Telepon     |
| email         | String   | No       | Email Customer    |
| created_at    | DateTime | Yes      | Tanggal Dibuat    |
| updated_at    | DateTime | Yes      | Tanggal Update    |

---

## Business Rules

* Nomor telepon harus unik
* Nama customer wajib diisi
* Customer dapat memiliki banyak booking

---

# 5. Entity: Service

## Description

Menyimpan informasi layanan barbershop.

### Attributes

| Field            | Type     | Required | Description       |
| ---------------- | -------- | -------- | ----------------- |
| service_id       | UUID     | Yes      | Unique Identifier |
| service_name     | String   | Yes      | Nama Layanan      |
| price            | Decimal  | Yes      | Harga             |
| duration_minutes | Integer  | Yes      | Durasi            |
| created_at       | DateTime | Yes      | Tanggal Dibuat    |
| updated_at       | DateTime | Yes      | Tanggal Update    |

---

## Business Rules

* Nama layanan harus unik
* Harga lebih besar dari nol
* Durasi wajib diisi

---

# 6. Entity: Booking

## Description

Menyimpan data booking pelanggan.

### Attributes

| Field        | Type     | Required | Description        |
| ------------ | -------- | -------- | ------------------ |
| booking_id   | UUID     | Yes      | Unique Identifier  |
| customer_id  | UUID     | Yes      | Reference Customer |
| service_id   | UUID     | Yes      | Reference Service  |
| booking_date | Date     | Yes      | Tanggal Booking    |
| booking_time | Time     | Yes      | Waktu Booking      |
| status       | Enum     | Yes      | Booking Status     |
| notes        | Text     | No       | Catatan            |
| created_at   | DateTime | Yes      | Tanggal Dibuat     |
| updated_at   | DateTime | Yes      | Tanggal Update     |

---

## Status Values

* Scheduled
* In Progress
* Completed
* Cancelled

---

## Business Rules

* Booking harus memiliki customer
* Booking harus memiliki service
* Booking harus memiliki tanggal dan waktu
* Booking yang Completed tidak dapat dibatalkan

---

# 7. Relationship Model

## Customer → Booking

Relationship:

One To Many

```text
Customer (1)
      |
      |
      +-----< Booking (Many)
```

---

## Service → Booking

Relationship:

One To Many

```text
Service (1)
      |
      |
      +-----< Booking (Many)
```

---

# 8. Future Entities

Versi berikutnya dapat menambahkan:

* User
* Role
* Branch
* Payment
* Loyalty Point
* Audit Log

---

# 9. Data Governance

Data Quality:

* Completeness
* Accuracy
* Consistency

Data Retention:

* Customer Data: Permanent
* Booking History: Permanent

---

# 10. Approval

Dokumen Data Model menjadi dasar penyusunan ERD, Database Schema, API Contract, dan implementasi data layer Barbershop CRM.
