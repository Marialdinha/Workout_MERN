const { User } = require('../models');
const { Activity } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          '-__v -password'
        );
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },

    activities: async () => {
      return Activity.find();
    },

    activity: async (parent, { activityId }) => {
      return Activity.findOne({ _id: activityId });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    addActivity: async (parent, { input }, context) => {
      if (context.addActivity) {
        const updatedActivity = await Activity.findOneAndUpdate(
          { _id: context.acivity._id },
          { $addToSet: { savedActivities: input } },
          { new: true, runValidators: true }
        );
        return updatedActivity;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeActivity: async (parent, { _id }, context) => {
      if (context.activity) {
        const updateActivity = await Activity.findOneAndUpdate(
          { _id: context.activity._id },
          { $pull: { savedActivities: { _id } } },
          { new: true }
        );
        return updatedAcivities;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateActivity: async (parent, { _id, input }, context) => {
      if (context.user) {
        try {
          const user = await Activity.findOne({ _id: context.removeActivity._id });
          if (!user) {
            throw new AuthenticationError('User not found');
          }  
          const activityIndex = user.activities.findIndex(
            (activity) => activity._id.toString() === _id
          );
          if (activityIndex === -1) {
            throw new Error('Activity not found');
          }
          user.activities[activityIndex] = {
            ...user.activities[activityIndex],
            ...input,
          };
          const updatedActivity = await activity.save();
  
          return updatedActivity;
        } catch (error) {
          throw new Error(`Error updating activity: ${error.message}`);
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};


module.exports = resolvers;
