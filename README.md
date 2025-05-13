# Padhai Kro

Padhai Kro is a full-stack EdTech web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The platform enables instructors to create and sell courses, and allows students to browse and purchase courses to enhance their learning experience.

## Features

### Student Features
- **Browse Courses**: Explore a wide variety of courses across multiple categories.
- **Course Details**: View detailed information about each course, including the instructor, curriculum, and price.
- **Purchase Courses**: Securely purchase courses and access them after payment.
- **User Dashboard**: Track purchased courses and manage your learning journey.

### Instructor Features
- **Create Courses**: Design and upload course content, including videos, descriptions, and pricing.
- **Manage Courses**: Edit or delete existing courses as needed.
- **Sales Dashboard**: Monitor sales performance and revenue statistics.

### General Features
- **User Authentication**: Secure login and registration system using JSON Web Tokens (JWT).
- **Responsive Design**: Fully responsive UI built with React, ensuring compatibility across devices.
- **Secure Payments**: Integration with Razorpay for seamless transactions.
- **Search Functionality**: Quickly find courses using keywords and filters.
- **Admin Panel**: Manage users, courses, and monitor overall platform activity.
- **Media Management**: Store and manage images and videos using Cloudinary.

## Tech Stack

### Frontend
- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **Redux**: For state management, including user sessions and cart data.

### Backend
- **Node.js**: For building the server-side logic.
- **Express.js**: For creating RESTful APIs.

### Database
- **MongoDB**: For storing user data, course information, and transaction details.

### Additional Services
- **Razorpay**: For secure and efficient payment processing.
- **Cloudinary**: For storing and serving images and videos efficiently.

### Authentication
- **JSON Web Tokens (JWT)**: For secure user authentication and session management.
- **CORS (Cross-Origin Resource Sharing)**: For secure serving and handling the requests.

### Deployment
- **Vercel**: For deploying the frontend.
- **Render/Heroku** (or similar): For deploying the backend.

## Live Demo Check out the live version of the application: [Padhai Kro](https://padhai-kro.vercel.app/) 
Dummy I'd for checkups as follow:->
1. dummyinstructor1@padhaikro.com
2. dummyinstructor2@padhaikro.com
3. dummystudent1@padhaikro.com
4. dummystudent1@padhaikro.com
Password for all four account is "1234" 

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Amankumarjha15/PadhaiKro.git
   cd PadhaiKro
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` folder and add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     RAZORPAY_KEY_ID=your_razorpay_key_id
     RAZORPAY_KEY_SECRET=your_razorpay_key_secret
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

4. Start the development server:
   - For the backend:
     ```bash
     cd backend
     npm start
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm start
     ```

5. Access the application at `http://localhost:3000`.

## Folder Structure

```
PadhaiKro
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   └── App.js
│   └── package.json
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── middleware
│   └── server.js
└── README.md
```

## Contributing

Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

For any queries or feedback, feel free to reach out!

