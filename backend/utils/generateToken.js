import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' }); // tambahkan JWT_SECRET di .env file
};

export default generateToken;
