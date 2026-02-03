import { Router } from "express";
import { createData, getAllData, getById, updateData, deleteData} from "../controllers/todo.controllers";



const router = Router();

router.route("/create-todo").post(createData)
router.route("/get-todo").get(getAllData)
router.route("/get-by-id/:todoId").get(getById)
router.route("/update-todo/:todoId").put(updateData)
router.route("/delete-todo/:todoId").delete(deleteData)


export default router