import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'

const { MONGODB_URL, PORT } = process.env;

const app = express();
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB~');
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log('Server running on port 3000');
});

app.use(
  '/api/user',
  userRoutes
);
