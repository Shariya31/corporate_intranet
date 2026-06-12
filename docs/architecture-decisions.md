# Architecture Decisions

## Why Feature Based Architecture?

Initially, a layer-based structure was considered.

Example:

components/
pages/
services/
redux/

This was rejected because feature ownership becomes difficult as the application grows.

Feature-based architecture was selected because:

* Better scalability
* Easier maintenance
* Clear ownership
* Simplified future backend integration

---

## Why Redux Toolkit?

The application contains multiple independent modules:

* Dashboard
* Leadership
* Recognition
* Community
* Knowledge

A centralized state layer simplified data flow and reduced prop drilling.

---

## Why Mock Service Layer?

Although a backend was not required, the UI was designed to behave as if APIs already exist.

Benefits:

* Easier migration to backend APIs
* Realistic loading states
* Better separation of concerns

---

## UI Design Decisions

The dashboard was prioritized because the requirement explicitly stated that the dashboard should drive engagement and visibility.

A card-based approach was initially explored but later evolved into a dashboard experience focused on:

* Leadership
* Communication
* Recognition
* Engagement

This better aligned with the problem statement.
