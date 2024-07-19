import prisma from "../config/database";
import { User } from '../interfaces/user';

/**
 * Function to get all users
 * @returns 
 */
const getAllUsersService = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

/**
 * Function to get a single user by ID
 * @param userId 
 * @returns 
 */
const getSingleUserService = async (userId: number): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { id: userId },
  });
};

/**
 * Function to delete a user
 * @param userId 
 * @returns 
 */

const deleteUserService = async (userId: number): Promise<void> => {
  try {
    await prisma.user.delete({
      where: { id: userId },
    });
    console.log(`User with ID ${userId} deleted successfully.`);
  } catch (error) {
    console.error(`Failed to delete user with ID ${userId}:`, error);
    throw new Error(`Unable to delete user with ID ${userId}`);
  }
};

// const deleteUserService = async (userId: number): Promise<void> => {
//   await prisma.user.delete({
//     where: { id: userId },
//   });
// };

export { getAllUsersService, getSingleUserService, deleteUserService };
