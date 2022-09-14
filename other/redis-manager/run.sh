sudo docker run -d   --name redis-manager  \
-p 8182:8182 \
-e DATASOURCE_DATABASE='redis-manager-test' \
-e DATASOURCE_URL='jdbc:mysql://127.0.0.1:3306/redis-manager-test?useUnicode=true&characterEncoding=utf-8&serverTimezone=GMT%2b8' \
-e DATASOURCE_USERNAME='root' \
-e DATASOURCE_PASSWORD='root' \
reasonduan/redis-manager


