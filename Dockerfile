FROM node:8.14

LABEL maintainer="soumen"

RUN mkdir /app
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . /app

# General
ENV NODE_ENV production
ENV NODE_PATH src/
ENV SERVER_PORT 8080

# React app veriables
ENV REACT_APP_API_URL http://localhost:8080
ENV REACT_APP_API_ROUTE graphql
ENV GENERATE_SOURCEMAP false

RUN npm run build

EXPOSE 8080

# CMD [ "npm", "run", "server" ]