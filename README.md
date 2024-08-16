# BloodConnect

## Overview

The Blood Donor Finder is a web application that connects blood donors with individuals in need of blood. Donors can register by providing their details such as blood group and city. Individuals searching for blood can find donors by filtering based on the required blood group and city.

## Features

- **Donor Registration:** Donors can register by providing their blood group, city, and other necessary details.
- **Blood Search:** Individuals can search for blood donors based on blood group and city.
- **Flash Messages:** The app uses flash messages to notify users of successful registrations or errors.
- **Session Management:** User sessions are handled securely using Express Session.

## Technologies Used

- **Frontend:**
  - EJS, CSS
- **Backend:**
  - Node.js, Express.js
- **Database:**
  - MySQL
- **Other:**
  - Connect Flash for notifications
  - Dotenv for environment variables
  - Express Session for session management

## How to Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/username/blood-donor-finder.git
   cd blood-donor-finder
   ```

2. **Install dependencies:**
   ```bash
    npm install
   ```
3. **Set up the database:**
   - Create a new MySQL database and run the queries in `database.sql` to set up the required tables.
   - Create a `.env` file in the root directory and add the following environment variables:
     ```
     DB_HOST=localhost
     DB_USER=root
     DB_NAME=donor_finder
     DB_PASSWORD=your_password
     SESSION_SECRET=your_secret
     ```
4. **Run the server:**
   ```bash
   npm start
   ```
5. **Access the application:**
   The application will be accessible at `http://localhost:3000`.

## Project Structure

blood-donor-finder/
│
├── public/ # Static assets (CSS, JS, images)
├── routes/ # Application routes
├── views/ # EJS templates
├── models/ # MySQL models
├── .env # Environment variables
├── app.js # Main application file
├── package.json # Project metadata and dependencies
└── README.md # Project documentation

## Screenshots

## License

This project is open source and available under the [MIT License](LICENSE).

```

```
