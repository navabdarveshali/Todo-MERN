const express = require("express");
const { createTodo, updateTodo , deleteTodo} = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
// const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
// app.use(mongoose);

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});

    res.json(todos);

})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.findOneAndUpdate(
        {
        _id: req.body.id
    }, {
      completed: true  
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.delete("/delete", async function (req, res) {
   const deletePayload = req.body;
   const parsedPayload = deleteTodo.safeParse(deletePayload);
   if (!parsedPayload.success) {
    res.status(411).json({
        msg: "You sent the wrong inputs",
    })
    return;
}
await todo.findByIdAndDelete(
    {
    _id: req.body.id
})

res.json({
    msg: "Todo is deleted"
})
})

app.listen(3000);
console.log("listening port:3000");
