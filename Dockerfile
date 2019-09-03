FROM node:10-alpine

# create dir in container
RUN mkdir -p /home/servicetesting

WORKDIR /home/servicetesting

# copy app and dependencies
COPY . /home/servicetesting

# install dependecies
RUN npm install

# run
ENTRYPOINT ["npm", "run"]
CMD ["pre"]