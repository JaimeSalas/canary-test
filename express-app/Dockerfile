FROM alpine

RUN apk update

RUN apk upgrade

RUN apk add nodejs nodejs-npm

WORKDIR  /src

COPY . .

RUN npm i --production

CMD [ "npm", "start" ]