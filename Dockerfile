FROM node:lts-alpine

COPY . .
RUN yarn install

ENTRYPOINT ["node","index.js"]
