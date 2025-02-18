import express, { Application, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';


const app: Application = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json()); // Para parsear o body das requisições como JSON
app.use(cors());

// Rota de exemplo (você irá adicionar as suas rotas aqui)
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('API está rodando!');
});

export default app;