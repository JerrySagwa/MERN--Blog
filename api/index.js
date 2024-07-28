import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

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
  console.log(`Server running on port ${PORT}`);
});
app.use(express.json()); // 解析 JSON 格式的请求体
app.use(express.urlencoded({ extended: true })); // 解析 URL 编码的请求体
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
