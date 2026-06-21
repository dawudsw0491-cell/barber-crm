# SIPOC DIAGRAM

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

SIPOC Analysis

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen SIPOC digunakan untuk mengidentifikasi hubungan antara Supplier, Input, Process, Output, dan Customer pada proses bisnis utama Barbershop CRM.

Dokumen ini menjadi dasar untuk penyusunan BPMN dan desain sistem.

---

# 3. SIPOC Overview

| Supplier | Input             | Process               | Output                    | Customer |
| -------- | ----------------- | --------------------- | ------------------------- | -------- |
| Customer | Booking Request   | Create Booking        | Booking Record            | Manager  |
| Manager  | Customer Data     | Manage Customer       | Customer Record           | Owner    |
| Manager  | Service Data      | Manage Service        | Service Record            | Customer |
| Barber   | Service Execution | Update Booking Status | Service Completion Status | Manager  |
| System   | Transaction Data  | Generate Dashboard    | Dashboard Information     | Owner    |

---

# 4. Customer Management SIPOC

| Supplier | Input                        | Process         | Output                      | Customer |
| -------- | ---------------------------- | --------------- | --------------------------- | -------- |
| Manager  | Customer Information         | Create Customer | Customer Record             | Owner    |
| Manager  | Updated Customer Information | Update Customer | Updated Customer Record     | Owner    |
| Manager  | Search Criteria              | Search Customer | Search Result               | Manager  |
| Manager  | Customer ID                  | Delete Customer | Deleted Record Confirmation | Manager  |

---

# 5. Service Management SIPOC

| Supplier | Input                       | Process        | Output                       | Customer |
| -------- | --------------------------- | -------------- | ---------------------------- | -------- |
| Manager  | Service Information         | Create Service | Service Record               | Customer |
| Manager  | Updated Service Information | Update Service | Updated Service Record       | Customer |
| Manager  | Service ID                  | Delete Service | Deleted Service Confirmation | Manager  |

---

# 6. Booking Management SIPOC

| Supplier | Input                  | Process               | Output               | Customer |
| -------- | ---------------------- | --------------------- | -------------------- | -------- |
| Customer | Booking Request        | Create Booking        | Booking Schedule     | Customer |
| Manager  | Booking Update Request | Reschedule Booking    | Updated Schedule     | Customer |
| Manager  | Cancellation Request   | Cancel Booking        | Booking Cancellation | Customer |
| Barber   | Service Progress       | Update Booking Status | Booking Status       | Manager  |

---

# 7. Dashboard & Reporting SIPOC

| Supplier      | Input            | Process            | Output         | Customer |
| ------------- | ---------------- | ------------------ | -------------- | -------- |
| Customer Data | Customer Records | Generate Dashboard | Dashboard KPI  | Owner    |
| Service Data  | Service Records  | Generate Reports   | Service Report | Owner    |
| Booking Data  | Booking Records  | Generate Reports   | Booking Report | Owner    |

---

# 8. Process Boundary

### Start

Customer melakukan booking atau Manager melakukan pengelolaan data.

### End

Informasi tersimpan dan tersedia pada dashboard atau laporan.

---

# 9. Key Business Processes

1. Customer Management
2. Service Management
3. Booking Management
4. Dashboard Monitoring
5. Reporting

---

# 10. Approval

Dokumen SIPOC menjadi dasar penyusunan BPMN, Process Matrix, Screen Flow, dan System Design Barbershop CRM.
