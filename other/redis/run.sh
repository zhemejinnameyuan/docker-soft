docker run \
 --name redis_6379 \
 -p 6379:6379 \
 -v $PWD/data:/data \
 -d redis redis-server \
 --appendonly yes
