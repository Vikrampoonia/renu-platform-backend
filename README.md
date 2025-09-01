# Renu Platform Backend

An Express.js and MySQL backend for the Renu Platform, designed to manage school data including image uploads.

**Live URL:** [https://renu-platform-backend.vercel.app](https://renu-platform-backend-jday.vercel.app/)

---

## Features

- **Add New Schools:** A robust endpoint to add new schools to the database, including handling image uploads.
- **Fetch Schools:** An endpoint to retrieve a list of all registered schools.
- **Secure & Organized:** Uses environment variables to manage sensitive data like database credentials.
- **Scalable Structure:** Built with Express.js for a scalable and maintainable API.

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **File Uploads:** Multer
- **Environment Variables:** Dotenv

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v16 or higher recommended)
- [MySQL](https://dev.mysql.com/downloads/mysql/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Vikrampoonia/renu-platform-backend.git](https://github.com/Vikrampoonia/renu-platform-backend.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd renu-platform-backend
    ```

3.  **Install NPM packages:**
    ```bash
    npm install
    ```

4.  **Set up the database:**
   -make your mysql url

5.  **Create an environment file:**
    - Create a `.env` file in the root of the project.
    - Add your database connection URL to it. This keeps your credentials secure.
      ```env
      DATABASE_URL=your mysql url
      ```
    

6.  **Start the development server:**
    ```bash
    npm run dev
    ```
   

