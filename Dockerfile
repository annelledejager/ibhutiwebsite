# Base image
FROM node:9.5

# Set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# Start app
CMD ["npm", "start"]
