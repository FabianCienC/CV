# --- Etapa 1: compilar el sitio con Node ---
FROM node:26-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Etapa 2: servir solo los archivos estáticos con nginx (sin root) ---
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
