import { Router } from "express";
import { userController } from "./user.controller";
import { createDoctorZodSchema } from "./user.validation";
import { validateRequest } from "../../middleware/validateRequest";

const router = Router();

router.post("/create-doctor",validateRequest(createDoctorZodSchema),userController.createDoctor);
// router.post("/create-admin",userController.createDoctor);
// router.post("/create-super-admin",userController.createDoctor);

export const userRouters = router;