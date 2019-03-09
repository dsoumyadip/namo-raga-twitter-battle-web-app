FROM node:8.14

LABEL maintainer="soumen"

RUN mkdir /app
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . /app

RUN npm run build

EXPOSE 8080
