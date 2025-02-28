import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mainRouter from './routers/index.js';

//! Variable d'environnement
const { NODE_ENV, PORT } = process.env;


//! Setup de la WebAPI
const app = express();


//! App Middleware
//? Logger
app.use(morgan('tiny'));

//? Cors
//* ↓ Acces autorisé pour tout le monde ♥
// app.use(cors());

//* ↓ Restriction sur le domaine
app.use(cors({
    origin: 'http://127.0.0.1:5500',
}))

//* ↓ Restriction sur le header
// app.use(cors({
//     allowedHeaders: ['Test']
// }));

//* ↓ Restriction mixe
// app.use(cors({
//     origin: 'http://127.0.0.1:5500',
//     allowedHeaders: ['Test', 'DigitalCity']
// }))

//? Body parser
app.use(express.json());


//! Routing
app.get('/api/example', (req, res) => {
    res.json({
        message: 'Hello DigitalCity'
    });
});

app.use('/api', mainRouter);


//! Demarrage
app.listen(PORT, () => {
    console.log(`WebAPI is running on port ${PORT} (${NODE_ENV})`);
});