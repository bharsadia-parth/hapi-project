FROM node:slim

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 8082

CMD [ "npm", "run", "dev" ]