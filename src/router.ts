import { Router } from 'express';

const router = Router();

router.get('/teste', (request, response) => {
  response.send('olá');
});

export { router };
