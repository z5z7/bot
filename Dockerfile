# Target Google App Engine
FROM gcr.io/google-appengine/nodejs

WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . /app
RUN ["npm", "run", "grunt-build"]
EXPOSE 8080
CMD ["npm", "start"]
