import User from "./user.model";

export async function createNewUser(data: {
  name: string;
  email: string;
}) {
  try {
    const newUser = await User.create(data);
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating new User.");
  }
}

export async function findUserById(UserId: number) {
    try {
      const user = await User.findByPk(UserId);
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Error while finding user by ID in database");
    }
  }


