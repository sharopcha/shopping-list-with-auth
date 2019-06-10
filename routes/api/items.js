const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(item => res.json(item))
});

// @route POST api/items
// @desc Create an item
// @access Public
router.post('/', (req, res) => {
    const { name, date } = req.body;
    const newItem = new Item({
        name,
        date
    }).save().then(item => res.json(item))
});

// @route DELETE api/items/:id
// @desc Create an item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;