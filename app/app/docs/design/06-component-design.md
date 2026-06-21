# COMPONENT DESIGN DOCUMENT

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Component Design Document

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen ini mendefinisikan struktur komponen frontend yang digunakan dalam aplikasi Barbershop CRM.

Dokumen ini menjadi dasar implementasi React Component, UI Reusability, dan Maintainability.

---

# 3. Component Architecture

```text
App Layout
    │
    ├── Navigation
    │
    ├── Dashboard
    │      └── DashboardCard
    │
    ├── Customer
    │      ├── CustomerTable
    │      ├── CustomerForm
    │      └── CustomerSearch
    │
    ├── Service
    │      ├── ServiceTable
    │      └── ServiceForm
    │
    └── Booking
           ├── BookingTable
           └── BookingForm
```

---

# 4. Shared Components

## Navigation

Purpose:

Navigasi utama aplikasi.

Responsibilities:

* Dashboard Menu
* Customer Menu
* Service Menu
* Booking Menu

File:

```text
components/navigation.tsx
```

---

## DashboardCard

Purpose:

Menampilkan KPI dashboard.

Responsibilities:

* Label
* Value

Example:

```text
Total Customer
150
```

---

# 5. Customer Components

## CustomerTable

Purpose:

Menampilkan daftar customer.

Features:

* View Customer
* Search Customer
* Edit Customer
* Delete Customer

Props:

```text
customers[]
```

---

## CustomerForm

Purpose:

Input data customer.

Fields:

* Customer Name
* Phone Number
* Email

Actions:

* Save
* Update

---

## CustomerSearch

Purpose:

Pencarian customer.

Input:

* Name
* Phone Number

Output:

* Customer List

---

# 6. Service Components

## ServiceTable

Purpose:

Menampilkan daftar layanan.

Features:

* View Service
* Edit Service
* Delete Service

Props:

```text
services[]
```

---

## ServiceForm

Purpose:

Input data layanan.

Fields:

* Service Name
* Price
* Duration

Actions:

* Save
* Update

---

# 7. Booking Components

## BookingTable

Purpose:

Menampilkan daftar booking.

Features:

* View Booking
* Edit Booking
* Cancel Booking

Props:

```text
bookings[]
```

---

## BookingForm

Purpose:

Input booking.

Fields:

* Customer
* Service
* Date
* Time
* Notes

Actions:

* Save
* Update

---

# 8. Layout Components

## RootLayout

Purpose:

Layout utama aplikasi.

Responsibilities:

* Render Navigation
* Render Content

File:

```text
app/layout.tsx
```

---

# 9. Future Components

Planned:

* LoginForm
* UserTable
* UserForm
* RoleTable
* ReportChart
* NotificationPanel

---

# 10. Design Principles

* Reusable Component
* Single Responsibility
* Modular Structure
* Consistent UI
* Easy Maintenance

---

# 11. Approval

Dokumen Component Design menjadi dasar implementasi React Components dan struktur frontend Barbershop CRM.
