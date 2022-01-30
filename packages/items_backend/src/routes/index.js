import express from 'express';
import items from '../fixtures/items';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) =>
  res.status(200).json(items)
);

export default indexRouter;