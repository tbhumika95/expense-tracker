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

router.get("/" , async(req, res) => {
    try{
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    }
    catch(error){
        res.status(500).json({
            message : error.message,
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json(deletedExpense);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

module.exports = router;