FROM node:16.15.1
WORKDIR /usr/app

COPY package*.json ./

RUN npm install && npm fix audit

COPY . .

CMD [ "npm", "start" ]