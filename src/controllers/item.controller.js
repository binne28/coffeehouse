const Item = require('../modules/Item.module');

const created = async (req, res) => {
    console.log("Received request body:", req.body);
    console.log("Received file:", req.file);
    try {
        const {name, price, description, category_id} = req.body;
        const categoryId = category_id; // Chuyển đổi đúng tên
        const img_url = req.file ? `upload/${req.file.filename}`:null;
        if(!name ||!price || !description || !img_url || !categoryId) return res.status(400).json({success: false, message: 'Name, price, description and img required'});
        const item = await Item.createItem(name, price, img_url, description, categoryId);
        return res.status(201).json({success: true, message: 'Created item successfully!!', data: item.name});
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: console.error(error)
        })
    }
}

module.exports = {created};