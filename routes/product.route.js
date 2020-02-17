const express = require("express");
const router = express.Router();

//TODO add route to show all products
const product_controller = require("../controllers/product.controller");
router.post("/create", product_controller.product_create);
router.get("/:id", product_controller.product_details);
router.put("/:id/update", product_controller.product_update);
router.delete("/:id/delete", product_controller.product_delete);
router.get("/", product_controller.show_all_products);

module.exports = router;
