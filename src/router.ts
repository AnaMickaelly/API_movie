import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const router = Router();

router.get('/teste', (req, res) => {
  const { name, email } = req.body;

  const response = {
    name,
    email,
    id: uuid(),
  };

  return res.json(response);
});

export { router };
