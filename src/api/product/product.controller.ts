import { Request, Response } from 'express';
import { Product } from './product.schema';

const products: Product[] = [];

export const createProduct = (req: Request, res: Response) => {
  const { title, price, description, category, image } = req.body as Product;

  const newProduct: Product = {
    title,
    price,
    description,
    category,
    image,
  };

  products.push(newProduct);

  res.status(201).json({
    message: 'Product created successfully',
    product: newProduct,
  });
};
