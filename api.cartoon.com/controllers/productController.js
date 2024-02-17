const Product = require('../models/Product');

const productController = {};

productController.addProduct = async (req, res) => {
    try {
        const {
            title,
            price,
            description,
            image,
            discount,
            inventory,
            brand,
            category,
            keywords,
            vendorId
        } = req.body;

        const keywordsArray = keywords.split(',');
        const newProduct = new Product({
            title,
            price,
            description,
            image,
            discount,
            inventory,
            brand,
            vendor: vendorId,
            category,
            keywords: keywordsArray,
        });

        await newProduct.save();

        // Set productId to the value of _id
        newProduct.productId = newProduct._id;

        return res.status(201).json({
            message: "Product added successfully",
            product: newProduct
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

productController.findByVendor = async (req,res) => {
    try
    {
    const vendor = req.body.vendor;
    const list = await Product.find({vendor: vendor});
    return res.status(200).json(list);
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"})
    }
}

productController.findByProductId = async (req,res) => {
    try
    {
    const {productId} = req.body;
    const product = await Product.findOne({productId: productId});
    return res.status(200).json(product);
    }catch(error)
    {
        return res.status(500).json({message: "Internal Server Error",error: error.message});
    }
}

productController.findProductsByCategory = async (req,res) => {
    try{
        const {category} = req.body;
        const data = await Product.find({category: category});
        return res.status(200).json(data);
    }catch(error)
    {
        return res.status(500).json({message: "Internal Server Error",error: error.message});
    }
}

productController.deleteProduct = async(req,res) => {
    const {productId} = req.body;
    const product = await Product.findOneAndDelete({productId})
    if(product) return res.status(200).json({message: "Product Deleted Succesfully"});
    else return res.status(404).json({message: "Product not fount"});
}

productController.updateProduct = async (req,res) => {
        const {
        productId,
        title,
        price,
        description,
        image,
        discount,
        inventory,
        brand,
        category,
        keywords,
        vendorId
    } = req.body;
    const product = await Product.findOne({productId});
    product.title = title;
    product.price = price;
    product.description = description;
    product.image = image;
    product.discount = discount;
    product.inventory = inventory;
    product.brand = brand;
    product.category = category;
    product.keywords = keywords;
    product.vendor = vendorId;
    await product.save();
    return res.status(200).json({message: "Updated Successfully"});
}

module.exports = productController;