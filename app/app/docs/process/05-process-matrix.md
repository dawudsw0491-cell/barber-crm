# PROCESS TRACEABILITY MATRIX

## 1. Document Information

### Project Name

Barbershop CRM

### Document Type

Process Traceability Matrix

### Version

1.0

### Status

Draft

---

# 2. Purpose

Dokumen ini digunakan untuk memastikan keterlacakan (traceability) antara kebutuhan bisnis, kebutuhan fungsional, use case, proses bisnis, dan modul sistem.

Dokumen ini menjadi penghubung antara fase Analysis, Process, dan Design sesuai prinsip ISO/IEC/IEEE 12207.

---

# 3. Traceability Matrix

| Business Requirement        | Functional Requirement           | Use Case    | Process           | Module              |
| --------------------------- | -------------------------------- | ----------- | ----------------- | ------------------- |
| BO-001 Manage Customer      | FR-CUST-001 Create Customer      | UC-CUST-001 | BPMN Customer     | Customer Management |
| BO-001 Manage Customer      | FR-CUST-002 View Customer        | UC-CUST-002 | BPMN Customer     | Customer Management |
| BO-001 Manage Customer      | FR-CUST-003 Update Customer      | UC-CUST-003 | BPMN Customer     | Customer Management |
| BO-001 Manage Customer      | FR-CUST-004 Delete Customer      | UC-CUST-004 | BPMN Customer     | Customer Management |
| BO-001 Manage Customer      | FR-CUST-005 Search Customer      | UC-CUST-005 | BPMN Customer     | Customer Management |
| BO-002 Manage Service       | FR-SRV-001 Create Service        | UC-SRV-001  | BPMN Service      | Service Management  |
| BO-002 Manage Service       | FR-SRV-002 View Service          | UC-SRV-002  | BPMN Service      | Service Management  |
| BO-002 Manage Service       | FR-SRV-003 Update Service        | UC-SRV-003  | BPMN Service      | Service Management  |
| BO-002 Manage Service       | FR-SRV-004 Delete Service        | UC-SRV-004  | BPMN Service      | Service Management  |
| BO-003 Manage Booking       | FR-BKG-001 Create Booking        | UC-BKG-001  | BPMN Booking      | Booking Management  |
| BO-003 Manage Booking       | FR-BKG-002 View Booking          | UC-BKG-002  | BPMN Booking      | Booking Management  |
| BO-003 Manage Booking       | FR-BKG-003 Reschedule Booking    | UC-BKG-003  | BPMN Booking      | Booking Management  |
| BO-003 Manage Booking       | FR-BKG-004 Cancel Booking        | UC-BKG-004  | BPMN Booking      | Booking Management  |
| BO-003 Manage Booking       | FR-BKG-005 Update Booking Status | UC-BKG-005  | BPMN Booking      | Booking Management  |
| BO-004 Dashboard Monitoring | FR-DASH-001 Dashboard Summary    | UC-DASH-001 | SIPOC Dashboard   | Dashboard           |
| BO-004 Dashboard Monitoring | FR-RPT-001 Customer Report       | UC-RPT-001  | Reporting Process | Reporting           |
| BO-004 Dashboard Monitoring | FR-RPT-002 Service Report        | UC-RPT-002  | Reporting Process | Reporting           |
| BO-004 Dashboard Monitoring | FR-RPT-003 Booking Report        | UC-RPT-003  | Reporting Process | Reporting           |

---

# 4. Module Mapping

## Dashboard Module

Related Documents:

* Business Requirements
* Functional Requirements
* Use Case List
* SIPOC

---

## Customer Module

Related Documents:

* Business Requirements
* Functional Requirements
* User Story
* BPMN Customer

---

## Service Module

Related Documents:

* Business Requirements
* Functional Requirements
* User Story
* BPMN Service

---

## Booking Module

Related Documents:

* Business Requirements
* Functional Requirements
* User Story
* BPMN Booking

---

## Reporting Module

Related Documents:

* Business Requirements
* Functional Requirements
* SIPOC

---

# 5. Traceability Objectives

Dokumen ini memastikan bahwa:

* Setiap kebutuhan bisnis memiliki requirement.
* Setiap requirement memiliki use case.
* Setiap use case memiliki proses bisnis.
* Setiap proses bisnis memiliki modul sistem.
* Setiap modul dapat ditelusuri kembali ke kebutuhan bisnis.

---

# 6. Approval

Dokumen Process Traceability Matrix menjadi dasar verifikasi requirement, desain sistem, pengujian, dan audit proyek Barbershop CRM.
