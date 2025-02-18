import 'dotenv/config';
import app from './app';
import { PrismaClient } from '@prisma/client';

const port = process.env.PORT || 3000;

export const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log('Conexão com o banco de dados estabelecida!');

    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });