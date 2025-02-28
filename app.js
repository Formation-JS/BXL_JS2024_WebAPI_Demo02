import express from 'express';
import morgan from 'morgan';

//! Variable d'environnement
const { NODE_ENV, PORT } = process.env;

//! Setup de la WebAPI
const app = express();

//! App Middleware
app.use(morgan('tiny'));
app.use(express.json());

//! Routing
app.get('/api/example', (req, res) => {
    res.json({
        message: 'Hello DigitalCity'
    });
});

//! Demarrage
app.listen(PORT, () => {
    console.log(`WebAPI is running on port ${PORT} (${NODE_ENV})`);
});