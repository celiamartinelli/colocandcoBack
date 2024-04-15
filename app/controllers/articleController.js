import { articleDataMapper } from "../datamappers/index.js";

const articleController = {

  getArticlesFromShoplist: async (req, res) => {
    console.log(req.user.colocId);
    const { result, error } = await articleDataMapper.getArticles(req.user.colocId);

    if (error) {
      console.log(error);
    } else {
      res.json(result);
      console.log(result);
    }
  },

  addArticleToShoplist: async (req, res) => {
    console.log('articleController :', req.params.coloc_id, req.body);
    const { result, error } = await articleDataMapper.addArticle(
      req.params.coloc_id,
      req.body,
    );

    if (error) {
      console.log(error);
    } else {
      res.json(result);
      console.log(result);
    }
  },

  modifyArticleFromShoplist: async (req, res) => {
    console.log(req.params.coloc_id, req.params.article_id);
    const { result, error } = await articleDataMapper.modifyArticle(
      req.params.coloc_id,
      req.params.article_id,
      req.body,
    );

    if (error) {
      console.log(error);
    } else {
      res.status(200).json(result);
      console.log('Article succesfully updated ! => ', result);
    }
  },

  deleteArticleFromShoplist: async (req, res) => {
    console.log('articleController', req.params.article_id);
    const { result, error } = await articleDataMapper.deleteArticle(

      req.params.article_id,
    );

    if (error) {
      console.log(error);
    } else {
      res.json(result);
      console.log('Article successfully deleted!', result);
    }
  },
};

export default articleController;
