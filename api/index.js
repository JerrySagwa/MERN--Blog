import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

const { MONGODB_URL, PORT } = process.env;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB~');
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();
app.use(express.json()); // 解析 JSON 格式的请求体
app.use(express.urlencoded({ extended: true })); // 解析 URL 编码的请求体
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})
