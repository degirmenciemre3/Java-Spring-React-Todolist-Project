FROM node:17-alpine
WORKDIR /todolistdemofrontend
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"] 
