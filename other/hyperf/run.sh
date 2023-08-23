docker run --name hyperf \
-v /Users/zhu/www:/data/project \
-p 9501:9501 -it \
-p 9502:9502 -it \
-p 9503:9503 -it \
--privileged -u root \
--entrypoint /bin/sh \
hyperf/hyperf:8.0-alpine-v3.15-swoole