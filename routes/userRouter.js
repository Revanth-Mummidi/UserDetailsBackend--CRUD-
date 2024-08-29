import { Router } from "express";
import { createUser, deleteUser, getSplitData, getUsers, updateUser } from "../controllers/userController.js";
const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.post('/', createUser);
userRouter.post('/split', getSplitData);
userRouter.delete('/:id', deleteUser);
userRouter.put('/:id', updateUser);

export default userRouter;