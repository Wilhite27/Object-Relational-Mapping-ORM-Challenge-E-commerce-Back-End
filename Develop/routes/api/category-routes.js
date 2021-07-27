const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
console.log('======================');
Category.findAll({
  include: [
    Product,
      {
        model: Tag,
        through: ProductTag,
      },
  ],
})
  .then((products) => res.json(products))
  .catch((err) => {
    res.status(400).json(err);

  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
