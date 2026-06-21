# ROLE MATRIX & ACCESS CONTROL MODEL

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Role Matrix & Access Control Model

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen ini mendefinisikan hak akses pengguna terhadap fitur dan data dalam sistem Barbershop CRM.

Dokumen ini menjadi dasar:

* Authorization Design
* Security Design
* User Management
* Audit & Compliance
* Future Authentication Module

---

# 3. Roles

## Owner

Tanggung Jawab:

* Monitoring bisnis
* Melihat dashboard
* Melihat laporan

---

## Manager

Tanggung Jawab:

* Mengelola customer
* Mengelola service
* Mengelola booking

---

## Barber

Tanggung Jawab:

* Melihat jadwal booking
* Memperbarui status layanan

---

# 4. Access Matrix

| Feature         | Owner | Manager | Barber |
| --------------- | ----- | ------- | ------ |
| Dashboard View  | R     | R       | -      |
| Customer View   | R     | R       | R      |
| Customer Create | -     | C       | -      |
| Customer Update | -     | U       | -      |
| Customer Delete | -     | D       | -      |
| Service View    | R     | R       | R      |
| Service Create  | -     | C       | -      |
| Service Update  | -     | U       | -      |
| Service Delete  | -     | D       | -      |
| Booking View    | R     | R       | R      |
| Booking Create  | -     | C       | -      |
| Booking Update  | -     | U       | U      |
| Booking Cancel  | -     | D       | -      |
| Reporting View  | R     | R       | -      |

---

# 5. Access Legend

| Code | Description |
| ---- | ----------- |
| C    | Create      |
| R    | Read        |
| U    | Update      |
| D    | Delete      |

---

# 6. Future Roles

Planned:

### Receptionist

* Customer Registration
* Booking Creation

### Administrator

* User Management
* System Configuration

---

# 7. Authorization Rules

## AUTH-001

Pengguna hanya dapat mengakses fitur sesuai role.

---

## AUTH-002

Owner tidak dapat mengubah data operasional.

---

## AUTH-003

Manager memiliki akses penuh terhadap Customer, Service, dan Booking.

---

## AUTH-004

Barber hanya dapat melihat jadwal dan memperbarui status layanan.

---

# 8. Security Considerations

Future Features:

* Login
* Password Management
* Session Management
* Role Based Access Control (RBAC)
* Audit Log

---

# 9. Approval

Dokumen Role Matrix menjadi dasar implementasi Authorization, Security Model, dan User Management pada Barbershop CRM.
