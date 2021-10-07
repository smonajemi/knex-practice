import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/allRoutes.routes';
import dotenv from 'dotenv';

const router: Express = express();

/** Logging */
router.use(morgan('dev'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());


/** RULES OF OUR API */
router.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PUT DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
router.use('/', routes);

/** Success */
router.use('/', async (req, res, next) => {
    return res.status(200).json({
        success: 'Backend is working'
    });
});

/** Error handling */
router.use((req, res) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));