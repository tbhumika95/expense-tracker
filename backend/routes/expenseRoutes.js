const express = require("express");
const router = express.Router();

const Expense = require("../models/Expense");

router.post("/" , async(req , res)=> {
    try{
        const expense = await Expense.create(req.body);

        res.status(201).json(expense);
    } catch(error){
        res.status(500).json({
            message : error.message,
        });
    }
});

module.exports = router;