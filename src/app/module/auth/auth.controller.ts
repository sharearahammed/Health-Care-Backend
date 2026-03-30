import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponce";
import { AuthService } from "./auth.service";

const registerPatient = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await AuthService.regesterPatient(payload);

  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Patient registered successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await AuthService.loginUser(payload);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: result,
  });
});

export const AuthController = {
  registerPatient,
  loginUser,
};
