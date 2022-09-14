docker run \
-p 27017:27017 \
-v $PWD/configdb:/data/configdb \
-v mongo_db:/data/db \
--name mongo_27017 \
-d mongo 
