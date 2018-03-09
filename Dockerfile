# Starting from one of the official node images
FROM node:6.10-alpine

RUN mkdir -p /home/web

# Copy all source files
#COPY *.html /home/web/
COPY public /home/web/public/
COPY src /home/web/src/
COPY *.json /home/web/

WORKDIR "/home/web"

# Run npm install
RUN npm install

# Sets entry point when the container starts to run the webpack dev server
ENTRYPOINT npm run start
