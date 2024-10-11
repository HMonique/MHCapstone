My project is an E-Commerce website called Crafty Corner where you can buy made to order crochet stuffed toys called Amigurumis.

The FrontEnd was initialized using Vite and the BackEnd was initialized using Spring Initializer from Spring Boot.

Dependencies:
React, React DOM, React Router, Vite, Tailwind CSS, Spring Boot Web, Data-JPA,
Spring Boot Security, Spring Boot DevTools, MySql, Lombok

Routing Setup
React Router was implemented for navigation between different views.

State Management
A custom Context API setup (ContextProvider) was used for global state management.

Tailwind CSS and CSS in HTML
Imported a Font called Cute Stitch
Used animate-fade-in for headings
Used Cloudinary to store and upload images
Youtube - Embed codes used

React: A JavaScript library for building user interfaces.
Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.
React Router: Declarative routing for React applications.
Context API: React's built-in state management system for sharing data across components.
Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
Spring Boot: Framework for building Java-based web applications.
Spring Data JPA: Abstraction over JPA to simplify database interactions.
Spring Security: Framework for securing Java applications.
MySQL: Relational database management system.
Lombok: Library to reduce boilerplate code.
Maven: Build automation tool.
Toastify
Axios - tried using for Login
JUnit

Project Structure

FrontEnd
src/
├── components/
│ ├── AllItems.jsx
│ ├── AuthWrapper.jsx
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Navbar.jsx
│ ├── Register.jsx
│ ├── Routes.jsx
│ └── SingleItem.jsx
├── store/
│ └── ContextProvider.jsx
├── data/
│ └── index.js
├── App.jsx
└── main.jsx

BackEnd
src/
├── main/
│ ├── java/
│ │ └── com/
│ │ └── CraftyCorner/
│ │ └── Capstone/
│ │ ├── Config/
│ │ │ └── WebCorsConfig.java
│ │ ├── Common/
│ │ │ ├── SuppliesRepository.java
│ │ │ └── UserRepository.java
│ │ ├── Model/
│ │ │ ├── Supplies.java
│ │ │ └── MyAppUser.java
│ │ └── Controller/
│ │ └── TestController.java
│ ├── resources/
│ │ ├── data/
│ │ │ ├── Supplies.json
│ │ │ └── MyLearning.json
│ │ └── application.properties
└── test/
└── java/
└── com/
└── CraftyCorner/
└── Capstone/
└── BackEndApplicationTests.java

Features
User Authentication:
Registration and Login functionality
Client-side password encryption (for demonstration purposes) (Not functioning)

Product Display:
All products view (AllItems component)
Individual product view (SingleItem component)
Fetching individual supply details

Navigation:
Responsive navbar with conditional rendering based on login status (Login and Register not working)
REST API
React Router for seamless navigation between views

State Management:
Global state managed via Context API (ContextProvider)

Development Process
Initial Setup: Project initialized with Vite and React.
Routing Implementation: Set up React Router for navigation in main.jsx and Routes.jsx.
State Management: Implemented Context API for global state in ContextProvider.jsx.
Component Development: Created individual components for different views and functionalities.
Styling: Applied Tailwind CSS for responsive and consistent design, with custom color palette.
Authentication: Implemented basic client-side authentication with password encryption.
Product Display: Created views for all products (AllItems) and individual product pages (SingleItem).
Initial Setup: Project initialized with Spring Boot.
Routing Implementation: Set up REST endpoints in TestController.
State Management: Implemented using Spring Data JPA.
Component Development: Created entities and repositories.
Styling: Not applicable for backend.
Authentication: Implemented using Spring Security.
Product Display: Created views for all products and individual product pages.

Security Considerations
The current implementation of password handling (client-side encryption) is not secure for production use. In a real-world application, authentication should be handled server-side with proper security measures. Use bcrypt for password hashing and JWT for secure authentication.

Future Enhancements
Implement server-side authentication
Add a shopping cart functionality
Integrate with a backend API for dynamic product data
Implement user profiles and order history
Security Enhancements
Backend Authentication:
Implement a backend server (e.g., using Node.js and Express.js).
Use bcrypt for password hashing on the server side instead of client-side encryption.
Implement JWT for secure authentication and authorization.
Implement a full shopping cart with add, remove, and update quantity features.
Implement a full shopping cart with add, remove, and update quantity features.
Add a checkout process.
Allow users to create and edit profiles.
Implement profile pictures and user settings.
Allow users to leave reviews and ratings for products.
Display average ratings on product cards.
Implement a search bar to find products easily.
Add filters for categories, price range, etc.
Add social media sharing buttons for products.
Implement social login options.
Send email confirmations for registrations, orders, and password resets.
Allow users to add items to a wishlist for future purchase.
Responsive Design: Enhance the responsive design for better mobile experience.
Dark Mode: Implement a dark mode option using Tailwind CSS.
Animation: Add subtle animations for better user experience (e.g., using libraries like Framer Motion).
Server-side Authentication: Implement using Node.js and Express.js.
Shopping Cart: Add functionality.
Backend API: Integrate for dynamic product data.
User Profiles: Implement user profiles and order history
