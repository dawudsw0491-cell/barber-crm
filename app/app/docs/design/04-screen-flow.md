# SCREEN FLOW DOCUMENT

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Screen Flow Design

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen ini mendefinisikan alur navigasi antar halaman dalam sistem Barbershop CRM.

Dokumen ini menjadi dasar desain UI/UX, routing NextJS, dan implementasi frontend.

---

# 3. Application Navigation

```text
Dashboard
    │
    ├── Customer
    │      ├── Customer List
    │      ├── Add Customer
    │      ├── Edit Customer
    │      └── Customer Detail
    │
    ├── Service
    │      ├── Service List
    │      ├── Add Service
    │      ├── Edit Service
    │      └── Service Detail
    │
    └── Booking
           ├── Booking List
           ├── Create Booking
           ├── Edit Booking
           └── Booking Detail
```

---

# 4. Dashboard Screen

Screen ID:

SCR-DASH-001

Purpose:

Menampilkan ringkasan operasional.

Components:

* Navigation Menu
* Total Customer
* Total Service
* Total Booking

Navigation:

```text
Dashboard
   ↓
Customer
Service
Booking
```

---

# 5. Customer Screen Flow

## Customer List

Screen ID:

SCR-CUST-001

Functions:

* View Customer
* Search Customer
* Add Customer
* Edit Customer
* Delete Customer

Flow:

```text
Customer List
      │
      ├── Add Customer
      │
      ├── Edit Customer
      │
      └── Customer Detail
```

---

## Add Customer

Screen ID:

SCR-CUST-002

Fields:

* Customer Name
* Phone Number
* Email

Action:

* Save
* Cancel

---

## Edit Customer

Screen ID:

SCR-CUST-003

Fields:

* Customer Name
* Phone Number
* Email

Action:

* Update
* Cancel

---

# 6. Service Screen Flow

## Service List

Screen ID:

SCR-SRV-001

Functions:

* View Service
* Add Service
* Edit Service
* Delete Service

Flow:

```text
Service List
      │
      ├── Add Service
      │
      ├── Edit Service
      │
      └── Service Detail
```

---

## Add Service

Screen ID:

SCR-SRV-002

Fields:

* Service Name
* Price
* Duration

Action:

* Save
* Cancel

---

## Edit Service

Screen ID:

SCR-SRV-003

Fields:

* Service Name
* Price
* Duration

Action:

* Update
* Cancel

---

# 7. Booking Screen Flow

## Booking List

Screen ID:

SCR-BKG-001

Functions:

* View Booking
* Create Booking
* Edit Booking
* Cancel Booking

Flow:

```text
Booking List
      │
      ├── Create Booking
      │
      ├── Edit Booking
      │
      └── Booking Detail
```

---

## Create Booking

Screen ID:

SCR-BKG-002

Fields:

* Customer
* Service
* Date
* Time
* Notes

Action:

* Save
* Cancel

---

## Edit Booking

Screen ID:

SCR-BKG-003

Fields:

* Customer
* Service
* Date
* Time
* Status

Action:

* Update
* Cancel

---

# 8. Future Screens

Planned for Future Release:

* Login Screen
* User Management
* Role Management
* Reporting Dashboard
* Branch Management

---

# 9. Navigation Rules

### NR-001

Semua halaman harus dapat kembali ke Dashboard.

### NR-002

Navigasi utama harus selalu tampil.

### NR-003

Pengguna dapat berpindah modul tanpa kehilangan sesi.

---

# 10. Screen Inventory

| Screen ID    | Screen Name    |
| ------------ | -------------- |
| SCR-DASH-001 | Dashboard      |
| SCR-CUST-001 | Customer List  |
| SCR-CUST-002 | Add Customer   |
| SCR-CUST-003 | Edit Customer  |
| SCR-SRV-001  | Service List   |
| SCR-SRV-002  | Add Service    |
| SCR-SRV-003  | Edit Service   |
| SCR-BKG-001  | Booking List   |
| SCR-BKG-002  | Create Booking |
| SCR-BKG-003  | Edit Booking   |

---

# 11. Approval

Dokumen Screen Flow menjadi dasar implementasi UI, routing NextJS, navigasi aplikasi, dan pengembangan frontend Barbershop CRM.
