import { Router } from 'express';
import { createProduct } from './product.controller';
import { validateRequest } from '../../middleware/validateRequest';
import { productSchema } from './product.schema';

const router = Router();

router.post('/', validateRequest(productSchema), createProduct);

export default router;
