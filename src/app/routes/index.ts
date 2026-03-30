import { Router } from "express";
import { specialityRouter } from "../module/speciality/speciality.router";

const router = Router();

router.use("/specialities",specialityRouter);

export const IndexRouter = router;