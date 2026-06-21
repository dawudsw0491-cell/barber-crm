# Development Standards

## Project

Barbershop CRM

## Version

1.0 MVP

---

# Development Principles

## Simplicity First

Pilih solusi paling sederhana yang memenuhi kebutuhan bisnis.

---

## MVP First

Fokus menyelesaikan fitur MVP sebelum membuat fitur tambahan.

---

## Documentation First

Perubahan requirement harus diperbarui pada dokumentasi terlebih dahulu.

---

# Naming Convention

## Folder

Gunakan:

customer

service

booking

dashboard

---

## File

Gunakan:

kebab-case

Contoh:

customer-form.tsx

customer-table.tsx

booking-list.tsx

---

## Component

Gunakan:

PascalCase

Contoh:

CustomerForm

CustomerTable

BookingList

---

## Variable

Gunakan:

camelCase

Contoh:

customerName

bookingDate

servicePrice

---

# Git Convention

## Commit Format

docs:

Dokumentasi

---

feat:

Fitur baru

---

fix:

Perbaikan bug

---

refactor:

Perubahan struktur kode

---

chore:

Perubahan non fitur

---

## Examples

docs: update project charter

feat: create customer page

fix: booking validation

refactor: move customer service

---

# Repository Workflow

Step 1

Edit

↓

Step 2

Test

↓

Step 3

Commit

↓

Step 4

Push

---

# Folder Creation Rule

Folder baru harus:

1. Memiliki tujuan yang jelas
2. Dicatat pada folder structure
3. Tidak duplikasi fungsi

---

# Documentation Rule

Setiap perubahan besar wajib memperbarui:

* Product Backlog
* Release Plan
* Architecture

---

# Coding Rule

## Reusable First

Komponen yang digunakan lebih dari satu kali harus dipindahkan ke:

components/

---

## Single Responsibility

Satu file menangani satu tanggung jawab utama.

---

## Readability

Kode harus mudah dibaca sebelum dioptimasi.

---

# Deployment Rule

Deployment hanya dilakukan jika:

* Build berhasil
* Testing selesai
* Dokumentasi diperbarui

---

# Current Standard

Approved For MVP
