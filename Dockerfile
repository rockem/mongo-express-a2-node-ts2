FROM node:7.5-alpine

ADD dist/ /opt/app/dist/
ADD package.json /opt/app/

WORKDIR /opt/app

RUN npm install --production

EXPOSE 3000

ENTRYPOINT npm run start



