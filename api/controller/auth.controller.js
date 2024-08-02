import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    next(errorHandler(400, 'All fields are required.'));
  }
  const hashPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successfully!');
  } catch (e) {
    next(e);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(errorHandler(400, 'All fields are required!'));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler(404, 'User not found!'));
      return;
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      next(errorHandler(400, 'Wrong password!'));
      return;
    }
  
    const token =  jwt.sign(
      {id: validUser._id}, process.env.JWT_SECRET
    )

    res.status(200).cookie('access_token', token, {httpOnly: true})
                  .json(validUser);
  } catch (error) {
    next(error);
  }
};
