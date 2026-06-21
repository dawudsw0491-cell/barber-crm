# ENTITY RELATIONSHIP DIAGRAM (ERD)

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Entity Relationship Diagram (ERD)

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen ini mendefinisikan hubungan antar entitas utama dalam Barbershop CRM.

ERD menjadi dasar perancangan database, API, data validation, dan implementasi aplikasi.

---

# 3. Entity Overview

Entitas utama:

1. Customer
2. Service
3. Booking

---

# 4. Conceptual ERD

```text
+------------------+
|     CUSTOMER     |
+------------------+
| customer_id (PK) |
| customer_name    |
| phone_number     |
| email            |
| created_at       |
| updated_at       |
+------------------+
         |
         |
         | 1
         |
         |------<
                 N
+------------------+
|     BOOKING      |
+------------------+
| booking_id (PK)  |
| customer_id (FK) |
| service_id (FK)  |
| booking_date     |
| booking_time     |
| status           |
| notes            |
| created_at       |
| updated_at       |
+------------------+
                 N
         >------|
         |
         | 1
         |
+------------------+
|     SERVICE      |
+------------------+
| service_id (PK)  |
| service_name     |
| price            |
| duration_minutes |
| created_at       |
| updated_at       |
+------------------+
```

---

# 5. Relationship Definition

## Customer → Booking

Relationship Type:

One To Many

Description:

Satu customer dapat memiliki banyak booking.

Cardinality:

```text
Customer (1)
      |
      +------< Booking (N)
```

---

## Service → Booking

Relationship Type:

One To Many

Description:

Satu layanan dapat digunakan pada banyak booking.

Cardinality:

```text
Service (1)
      |
      +------< Booking (N)
```

---

# 6. Primary Keys

## Customer

```text
customer_id
```

---

## Service

```text
service_id
```

---

## Booking

```text
booking_id
```

---

# 7. Foreign Keys

## Booking.customer_id

Reference:

```text
Customer.customer_id
```

---

## Booking.service_id

Reference:

```text
Service.service_id
```

---

# 8. Integrity Rules

### IR-001

Booking wajib memiliki customer yang valid.

---

### IR-002

Booking wajib memiliki service yang valid.

---

### IR-003

Customer tidak boleh memiliki customer_id duplikat.

---

### IR-004

Service tidak boleh memiliki service_id duplikat.

---

### IR-005

Booking tidak boleh memiliki booking_id duplikat.

---

# 9. Future ERD Extension

Entitas yang direncanakan pada versi berikutnya:

### User

* user_id
* username
* password

### Role

* role_id
* role_name

### Branch

* branch_id
* branch_name

### Payment

* payment_id
* booking_id

### Audit Log

* log_id
* activity

---

# 10. Database Migration Roadmap

## MVP

Storage:

* customers.json
* services.json
* bookings.json

---

## Version 2

Database:

* PostgreSQL

---

## Version 3

Enterprise Features:

* Multi Branch
* Role Management
* Audit Trail

---

# 11. Approval

Dokumen ERD menjadi dasar pembuatan database schema, repository layer, API layer, dan implementasi persistence pada Barbershop CRM.
