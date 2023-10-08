const db = require('../config/connection');
const { User, Activity } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json'); // ->schoolData
const activityData = require('./activityData.json');  // -> classData

db.once('open', async () => {
  await cleanDB("User", "users");
  await cleanDB("Activity", "activities");

  const users = await User.create(userData);
  // console.log(users);
  let filtered_id = users.map(user=>user._id)

  console.log(activityData.length);
  for (let i=0; i< activityData.length; i++) {
    // console.log(newActivity)
    console.log(filtered_id);
    // remdomly adding activity to users
    const user_id = filtered_id[Math.floor(Math.random() * filtered_id.length)];
    console.log(user_id);
    let activity = activityData[i]
    activity['user_id'] = user_id
    await Activity.create(activity);

  // console.log('all done!');
  }
});
