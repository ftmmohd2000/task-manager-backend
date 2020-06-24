const { Schema, model } = require("mongoose");
const validator = require("validator");

const taskSchema = new Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const Task = model("Task", taskSchema);

module.exports = Task;
