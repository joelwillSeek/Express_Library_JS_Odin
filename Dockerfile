FROM node:20

WORKDIR /app

COPY . /app/

RUN npm install

CMD [ "npm","start" ]

ENV NODE_ENV=production