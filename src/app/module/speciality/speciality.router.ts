import { Router } from "express";
import { specialityController } from "./speciality.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { SpecialtyValidation } from "./specialty.validation";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post("/",specialityController.createSpeciality);
router.post('/', 
    // checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
    // multerUpload.single("file"), 
    validateRequest(SpecialtyValidation.createSpecialtyZodSchema),
    specialityController.createSpeciality);
router.get("/",specialityController.getAllSpecialities);
router.delete("/:id",specialityController.deleteSpeciality);
router.patch("/:id",specialityController.updateSpeciality);

export const specialityRouter = router;