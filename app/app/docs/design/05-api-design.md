# API DESIGN DOCUMENT

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

API Design Specification

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen ini mendefinisikan rancangan API untuk mendukung integrasi antara User Interface, Business Logic, dan Data Layer.

Pada fase MVP sistem masih menggunakan JSON File Storage, namun desain API disiapkan agar mudah dimigrasikan ke PostgreSQL pada versi berikutnya.

---

# 3. API Architecture

Client:

* NextJS Frontend

Server:

* NextJS Route Handler

Data Source:

* JSON Files

Future:

* PostgreSQL Database

---

# 4. Customer API

## GET /api/customers

Purpose:

Mengambil seluruh data customer.

Response:

```json
[
  {
    "customer_id": "CUST001",
    "customer_name": "John Doe",
    "phone_number": "08123456789",
    "email": "john@email.com"
  }
]
```

---

## GET /api/customers/{id}

Purpose:

Mengambil detail customer.

---

## POST /api/customers

Purpose:

Membuat customer baru.

Request:

```json
{
  "customer_name": "John Doe",
  "phone_number": "08123456789",
  "email": "john@email.com"
}
```

---

## PUT /api/customers/{id}

Purpose:

Mengubah customer.

---

## DELETE /api/customers/{id}

Purpose:

Menghapus customer.

---

# 5. Service API

## GET /api/services

Purpose:

Mengambil daftar layanan.

---

## GET /api/services/{id}

Purpose:

Mengambil detail layanan.

---

## POST /api/services

Purpose:

Membuat layanan baru.

Request:

```json
{
  "service_name": "Haircut",
  "price": 50000,
  "duration_minutes": 30
}
```

---

## PUT /api/services/{id}

Purpose:

Mengubah layanan.

---

## DELETE /api/services/{id}

Purpose:

Menghapus layanan.

---

# 6. Booking API

## GET /api/bookings

Purpose:

Mengambil seluruh booking.

---

## GET /api/bookings/{id}

Purpose:

Mengambil detail booking.

---

## POST /api/bookings

Purpose:

Membuat booking baru.

Request:

```json
{
  "customer_id": "CUST001",
  "service_id": "SRV001",
  "booking_date": "2025-06-21",
  "booking_time": "10:00",
  "status": "Scheduled"
}
```

---

## PUT /api/bookings/{id}

Purpose:

Mengubah booking.

---

## DELETE /api/bookings/{id}

Purpose:

Membatalkan booking.

---

# 7. Standard Response

Success:

```json
{
  "success": true,
  "message": "Operation completed"
}
```

Error:

```json
{
  "success": false,
  "message": "Validation failed"
}
```

---

# 8. Future Enhancements

* Authentication API
* User API
* Role API
* Reporting API
* Branch API

---

# 9. Approval

Dokumen API Design menjadi dasar implementasi backend, route handler, service layer, dan integrasi frontend Barbershop CRM.
