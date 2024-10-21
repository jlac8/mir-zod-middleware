import { Application } from 'express';
import productRouter from './api/product';

function routes(app: Application): void {
  app.use('/api/products', productRouter)
}

export default routes;
