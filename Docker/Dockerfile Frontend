FROM node:16.15.1

# set working directory
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# start app
CMD ["npm", "run", "serve"]