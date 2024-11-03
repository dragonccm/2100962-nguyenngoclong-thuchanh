
import RedisStore from 'connect-redis';
import { createClient } from 'redis';

const redisClient = createClient({
    password: 'LEwMIzfyN8JS5ohlmunGwj6sVirXafvu',
    socket: {
        host: 'redis-15567.c14.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 15567
    }
});

//check for connection
redisClient.on('connect', function () {
    console.log('Kết nối thành Redis công');
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

redisClient.connect();

export const redisStore = new RedisStore({
    client: redisClient,
    prefix: 'thuchanh:',
    ttl: 30 * 24 * 60 * 60, // 30 days (for "remember me")
});

export default redisClient;
