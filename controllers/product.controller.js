const Product = require("../models/product.model");

exports.product_create = (req, res) => {
  function findSameName(item) {
    return item.name == req.body.name;
  }
  Product.find((err, products) => {
    if (err) return next(err);
    if (products.some(findSameName))
      res.send("product name is dublicated. enter correct name of product");
    else {
      let product = new Product({
        name: req.body.name,
        price: req.body.price
      });
      product.save(err => {
        if (err) return next(err);
        res.send("product created successfully");
      });
    }
  });
};

exports.product_details = (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    res.send(product);
  });
};

exports.product_update = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
    if (err) return next(err);
    res.send("product updated");
  });
};

exports.product_delete = (req, res) => {
  Product.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.send("deleted successfully");
  });
};

exports.show_all_products = (req, res) => {
  Product.find((err, products) => {
    if (err) return next(err);
    res.send(products);
  });
};
