FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

