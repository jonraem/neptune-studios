FROM node:lts-alpine3.9
LABEL maintainer="Joni Rämö <joni.ramo.91@gmail.com>"

# App setup
RUN mkdir -p /app/src
WORKDIR /app/src

# Install dependencies
COPY package.json .
RUN npm install -g gatsby-cli
RUN npm install

# Bundle up app source
COPY . .

# Run app
EXPOSE 8000
CMD ["gatsby", "develop", "--host=0.0.0.0"]
