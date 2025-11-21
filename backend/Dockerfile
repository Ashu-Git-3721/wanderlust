# ----------------- Stage 1: Build -----------------
FROM node:21 AS backend-builder

WORKDIR /app

# Install dependencies first for caching
COPY package*.json ./
RUN npm install

# Copy rest of backend source code
COPY . .

# ----------------- Stage 2: Run -----------------
FROM node:21-slim

WORKDIR /app

COPY --from=backend-builder /app .

# Copy environment file
COPY .env.docker .env

EXPOSE 5000

CMD ["npm", "start"]

