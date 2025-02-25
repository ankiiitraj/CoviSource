import 'reflect-metadata';
import 'dotenv-safe/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { ProviderResolver } from "./resolvers/Provider";
import { UserResolver } from './resolvers/User';
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { COOKIE_MAX_AGE, COOKIE_NAME, __prod__ } from './constants';
import { MyContext } from './types';
import { createConnection } from 'typeorm';
import config from './typeorm.config';
import cors from 'cors';
import { ResourceResolver } from './resolvers/Resource';
import { ContactResolver } from './resolvers/Contact';

const main = async () => {
    await createConnection(config);

    const app = express();

    const RedisStore = connectRedis(session);
    const redis = new Redis(process.env.REDIS_URL);

    app.set("trust proxy", 1);

    app.use(
        cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true,
        })
    );

    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({
                client: redis,
                disableTouch: true
            }),
            cookie: {
                maxAge: COOKIE_MAX_AGE,
                httpOnly: true,
                secure: __prod__,
                sameSite: 'lax',
                domain: __prod__ ? '.emperoryp.live' : undefined,
            },
            saveUninitialized: false,
            secret: process.env.SESSION_SECRET,
            resave: false,
        })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ProviderResolver, UserResolver, ResourceResolver, ContactResolver],
            validate: false,
        }),
        context: ({ req, res }): MyContext => ({ req, res, redis }),
    });

    apolloServer.applyMiddleware({
        app,
        cors: false,
    });

    app.listen(parseInt(process.env.PORT), () => {
        console.log("connected to DB!");
    });
};

main().catch((err) => {
  console.error(err);
});
