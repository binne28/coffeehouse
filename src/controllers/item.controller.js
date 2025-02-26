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

const deletedItem = async (req, res)=>{
    try {
        const {id} = req.params;
        const item = await Item.deleted(id);
        if(!item) return res.status(400).json({success: false, message: 'Item not found!'});
        return res.status(200).json({success: true, message: 'Deleted item successfully!'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({success: false, message: message.error});
    }
}

const getItem = async (req, res)=>{
    try {
        const item = await Item.getItem();
        return res.status(200).json({success: true, message: 'Get item successfully!', data: item});
    } catch (error) {
        console.error(error);
        return res.status(500).json({success: false, message: message.error});
    }
}

const updated = async (req, res)=>{
    try {
        const {id} = req.params;
        const data = {name, price, img_url, description};
        const item = await Item.updateItem(id, data);
        if(!item) return res.status(400).json({success: false, message: 'Update unsucessfully!'});
        return res.status(200).json({success: true, message: 'Update successfully!!'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({success: false, message: error.message});
    }
}

module.exports = {created, getItem, deletedItem, updated};