# USE CASE LIST

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Use Case List

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen ini mendefinisikan seluruh use case yang akan didukung oleh sistem Barbershop CRM berdasarkan kebutuhan bisnis dan kebutuhan fungsional yang telah ditetapkan.

---

# 3. Actors

## ACT-001 Owner

Peran:

* Monitoring bisnis
* Melihat laporan
* Melihat dashboard

---

## ACT-002 Manager

Peran:

* Mengelola operasional
* Mengelola customer
* Mengelola service
* Mengelola booking

---

## ACT-003 Barber

Peran:

* Melihat jadwal booking
* Memproses layanan pelanggan

---

## ACT-004 Customer

Peran:

* Melakukan booking layanan

---

# 4. Dashboard Module

| Use Case ID | Use Case Name          | Actor          |
| ----------- | ---------------------- | -------------- |
| UC-DASH-001 | View Dashboard Summary | Owner, Manager |

---

# 5. Customer Module

| Use Case ID | Use Case Name         | Actor   |
| ----------- | --------------------- | ------- |
| UC-CUST-001 | Create Customer       | Manager |
| UC-CUST-002 | View Customer         | Manager |
| UC-CUST-003 | Update Customer       | Manager |
| UC-CUST-004 | Delete Customer       | Manager |
| UC-CUST-005 | Search Customer       | Manager |
| UC-CUST-006 | View Customer History | Manager |

---

# 6. Service Module

| Use Case ID | Use Case Name  | Actor   |
| ----------- | -------------- | ------- |
| UC-SRV-001  | Create Service | Manager |
| UC-SRV-002  | View Service   | Manager |
| UC-SRV-003  | Update Service | Manager |
| UC-SRV-004  | Delete Service | Manager |

---

# 7. Booking Module

| Use Case ID | Use Case Name         | Actor           |
| ----------- | --------------------- | --------------- |
| UC-BKG-001  | Create Booking        | Manager         |
| UC-BKG-002  | View Booking          | Manager, Barber |
| UC-BKG-003  | Reschedule Booking    | Manager         |
| UC-BKG-004  | Cancel Booking        | Manager         |
| UC-BKG-005  | Update Booking Status | Manager, Barber |

---

# 8. Reporting Module

| Use Case ID | Use Case Name        | Actor |
| ----------- | -------------------- | ----- |
| UC-RPT-001  | View Customer Report | Owner |
| UC-RPT-002  | View Service Report  | Owner |
| UC-RPT-003  | View Booking Report  | Owner |

---

# 9. Use Case Summary

| Module    | Total Use Case |
| --------- | -------------- |
| Dashboard | 1              |
| Customer  | 6              |
| Service   | 4              |
| Booking   | 5              |
| Reporting | 3              |

Total Use Case: 19

---

# 10. Traceability

| Functional Requirement | Use Case |
| ---------------------- | -------- |
| FR-DASH                | UC-DASH  |
| FR-CUST                | UC-CUST  |
| FR-SRV                 | UC-SRV   |
| FR-BKG                 | UC-BKG   |
| FR-RPT                 | UC-RPT   |

---

# 11. Approval

Dokumen ini menjadi dasar penyusunan User Story, BPMN, Screen Flow, dan desain sistem Barbershop CRM.
