# Ubuntu
FROM ubuntu:16.04

LABEL maintainer="suraj.verma2019@vitstudent.ac.in"

# Install Node and NPM
RUN apk add --update nodejs npm curl

# Copy app to /src
COPY . /src

WORKDIR /src

# Install dependencies
RUN  npm install

EXPOSE 8080

ENTRYPOINT ["node", "./app.js"]
