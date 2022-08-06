FROM node:16.15.1

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

CMD ["npm", "start"]