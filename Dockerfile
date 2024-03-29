# use a slimmer alpine image to consume less memory
# https://viralganatra.com/docker-nodejs-production-secure-best-practices/
FROM node:20-alpine

WORKDIR /app

# install deps first so we can cache them
COPY package*.json ./
RUN npm ci && npm cache clean --force

# build the app
COPY . .
RUN mkdir dist
RUN npm run build

CMD ["node", "./dist/server.mjs"]

