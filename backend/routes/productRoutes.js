const express = require('express')
const router = express.Router()
const { getAllProduct, getProductByID } = require('../controller/productController')

// Get all product from db
// GET /api/products
router.get('/',
    getAllProduct)

// Get a product from db by ID
// GET /api/products/:id
router.get('/:id',
    getProductByID
)

module.exports = router