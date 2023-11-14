let { Schema, model, Types } = require("mongoose");
const SyllabusSchema = require("./syllabusModel");

const CourseDetailSchema = new Schema(
  {
    name: String,
    instructor: String,
    description: String,
    enrollmentStatus: { type: String, enum: ["Open", "Closed", "In Progress"] },
    thumbnail: { type: String },
    duration: String,
    schedule: String,
    location: String,
    prerequisites: [String],
    syllabus: [SyllabusSchema],
    student: [
      {
        type: Schema.Types.ObjectId,
        ref: "student",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const CouserDetails = model("couseDetail", CourseDetailSchema);

module.exports = CouserDetails;
