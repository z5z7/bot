FROM node:6-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY out /app/out

ENV MONGO_DB_HOST=35.196.93.217
ENV MONGO_DB_NAME=hsbc-db
ENV MONGO_DB_USER=hsbc-develop
ENV MONGO_DB_PASS=chatbotcity

EXPOSE 8080
CMD ["node", "out/www.js"]
