<div>
  <h1>Wanderlust</h1>
  <h2>The Ultimate Travel Blog 🌍✈️ for You </h2>
</div>

![Preview Image](https://github.com/krishnaacharyaa/wanderlust/assets/116620586/17ba9da6-225f-481d-87c0-5d5a010a9538)

<hr>

<div>
  <h2>🔗 Important Links</h2>
</div>

<table border="1">
  <tr>
      <td><img src="https://github.com/Meetjain1/wanderlust/assets/133582566/5ca6c472-5c73-41b2-a2df-389cc3e14881.png" alt="Discord Logo" width="50"></td>
      <td><a href="https://discord.gg/FEKasAdCrG"> Join our project's Discord Channel here </a></td>
  </tr>
  <tr>
      <td><img src="https://github.com/Meetjain1/wanderlust/assets/133582566/ffda08c0-3c7a-46b0-b7ac-6bc374184ec7.png" alt="Figma Logo" width="50"></td>
      <td><a href="https://www.figma.com/file/zqNcWGGKBo5Q2TwwVgR6G5/WanderLust--A-Travel-Blog-App?type=design&node-id=0%3A1&mode=design&t=c4oCG8N1Fjf7pxTt-1"> Find our project's Figma links here</a></td>
  </tr>
  <tr>
      <td><img src="https://github.com/krishnaacharyaa/wanderlust/assets/133582566/47d71dd6-0390-479e-9d4e-3f077ef1a987.png" alt="YouTube Logo" width="50"></td>
      <td><a href="https://youtu.be/ANfC1u_N_A0?feature=shared"> Find our Collaboration Video with TrainwithShubham here </a></td>
  </tr>
</table>

<hr>

<div>
  <h2><img src="https://github.com/Meetjain1/wanderlust/assets/133582566/4a07b161-b8d6-4803-804a-3b0db699023e" width="35" height="35"> Goal of this project </h2>
</div>

At its core, this project embodies two important aims:

1. **Start Your Open Source Journey**: It's aimed to kickstart your open-source journey. Here, you'll learn the basics of Git and get a solid grip on the MERN stack and I strongly believe that learning and building should go hand in hand.
2. **React Mastery**: Once you've got the basics down, a whole new adventure begins of mastering React. This project covers everything, from simple form validation to advanced performance enhancements. And I've planned much more cool stuff to add in the near future if the project hits more number of contributors.

_We want you to get the most out of this project—it's all about learning, contributing, and growing in the open-source community.

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

5.  **Run Docker Compose**
    
    ```bash
    
    docker-compose up
    ```
    This command will build the Docker images and start the containers for the backend and frontend, enabling you to access the Wanderlust application.

