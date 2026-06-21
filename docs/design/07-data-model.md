# Data Model

## Project

Barbershop CRM

## Version

1.0 MVP

---

# Data Model Overview

MVP menggunakan 3 entitas utama:

1. Customer
2. Service
3. Booking

---

# Entity Relationship

Customer

1 Customer

↓

Many Booking

↓

1 Service

---

# Customer Entity

## Description

Menyimpan data pelanggan.

---

## Attributes

| Field     | Type   | Required |
| --------- | ------ | -------- |
| id        | Number | Yes      |
| name      | String | Yes      |
| phone     | String | Yes      |
| email     | String | No       |
| createdAt | Date   | Yes      |

---

## Example

```json
{
  "id": 1,
  "name": "Dawud",
  "phone": "08123456789",
  "email": "dawud@email.com",
  "createdAt": "2026-01-01"
}
```

---

# Service Entity

## Description

Menyimpan daftar layanan barbershop.

---

## Attributes

| Field    | Type    | Required |
| -------- | ------- | -------- |
| id       | Number  | Yes      |
| name     | String  | Yes      |
| price    | Number  | Yes      |
| duration | Number  | Yes      |
| active   | Boolean | Yes      |

---

## Example

```json
{
  "id": 1,
  "name": "Haircut",
  "price": 50000,
  "duration": 30,
  "active": true
}
```

---

# Booking Entity

## Description

Menyimpan transaksi booking.

---

## Attributes

| Field       | Type   | Required |
| ----------- | ------ | -------- |
| id          | Number | Yes      |
| customerId  | Number | Yes      |
| serviceId   | Number | Yes      |
| bookingDate | Date   | Yes      |
| status      | String | Yes      |
| createdAt   | Date   | Yes      |

---

## Booking Status

Allowed Values:

* Pending
* Confirmed
* Completed
* Cancelled

---

## Example

```json
{
  "id": 1,
  "customerId": 1,
  "serviceId": 1,
  "bookingDate": "2026-01-01 10:00",
  "status": "Pending",
  "createdAt": "2026-01-01"
}
```

---

# Relationship

## Customer → Booking

One To Many

1 Customer dapat memiliki banyak Booking.

---

## Service → Booking

One To Many

1 Service dapat digunakan oleh banyak Booking.

---

# MVP Storage Structure

data/

customers.json

services.json

bookings.json

---

# Future Database Mapping

Customer
→ customers table

Service
→ services table

Booking
→ bookings table

---

# Data Model Status

Approved For MVP
