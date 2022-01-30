import express from 'express';

const indexRouter = express.Router();

indexRouter.post('/', (req, res) => {
  console.log(req.body);

  res.status(200).json("Successfully called the checkout endpoint");
});

export default indexRouter;