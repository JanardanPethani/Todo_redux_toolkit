FROM node:16

WORKDIR /usr/src/client

COPY package*.json .

RUN npm install

COPY . .

CMD [ "sh", "-c", "npm", "start" ]
