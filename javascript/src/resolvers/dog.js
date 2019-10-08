import { Dog } from "models";

export const dog = {
  Query: {
    dogs: () => Dog.find()
  },
  Mutation: {
    createDog: async (_, { name }) => {
      const puppy = new Dog({ name });
      await puppy.save();
      return puppy;
    }
  }
};
