const db = require('../config/connection');
const { User, Activity } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json'); // ->schoolData
const activityData = require('./activityData.json');  // -> classData

db.once('open', async () => {
  await cleanDB("User", "users");
  await cleanDB("Activity", "activities");

  const users = await School.create(userData);
  const activities = await Class.create(activityData);


  for (newClass of classes) {
    // randomly add each class to a school
    const tempSchool = schools[Math.floor(Math.random() * schools.length)];
    tempSchool.classes.push(newClass._id);
    await tempSchool.save();

    // randomly add a professor to each class
    const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
    newClass.professor = tempProfessor._id;
    await newClass.save();

    // reference class on professor model, too
    tempUser.users.push(newClass._id);
    await tempProfessor.save();
  }

  console.log('all done!');
  process.exit(0);
});
