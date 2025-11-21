# ----------------- Stage 1: Build -----------------
FROM node:21 AS frontend-builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ----------------- Stage 2: Run -----------------
FROM node:21-slim
WORKDIR /app

COPY --from=frontend-builder /app .

# Copy environment file
COPY .env.docker .env

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

