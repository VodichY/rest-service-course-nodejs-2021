import * as usersRepo from './user.memory.repository';
import { User } from './user.model';

const getAllUsers = () => usersRepo.getAllUsersRep() as Promise<User[]>;

const getUserById = (userId: string) => usersRepo.getUserByIdRep(userId);

const createUser = (user: { [key: string]: string }) => usersRepo.createUserRep(user);

const updateUser = (userId: string, user: string) => usersRepo.updateUserRep(userId, user);

const deleteUser = (userId: string) => usersRepo.deleteUserRep(userId);

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
