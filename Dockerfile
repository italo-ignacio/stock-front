# build stage
FROM node:18.15.0-alpine3.16 as build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV VITE_API_URL $(APIURL)
ENV VITE_NODE_ENV $(NODEENV)
ENV VITE_CRYPTO_KEY $(CRYPTOKEY)

COPY package.json /app/package.json

RUN npm install -g npm@9.6.2

RUN npm install --silent --force

COPY . /app
RUN npm run build

# final stage 
FROM nginx:1.23.3-alpine
COPY --from=build /app/build /usr/share/nginx/html

ENV PORT 80
EXPOSE ${PORT}

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
