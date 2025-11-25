# Django-React eCommerce Application

Welcome to the Django-React eCommerce Application! This project is a full-stack eCommerce platform built using Django for the backend and React for the frontend. It includes features such as user authentication, product management, and order processing.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Folder Structure](#folder-structure)
6. [Screenshots](#screenshots)
7. [Contributing](#contributing)
8. [License](#license)

---

## Project Overview

This application is designed to provide a seamless shopping experience for users while offering robust management tools for administrators. The backend is powered by Django, ensuring secure and scalable operations, while the frontend is built with React for a dynamic and responsive user interface.

---

## Features

-   **User Authentication**: Sign up, log in, and manage profiles.
-   **Product Management**: Add, edit, and delete products.
-   **Order Processing**: Place orders, track statuses, and manage order history.
-   **Responsive Design**: Optimized for both desktop and mobile devices.
-   **Admin Dashboard**: Manage users, products, and orders.

---

## Technologies Used

### Backend:

-   Django 5.1.1
-   Django REST Framework
-   PostgreSQL (or SQLite for development)
-   Simple JWT for authentication

### Frontend:

-   React
-   Redux for state management
-   Tailwind CSS for styling

---

## Setup Instructions

### Prerequisites:

-   Python 3.10+
-   Node.js 16+
-   npm or yarn

### Steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/kdev307/Django-React-eComm-App.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Django-React-eComm-App
    ```

3. Run the setup script:

    ```powershell
    .\setup_project.ps1
    ```

4. Access the application:
    - Backend: [http://127.0.0.1:8000](http://127.0.0.1:8000)
    - Frontend: [http://localhost:3000](http://localhost:3000)

---

## Folder Structure

```
Django-React-eComm-App/
├── backend/
│   ├── appMain/          # Django app with models, views, serializers, etc.
│   ├── static/           # Static files (images, CSS, JS)
│   ├── templates/        # HTML templates
│   ├── manage.py         # Django management script
│   └── requirements.txt  # Python dependencies
├── frontend/
│   ├── src/              # React components and pages
│   ├── public/           # Public assets (index.html, images, etc.)
│   ├── package.json      # Node.js dependencies
│   └── tailwind.config.js # Tailwind CSS configuration
├── env/                  # Python virtual environment
└── setup_project.ps1     # Setup script
```

---

## Screenshots

### Home Page

#### Hero Section

![Hero Section](screenshots/hero.png)

#### Categories

![Category](screenshots/category.png)

#### Popular Products

![Popular Products](screenshots/popular-products.png)

#### Benefits

![Benefits](screenshots/benefits.png)

#### Testimonials

![Testimonials](screenshots/testimonial.png)

### Store Page

#### Store Overview

![Store](screenshots/store.png)

#### Cart

![Cart](screenshots/cart.png)

### Account Management

#### Login

![Login](screenshots/login.png)

#### Sign Up

![Sign Up](screenshots/sign-up.png)

#### Profile

![Profile](screenshots/profile.png)

#### Update Profile

![Update Profile](screenshots/update-profile.png)

#### View Address

![View Address](screenshots/view-address.png)

#### Add Address

![Add Address](screenshots/add-address.png)

### Review Page

#### Product Reviews

![Product Review](screenshots/product-review.png)

#### Add Review

![Product Add Review](screenshots/product-add-review.png)

#### User Reviews

![User Reviews](screenshots/user-reviews.png)

### Order History Page

#### Order History

![Order History](screenshots/order-history.png)

#### Order History Details

![Order History Detail](screenshots/order-history-detail.png)

#### Order Checkout

![Order Checkout](screenshots/order-checkout.png)

### Emails

#### Activate Account

![Activate Account](screenshots/email-activate-account.png)

#### New Product Notification

![New Product](screenshots/email-new-product.png)

#### Order Dispatched

![Order Dispatched](screenshots/email-order-dispatched.png)

#### Order Placed

![Order Placed](screenshots/email-order-placed.png)

#### Updates

![Updates](screenshots/email-updates.png)

### Account Activation Message

#### Activation Failed

![Activation Failed](screenshots/account-activate-fail.png)

#### Activation Success

![Activation Success](screenshots/account-activate-success.png)

### Admin Page

#### Add Product

![Admin Add Product 1](screenshots/admin-add-product-1.png)
![Admin Add Product 2](screenshots/admin-add-product-2.png)
![Admin Add Product 3](screenshots/admin-add-product-3.png)
![Admin Add Product 4](screenshots/admin-add-product-4.png)

#### Dispatch Orders

![Admin Dispatch](screenshots/admin-dispatch.png)

#### Admin Profile

![Admin Profile](screenshots/admin-profile.png)

#### Admin Store

![Admin Store](screenshots/admin-store.png)

#### View Order History

![Admin View Order History](screenshots/admin-view-order-history.png)

---
