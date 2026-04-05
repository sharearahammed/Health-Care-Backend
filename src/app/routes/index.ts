import { Router } from "express";
import { specialityRouter } from "../module/speciality/speciality.router";
import { AuthRoutes } from "../module/auth/auth.router";
import { userRouters } from "../module/user/user.router";
import { doctorRouters } from "../module/doctor/doctor.router";
import { AdminRoutes } from "../module/admin/admin.route";

const router = Router();

router.use("/specialities", specialityRouter);
router.use("/auth", AuthRoutes);
router.use("/users", userRouters);
router.use("/doctors", doctorRouters);
router.use("/admins", AdminRoutes)
// router.use("/schedules", scheduleRoutes)
// router.use("/doctor-schedules", DoctorScheduleRoutes)
// router.use("/appointments", AppointmentRoutes)


export const IndexRouter = router;
