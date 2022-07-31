FROM node:16

WORKDIR /user/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5000

CMD ["npm", "start"]