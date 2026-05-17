# Shop Backend API
 Backend ecmmerce project using :
 - Node.js
 - Express.js
 - MongoDB
 - JWT Authentication
 - Swagger

 ---

 ## Install dependencies
 npm install

 ---

## Run project

npm run dev


---

## Seed database

npm run seed



---

 ## Environment variable
 Create .env file
 MONGO_URI=your_mongodb_uri
 JWT_SECRET=your_secret_key
 PORT=3000

 ---

 ## API Docunemtation

 http://localhost:3000/api-docs

 ---

 ## Features
 
 - Regiter User
 - Login User
- JWT Authentication
- Admin Authentication
- CRUD Products
- Swagger Documentation

---

## API Routes

### Auth
POST /api/auth/register

POST /api/auth/login

### Products

GET /products

GET /products/:id

POST /products

PUT /products/:id

DELETE /products/:id
 
