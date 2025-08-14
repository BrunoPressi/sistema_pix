// @ts-ignore
import express, {Request, Response} from 'express';

const app:express = express();

app.get("/hello", (req:Request, res:Response) => {
    res.statusCode=200;
    res.statusMessage='Requisição Recebida';
    res.send('Requisição GET');
});

app.listen(4000, () => {console.log('Estou ouvindo....')});