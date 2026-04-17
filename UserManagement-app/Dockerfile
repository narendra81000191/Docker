# ------------ Stage 1: Build Angular App ------------
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install

COPY . .
RUN ng build --configuration production

# ------------ Stage 2: Serve with NGINX ------------
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]