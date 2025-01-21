# BistroBoss Restaurant Website

## Project Overview
BistroBoss is a modern, responsive restaurant website designed to provide an exceptional user experience for customers seeking delicious food and a seamless dining experience. The website features a clean UI, professional design, and essential functionalities, making it easy for users to explore the menu, make reservations, and learn more about the restaurant.

## Features
- **Responsive Design**: Ensures a seamless experience across all devices, including desktops, tablets, and mobile phones.
- **Dynamic Menu**: Allows users to view food items categorized by types (e.g., appetizers, main courses, desserts, drinks).
- **Reservation System**: Users can book tables directly through the website.
- **Admin Dashboard**: A private route for administrators to manage menu items, reservations, and other website content.
- **Authentication**: Secured login and registration system using Firebase.
- **Interactive Animations**: Engaging animations using Lottie React and React Awesome Reveal.
- **Tooltips**: Enhanced user experience with React Tooltip.

## Technologies Used
- **Frontend**:
  - React.js
  - Tailwind CSS
  - DaisyUI
  - React Router DOM
  - Lottie React
  - React Awesome Reveal
  - React Tooltip

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB

- **Authentication**:
  - Firebase Authentication

- **Hosting**:
  - Firebase Hosting

## Key Functionalities
1. **User Authentication**:
   - Login and registration with Firebase.
   - Private routes to secure admin functionalities.

2. **Dynamic Content**:
   - Menu items are fetched and displayed dynamically from a MongoDB database.
   - Admins can add, edit, or delete menu items.

3. **Reservation System**:
   - Simple and user-friendly table booking interface.
   - Admin can view and manage reservations.

4. **Interactive UI**:
   - Smooth animations and tooltips for better user engagement.
   - Responsive design for an optimized experience on all devices.

## Installation Guide
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd bistroboss-restaurant
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
     MONGO_URI=your_mongodb_connection_string
     ```

5. Start the development server:
   ```bash
   npm run start
   ```

6. Open the project in your browser:
   ```
   http://localhost:9000
   ```
