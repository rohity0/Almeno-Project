let { Schema, model } = require("mongoose");

const StudentSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Students = model("student", StudentSchema);

module.exports = {
  StudentSchema,
  Students,
};
