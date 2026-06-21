# DATA DICTIONARY

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Data Dictionary

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen ini mendefinisikan seluruh atribut data yang digunakan dalam sistem Barbershop CRM.

Dokumen ini menjadi referensi resmi untuk:

* Database Design
* JSON Structure
* API Design
* UI Form Design
* Validation Rules
* Testing

---

# 3. Customer Entity

## Table: Customer

| Field Name    | Data Type | Length | Required | Description                |
| ------------- | --------- | ------ | -------- | -------------------------- |
| customer_id   | UUID      | 36     | Yes      | Unique Customer Identifier |
| customer_name | String    | 100    | Yes      | Nama Customer              |
| phone_number  | String    | 20     | Yes      | Nomor Telepon Customer     |
| email         | String    | 100    | No       | Email Customer             |
| created_at    | DateTime  | -      | Yes      | Tanggal Pembuatan          |
| updated_at    | DateTime  | -      | Yes      | Tanggal Perubahan          |

---

## Validation Rules

### customer_name

* Wajib diisi
* Minimum 3 karakter
* Maksimum 100 karakter

### phone_number

* Wajib diisi
* Harus unik
* Format nomor telepon valid

### email

* Opsional
* Jika diisi harus valid

---

# 4. Service Entity

## Table: Service

| Field Name       | Data Type | Length | Required | Description               |
| ---------------- | --------- | ------ | -------- | ------------------------- |
| service_id       | UUID      | 36     | Yes      | Unique Service Identifier |
| service_name     | String    | 100    | Yes      | Nama Layanan              |
| price            | Decimal   | 18,2   | Yes      | Harga Layanan             |
| duration_minutes | Integer   | -      | Yes      | Durasi Layanan            |
| created_at       | DateTime  | -      | Yes      | Tanggal Pembuatan         |
| updated_at       | DateTime  | -      | Yes      | Tanggal Perubahan         |

---

## Validation Rules

### service_name

* Wajib diisi
* Harus unik

### price

* Wajib diisi
* Lebih besar dari 0

### duration_minutes

* Wajib diisi
* Lebih besar dari 0

---

# 5. Booking Entity

## Table: Booking

| Field Name   | Data Type | Length | Required | Description               |
| ------------ | --------- | ------ | -------- | ------------------------- |
| booking_id   | UUID      | 36     | Yes      | Unique Booking Identifier |
| customer_id  | UUID      | 36     | Yes      | Referensi Customer        |
| service_id   | UUID      | 36     | Yes      | Referensi Service         |
| booking_date | Date      | -      | Yes      | Tanggal Booking           |
| booking_time | Time      | -      | Yes      | Waktu Booking             |
| status       | Enum      | -      | Yes      | Status Booking            |
| notes        | Text      | 1000   | No       | Catatan Tambahan          |
| created_at   | DateTime  | -      | Yes      | Tanggal Pembuatan         |
| updated_at   | DateTime  | -      | Yes      | Tanggal Perubahan         |

---

## Status Values

```text
Scheduled
In Progress
Completed
Cancelled
```

---

## Validation Rules

### booking_date

* Wajib diisi
* Tidak boleh kosong

### booking_time

* Wajib diisi
* Format waktu valid

### status

* Wajib diisi
* Harus sesuai enum

---

# 6. Naming Convention

## Entity

Format:

```text
PascalCase
```

Contoh:

```text
Customer
Service
Booking
```

---

## Field

Format:

```text
snake_case
```

Contoh:

```text
customer_id
service_name
booking_date
```

---

# 7. Data Ownership

| Entity    | Owner   |
| --------- | ------- |
| Customer  | Manager |
| Service   | Manager |
| Booking   | Manager |
| Dashboard | Owner   |

---

# 8. Data Quality Rules

* Completeness
* Accuracy
* Consistency
* Uniqueness
* Validity

---

# 9. Approval

Dokumen Data Dictionary menjadi referensi resmi seluruh atribut data pada Barbershop CRM.
