
FROM node:20.17.0-alpine AS  development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

EXPOSE 4000:4000


COPY . .

RUN npm run build

RUN apk add sqlite

RUN mkdir /data

WORKDIR /data

EXPOSE 3306

CMD ["sqlite3"]

FROM node:20.17.0-slim AS production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]


LABEL authors="juandavidgamboasaenz"

#ENTRYPOINT ["top", "-b"]

