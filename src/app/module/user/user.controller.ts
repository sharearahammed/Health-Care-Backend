import status from "http-status";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponce";
import { UserService } from "./user.service";

const createDoctor = catchAsync(async (req, res) => {
  const payload = req.body;
  
  const result = await UserService.createDoctor(payload);

  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Doctor created successfully",
    data: result,
  });
});

export const userController = {
  createDoctor,
};
