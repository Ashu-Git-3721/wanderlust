<div>
  <h1>Wanderlust</h1>
  <h2>The Ultimate Travel Blog 🌍✈️ for You </h2>
</div>

![Preview Image](https://github.com/krishnaacharyaa/wanderlust/assets/116620586/17ba9da6-225f-481d-87c0-5d5a010a9538)

## Technologies Used

- **MongoDB**: NoSQL database for storing user and destination data.
- **Express.js**: Backend framework for building RESTful APIs.
- **React.js**: Frontend framework for building dynamic, interactive user interfaces.
- **Node.js**: JavaScript runtime for the backend server.
- **Docker**: Containerization platform to package the application and its dependencies.
- **JWT**: Authentication using JSON Web Tokens.
- **Redis**: In-memory data store used for caching and session management.


## Setting up the project locally

### Setting up the Backend

1. **Fork and Clone the Repository**

   ```bash
   git clone https://github.com/{your-username}/wanderlust.git
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd backend
   ```

3. **Install Required Dependencies**

     ```bash
   # installs NVM (Node Version Manager)
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
	# download and install Node.js
	nvm install 20
	# verifies the right Node.js version is in the environment
	node -v # should print `v20.12.1`
	# verifies the right NPM version is in the environment
	npm -v # should print `10.5.0`
	npm i
   ```

4. **Set up your MongoDB Database**

   - Open MongoDB Compass and connect MongoDB locally at `mongodb://localhost:27017`.

5. **Import sample data**

   > To populate the database with sample posts, you can copy the content from the `backend/data/sample_posts.json` file and insert it as a document in the `wanderlust/posts` collection in your local MongoDB database using either MongoDB Compass or `mongoimport`.

   ```bash
   mongoimport --db wanderlust --collection posts --file ./data/sample_posts.json --jsonArray
   ```

6. **Configure Environment Variables**

   ```bash
   cp .env.sample .env
   ```

7. **Start the Backend Server**

   ```bash
   npm start
   ```

   > You should see the following on your terminal output on successful setup.
   >
   > ```bash
   > [BACKEND] Server is running on port 5000
   > [BACKEND] Database connected: mongodb://127.0.0.1/wanderlust
   > ```

### Setting up the Frontend

1. **Open a New Terminal**

   ```bash
   cd frontend
   ```

2. **Install Dependencies**

   ```bash
   npm i
   ```

3. **Configure Environment Variables**

   ```bash
   cp .env.sample .env.local
   ```

4. **Launch the Development Server**

   ```bash
   npm run dev
   ```

### Setting up with Docker

1.  **Ensure Docker and Docker Compose are Installed**
    
2.  **Clone the Repository**
    
   ``` bash
    
    git clone https://github.com/{your-username}/wanderlust.git
   ``` 
3.  **Navigate to the Project Directory**
    
    ```bash
    
    cd wanderlust
    
    ```
4.  **Update Environment Variables**  - If you anticipate the IP address of the instance might change, update the `.env.sample` file with the new IP address.

5. **Run Docker Compose**

```bash
docker-compose up --build

```

This command will build the Docker images and start the containers for the backend and frontend, enabling you to access the Wanderlust application.

- <b>Congratulations, your application is deployed </b>
<img width="1919" height="993" alt="Screenshot 2025-12-01 230153" src="https://github.com/user-attachments/assets/ed1f0140-b6b1-41e9-9257-b42adc0f28ac" />



<img width="1725" height="792" alt="Screenshot 2025-12-01 230849" src="https://github.com/user-attachments/assets/b95cfe11-704a-4ace-ba6b-e9b1ddda339c" />


![image](https://github.com/user-attachments/assets/64394f90-8610-44c0-9f63-c3a21eb78f55)

