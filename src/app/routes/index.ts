import { Router } from "express";
import { specialityRouter } from "../module/speciality/speciality.router";
import { AuthRoutes } from "../module/auth/auth.router";

const router = Router();

router.use("/specialities",specialityRouter);
router.use("/auth", AuthRoutes);

export const IndexRouter = router;