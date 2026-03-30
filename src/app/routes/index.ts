import { Router } from "express";
import { specialityRouter } from "../module/speciality/speciality.router";
import { AuthRoutes } from "../module/auth/auth.router";
import { userRouters } from "../module/user/user.router";

const router = Router();

router.use("/specialities",specialityRouter);
router.use("/auth", AuthRoutes);
router.use("/doctors", userRouters);

export const IndexRouter = router;