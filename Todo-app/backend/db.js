/**
 * todo{
 * title: dtring;
 * description: string;
 * completed:boolesn
 * }
 */
const mongoose = require("mongoose");
const { date } = require("zod");
require('dotenv').config();
const dburl =process.env.MONGO_URL;
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dburl);
}
const todoSchema = new mongoose.Schema({
    title : String,
    description :String,
    datetime: {
        type: String,
        default: () => new Date().toISOString(), // Stores the current date and time as an ISO string
    },
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports ={todo}