# System Architecture

## Project

Barbershop CRM

## Version

1.0 MVP

---

# Architecture Overview

Aplikasi menggunakan arsitektur sederhana untuk mempercepat implementasi MVP.

---

# Architecture Layer

## Presentation Layer

Tujuan:

Menampilkan antarmuka pengguna.

Teknologi:

* Next.js
* Tailwind CSS

---

## Application Layer

Tujuan:

Menangani logika bisnis.

Fungsi:

* Customer Management
* Service Management
* Booking Management
* Dashboard Calculation

---

## Data Layer

Tujuan:

Menyimpan data aplikasi.

MVP Storage:

* JSON File

Future:

* SQLite
* PostgreSQL

---

# Module Architecture

## Dashboard Module

Fungsi:

* Menampilkan KPI
* Menampilkan Ringkasan Operasional

---

## Customer Module

Fungsi:

* Customer List
* Add Customer
* Edit Customer
* Search Customer

---

## Service Module

Fungsi:

* Service List
* Add Service
* Edit Service

---

## Booking Module

Fungsi:

* Booking List
* Create Booking
* Update Status

---

# Navigation Structure

Dashboard

Customer

Service

Booking

Reports (Future)

Settings (Future)

---

# MVP Data Flow

Customer
↓
Booking
↓
Service
↓
Dashboard

---

# Deployment Architecture

Developer
↓
GitHub
↓
Vercel
↓
Production

---

# Security Principles

* Validasi Input
* Sanitasi Data
* Error Handling
* Data Consistency

---

# Scalability Roadmap

Version 1.0

JSON Storage

↓

Version 1.1

SQLite

↓

Version 2.0

PostgreSQL

↓

Version 3.0

Multi Branch Architecture

---

# Architecture Status

Approved For MVP
