const express = require('express');
const { Op } = require("sequelize");

const Product = require("../database/models/product");

const router = express.Router();

router.get('/',async (req, res) =>{
    const products = await Product.findAll({
        where: {
            discont_price: {
                [Op.gt]: 0
            }
        }
    });

    return res.json(products);
})

router.post('/', (req, res) => {
    return res.json({status: 'OK', message: 'request processed'})
})


module.exports = router;