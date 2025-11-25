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

<!-- ## Screenshots

### Home Page

![Home Page](frontend/public/images/screenshots/homepage.png)

### Product Page

![Product Page](frontend/public/images/screenshots/productpage.png)

### Admin Dashboard

![Admin Dashboard](frontend/public/images/screenshots/admindashboard.png)

### Additional Screenshots

![Screenshot 1](frontend/public/images/screenshots/screenshot1.png)
![Screenshot 2](frontend/public/images/screenshots/screenshot2.png)
![Screenshot 3](frontend/public/images/screenshots/screenshot3.png)
![Screenshot 4](frontend/public/images/screenshots/screenshot4.png)
![Screenshot 5](frontend/public/images/screenshots/screenshot5.png)
![Screenshot 6](frontend/public/images/screenshots/screenshot6.png)
![Screenshot 7](frontend/public/images/screenshots/screenshot7.png)
![Screenshot 8](frontend/public/images/screenshots/screenshot8.png)
![Screenshot 9](frontend/public/images/screenshots/screenshot9.png)
![Screenshot 10](frontend/public/images/screenshots/screenshot10.png)
![Screenshot 11](frontend/public/images/screenshots/screenshot11.png)
![Screenshot 12](frontend/public/images/screenshots/screenshot12.png)
![Screenshot 13](frontend/public/images/screenshots/screenshot13.png)
![Screenshot 14](frontend/public/images/screenshots/screenshot14.png)
![Screenshot 15](frontend/public/images/screenshots/screenshot15.png)
![Screenshot 16](frontend/public/images/screenshots/screenshot16.png)
![Screenshot 17](frontend/public/images/screenshots/screenshot17.png)
![Screenshot 18](frontend/public/images/screenshots/screenshot18.png)
![Screenshot 19](frontend/public/images/screenshots/screenshot19.png)
![Screenshot 20](frontend/public/images/screenshots/screenshot20.png)
![Screenshot 21](frontend/public/images/screenshots/screenshot21.png)
![Screenshot 22](frontend/public/images/screenshots/screenshot22.png)
![Screenshot 23](frontend/public/images/screenshots/screenshot23.png)
![Screenshot 24](frontend/public/images/screenshots/screenshot24.png)
![Screenshot 25](frontend/public/images/screenshots/screenshot25.png)

--- -->
