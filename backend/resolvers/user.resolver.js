import { users } from "../dummyData/data.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

const userResolver = {
  Query: {
    users: () => {
      return users;
    },
    user: (_, { userId }) => {
      return users.find((user) => user._id === userId);
    },
  },

  Mutation: {
    signup: async (_, { input }, context) => {
      try {
        const { username, name, password, gender } = input;
        if (!username || !name || !password || !gender) {
          throw new Error("All fieds are required");
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
          throw new Error("User already exists");
        }

        const salt = await bcrypt.genSalt(10);
        const hssPassword = await bcrypt.hash(password, salt);

        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username${username}`;
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username${username}`;

        const newUser = new User({
          username,
          name,
          password: hssPassword,
          gender,
          profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        await newUser.save();
        await context.login(newUser);
        return newUser;
      } catch (error) {
        console.error("Error in signup", error);
        throw new Error(error.message || "Internal server error");
      }
    },
    login: () => 
  },
};

export default userResolver;
