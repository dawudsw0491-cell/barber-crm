# UI WIREFRAME DOCUMENT

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

UI Wireframe Design

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen ini mendefinisikan rancangan tampilan awal (wireframe) untuk seluruh modul utama Barbershop CRM.

Dokumen ini menjadi referensi UI/UX sebelum implementasi frontend.

---

# 3. Dashboard Wireframe

```text
+---------------------------------------------------+
| Navigation                                        |
| Dashboard | Customer | Service | Booking          |
+---------------------------------------------------+

+-------------+-------------+-------------+
| Customer    | Service     | Booking     |
|     120     |      15     |      58     |
+-------------+-------------+-------------+

+---------------------------------------------------+
| Dashboard Summary                                 |
+---------------------------------------------------+
```

---

# 4. Customer List Wireframe

```text
+---------------------------------------------------+
| Navigation                                        |
+---------------------------------------------------+

Customer Management

[ Add Customer ]

[ Search Customer ]

+----+----------------+-------------+-------------+
| ID | Name           | Phone       | Email       |
+----+----------------+-------------+-------------+
| 1  | John Doe       | 0812xxxxxx  | john@...    |
+----+----------------+-------------+-------------+
```

---

# 5. Customer Form Wireframe

```text
+--------------------------------------+
| Add Customer                         |
+--------------------------------------+

Customer Name
[________________________]

Phone Number
[________________________]

Email
[________________________]

[ Save ]   [ Cancel ]
```

---

# 6. Service List Wireframe

```text
+---------------------------------------------------+
| Navigation                                        |
+---------------------------------------------------+

Service Management

[ Add Service ]

+----+---------------+-----------+-----------+
| ID | Service       | Price     | Duration  |
+----+---------------+-----------+-----------+
| 1  | Haircut       | 50000     | 30 Min    |
+----+---------------+-----------+-----------+
```

---

# 7. Service Form Wireframe

```text
+--------------------------------------+
| Add Service                          |
+--------------------------------------+

Service Name
[________________________]

Price
[________________________]

Duration
[________________________]

[ Save ]   [ Cancel ]
```

---

# 8. Booking List Wireframe

```text
+---------------------------------------------------+
| Navigation                                        |
+---------------------------------------------------+

Booking Management

[ Create Booking ]

+----+----------+----------+------------+----------+
| ID | Customer | Service  | Date       | Status   |
+----+----------+----------+------------+----------+
| 1  | John     | Haircut  | 2026-06-21 | Scheduled|
+----+----------+----------+------------+----------+
```

---

# 9. Booking Form Wireframe

```text
+--------------------------------------+
| Create Booking                       |
+--------------------------------------+

Customer
[ Select Customer ]

Service
[ Select Service ]

Date
[____________]

Time
[____________]

Notes
[________________________]

[ Save ]   [ Cancel ]
```

---

# 10. UI Design Principles

### Simplicity

Tampilan sederhana dan mudah digunakan.

### Consistency

Semua modul menggunakan layout yang sama.

### Visibility

Informasi penting mudah terlihat.

### Usability

Dapat digunakan tanpa pelatihan teknis khusus.

---

# 11. Future UI Enhancements

* Dark Mode
* Responsive Mobile View
* Dashboard Charts
* Calendar Booking View
* Customer History View

---

# 12. Approval

Dokumen UI Wireframe menjadi dasar implementasi frontend dan desain antarmuka pengguna Barbershop CRM.
