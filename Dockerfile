FROM node:26-slim
WORKDIR /app
COPY package.json /app
COPY server.js /app
RUN npm install
CMD ["node","server.js"]