# SYSTEM ARCHITECTURE DOCUMENT

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

System Architecture Document

### Version

1.0

### Status

Draft

---

# 2. Architecture Overview

Barbershop CRM merupakan aplikasi web berbasis Next.js yang digunakan untuk mengelola customer, service, booking, dashboard, dan reporting.

Arsitektur menggunakan pendekatan:

* Layered Architecture
* Modular Design
* Component-Based UI
* JSON Data Storage (MVP)
* Future Ready Database Architecture

---

# 3. High Level Architecture

```text
+----------------------+
|      Web Browser     |
+----------+-----------+
           |
           v
+----------------------+
|      NextJS UI       |
|  Dashboard Module    |
|  Customer Module     |
|  Service Module      |
|  Booking Module      |
+----------+-----------+
           |
           v
+----------------------+
|   Application Layer  |
| Business Logic Layer |
+----------+-----------+
           |
           v
+----------------------+
|     Data Layer       |
| JSON Files (MVP)     |
+----------------------+
```

---

# 4. System Modules

## Dashboard Module

Purpose:

Menampilkan informasi operasional.

Functions:

* Total Customer
* Total Service
* Total Booking

---

## Customer Module

Purpose:

Mengelola data pelanggan.

Functions:

* Create Customer
* View Customer
* Update Customer
* Delete Customer
* Search Customer

---

## Service Module

Purpose:

Mengelola layanan.

Functions:

* Create Service
* View Service
* Update Service
* Delete Service

---

## Booking Module

Purpose:

Mengelola booking.

Functions:

* Create Booking
* View Booking
* Reschedule Booking
* Cancel Booking
* Update Status

---

## Reporting Module

Purpose:

Menyediakan laporan operasional.

Functions:

* Customer Report
* Service Report
* Booking Report

---

# 5. Technology Stack

## Frontend

* Next.js
* React
* TypeScript

## Styling

* CSS
* Tailwind CSS (Future)

## Data Storage (MVP)

* JSON Files

Files:

* customers.json
* services.json
* bookings.json

## Future Database

* PostgreSQL

---

# 6. Security Architecture

Authentication:

* Planned

Authorization:

* Planned

Roles:

* Owner
* Manager
* Barber

---

# 7. Deployment Architecture

Development Environment:

* Localhost

Future Production:

* Vercel
* PostgreSQL

---

# 8. Non Functional Considerations

Performance:

* Response < 3 seconds

Scalability:

* Support future multi-branch

Maintainability:

* Modular architecture

Usability:

* Simple UI

---

# 9. Architecture Principles

* Simplicity First
* Modular Design
* Reusable Components
* Documentation Driven Development
* SDLC Compliance

---

# 10. Approval

Dokumen ini menjadi blueprint utama pengembangan teknis Barbershop CRM.
