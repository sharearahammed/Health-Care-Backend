import { Router } from "express";
import { specialityRouter } from "../module/speciality/speciality.router";
import { AuthRoutes } from "../module/auth/auth.router";
import { userRouters } from "../module/user/user.router";
import { doctorRouters } from "../module/doctor/doctor.router";

const router = Router();

router.use("/specialities", specialityRouter);
router.use("/auth", AuthRoutes);
router.use("/users", userRouters);
router.use("/doctors", doctorRouters);

export const IndexRouter = router;
