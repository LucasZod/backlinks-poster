FROM node:18
WORKDIR /app
COPY package*.json ./
COPY wait-for-it.sh /app/wait-for-it.sh
RUN npm install
COPY . .
EXPOSE 3000
CMD ["./wait-for-it.sh", "database:5432", "--", "npm", "start"]