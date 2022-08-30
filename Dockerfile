FROM node:16
WORKDIR /wt-mevn
COPY ./backend/package.json .
RUN npm install
COPY . .
CMD npm start