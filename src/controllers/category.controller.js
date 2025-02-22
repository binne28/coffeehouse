const Category = require('../modules/Category.module');

const createCategory = async (req, res)=>{
    try {
        const {name} = req.body;
        const img_url = req.file ? `upload/${req.file.filename}`:null;
        if(!name || !img_url) return res.status(400).json({success: false, message: 'Name and image are required'});
        const category = Category.createCategory(name, img_url);
        return res.status(201).json({success: true, message: 'Create category successfully!', data: category.name});
    } catch (error) {
        console.error(error);
        return res.status(500).json({success: false});
    }
}

const getCategory = async (req, res)=>{
    try {
        const category = await Category.getCategory();
        return res.status(200).json({success: true, message: 'Get category successfully!!', data: category});
    } catch (error) {
        console.error(error);
        return res.status(500).json({success: false, message: 'Not found!!'})
    }
}


module.exports = {createCategory, getCategory};