FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/productmanagement /usr/share/nginx/html
