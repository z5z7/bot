FROM node:6-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . /app
RUN ["npm", "run", "grunt-build"]
EXPOSE 8080
CMD node out/www.js