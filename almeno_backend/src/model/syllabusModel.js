let { Schema } = require("mongoose");

const SyllabusSchema = Schema(
  {
    week: String,
    topic: String,
    content: String,
  },
  { _id: false }
);

module.exports = SyllabusSchema;
