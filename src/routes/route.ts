import { Router } from 'express';
import {
    CreatePromotionController, CreateCategoryController, CreateProductController,
    CreateBrandController, CreateModelController, ConsultBrandController
} from '../controllers';

const router = Router();

router.post('/create-promotion', (req, res) => {
    new CreatePromotionController().handle(req, res)
})

router.post('/create-category', (req, res) => {
    new CreateCategoryController().handle(req, res)
})

router.post('/create-product', (req, res) => {
    new CreateProductController().handle(req, res)
})

router.post('/create-brand', (req, res) => {
    new CreateBrandController().handle(req, res)
})

router.post('/create-model', (req, res) => {
    new CreateModelController().handle(req, res)
})

router.post('/consult-brand', (req, res) => {
    new ConsultBrandController().handle(req, res)
})

export default router;