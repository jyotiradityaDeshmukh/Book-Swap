FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 8003

CMD ["node", "index.js"]

