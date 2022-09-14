docker run \
--name mysql_3306 \
-p 3306:3306 \
-v $PWD/conf:/etc/mysql/conf.d \
-v $PWD/logs:/logs \
-v $PWD/data:/mysql_data \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql \
--default-authentication-plugin=mysql_native_password
