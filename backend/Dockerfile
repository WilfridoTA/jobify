FROM node:20

WORKDIR /app

COPY package*.json .

RUN apt-get update
RUN apt-get install -y python3 python3-pip
RUN pip3 install -U python-jobspy --break-system-packages
RUN npm install 

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]