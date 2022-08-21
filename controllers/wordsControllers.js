import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import data from './data/data.js';

const getWords = async (req, res) => {
  const words = data;
  res.status(StatusCodes.OK).json(words);
};

export { getWords };
