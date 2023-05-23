FROM node:16 AS development

WORKDIR /usr/src/api

COPY package*.json .

RUN npm ci

COPY . .

CMD [ "npm", "run", "start" ]
