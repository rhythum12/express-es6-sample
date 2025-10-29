import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('My Student ID is 21996148. Welcome to Express');
 });

export default router;
