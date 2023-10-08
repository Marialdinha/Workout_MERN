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
  user_id: {
    type: Schema.Types.ObjectId,
    references: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
  },
  notes: [
    {
      type: String,
      trim: true,
    },
  
]
});

const Activity = model('Activity', activitySchema);

module.exports = Activity;
