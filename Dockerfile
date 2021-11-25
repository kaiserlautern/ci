FROM node:17-alpine3.12
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install jest
COPY . .

CMD [ "npm", "run", "test" ]

