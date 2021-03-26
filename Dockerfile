#use existing image
FROM node:lts-alpine

#copy all data in the context to the image
COPY . .

#run a command to fulfill the app dependencies
RUN yarn install

#run this command when running a container from this image
ENTRYPOINT ["node","index.js"]
