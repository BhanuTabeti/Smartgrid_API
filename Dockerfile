FROM node:8-alpine

# Create app directory
RUN mkdir -p /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]
