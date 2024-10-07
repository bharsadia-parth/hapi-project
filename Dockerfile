FROM node:20-alpine

# Install build dependencies
RUN apk add --no-cache --virtual .gyp python3 make g++ 

WORKDIR /usr/src/app

COPY package.*.json ./



COPY . .

RUN npm i

EXPOSE 8082

CMD [ "npm", "start" ]