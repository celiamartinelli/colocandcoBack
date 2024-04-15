import { Router } from 'express';
import { articleController, authController } from '../controllers/index.js';

const router = Router();

router.get('/', authController.verifyToken, articleController.getArticlesFromShoplist);
router.post('/:coloc_id', articleController.addArticleToShoplist);
router.patch('/', articleController.modifyArticleFromShoplist);
router.delete('/:article_id', articleController.deleteArticleFromShoplist);

export default router;
