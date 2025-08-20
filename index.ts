// @ts-ignore
import express, {Request, Response} from 'express';

const app= express();
app.use(express.json());

app.get("/usuarios/:id", (req:Request, res:Response) => {
    const userId = req.params.id;
    res.statusCode=200;
    res.statusMessage='Requisição Recebida';
    res.json({
        "id": userId
    });
});

app.listen(4000, () => {console.log('Estou ouvindo....')});