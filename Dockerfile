FROM node:6-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY out /app/out

EXPOSE 8080
CMD ["node", "out/www.js"]
