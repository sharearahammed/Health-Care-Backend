import { Router } from "express";
import { DoctorController } from "./doctor.controller";
import { updateDoctorZodSchema } from "./doctor.validation";
import { validateRequest } from "../../middleware/validateRequest";

const router = Router();

router.get("/", DoctorController.getAllDoctors);
router.get("/:id", DoctorController.getDoctorById);
router.patch(
  "/:id",
  validateRequest(updateDoctorZodSchema),
  DoctorController.updateDoctorById,
);
router.delete("/:id", DoctorController.deleteDoctorById);

export const doctorRouters = router;
