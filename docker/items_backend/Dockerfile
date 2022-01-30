FROM node:14-alpine

# # Create app directory
ENV APP_PATH /pet-shop-micro-services
WORKDIR $APP_PATH

# Copy package*.json and lerna.json to /pet-shop-micro-services
COPY ./package*.json ./
COPY ./lerna.json ./

# install lerna local
RUN npm install

# Bundle app source
COPY ./packages/items_backend ./packages/items_backend

# "lerna boostrap" will install all packages of items_backend
RUN npx lerna bootstrap
# compile backend
RUN npm run build:items_backend

EXPOSE 8001
CMD [ "npm", "--prefix", "packages/items_backend", "start" ]