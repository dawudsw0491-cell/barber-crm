# Folder Structure

## Project

Barbershop CRM

## Version

1.0 MVP

---

# Development Structure

barber-crm/

├── docs/
│
├── app/
│
├── components/
│
├── data/
│
├── public/
│
├── lib/
│
├── README.md
│
└── AGENTS.md

---

# Folder Details

## docs/

Dokumentasi proyek.

Contents:

* Project Charter
* BRD
* Roadmap
* Architecture
* Data Model
* UI/UX
* Test Plan
* Deployment Plan

---

## app/

Halaman aplikasi.

Structure:

app/

├── page.tsx
│
├── customer/
│   └── page.tsx
│
├── service/
│   └── page.tsx
│
└── booking/
└── page.tsx

---

## components/

Reusable UI Components.

Structure:

components/

├── Header.tsx
├── Sidebar.tsx
├── Card.tsx
├── Table.tsx
└── Form.tsx

---

## data/

Penyimpanan data MVP.

Structure:

data/

├── customers.json
├── services.json
└── bookings.json

---

## public/

Asset publik.

Structure:

public/

├── images/
├── icons/
└── logo/

---

## lib/

Business Logic.

Structure:

lib/

├── customer.js
├── service.js
└── booking.js

---

# MVP Data Strategy

Version 1.0

Storage:

JSON File

Location:

data/

---

# Future Structure

Version 2.0

Database:

PostgreSQL

ORM:

Prisma

---

# Development Rule

Folder baru harus ditambahkan ke dokumen ini sebelum digunakan dalam project.

---

# Folder Structure Status

Approved For MVP
