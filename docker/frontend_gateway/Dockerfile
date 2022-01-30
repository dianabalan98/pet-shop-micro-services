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
COPY ./packages/frontend_gateway ./packages/frontend_gateway

# "lerna boostrap" will install all packages of frontend_gateway
RUN npx lerna bootstrap
# compile backend
RUN npm run build:frontend_gateway

EXPOSE 3000
CMD [ "npm", "--prefix", "packages/frontend_gateway", "start" ]