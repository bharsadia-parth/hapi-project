FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.*.json ./

COPY . .

RUN npm i

EXPOSE 8082

CMD [ "npm", "start" ]