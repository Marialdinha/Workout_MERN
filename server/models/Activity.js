const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  duration: [
    {
      type: String,
      trim: true,
    },
  ],
  date: [
    {
      type: String,
      required: true,
    },
  ],
  notes: [
    {
      type: String,
      trim: true,
    },
]
});

const Activity = model('Activity', activitySchema);

module.exports = Activity;
