/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { DoctorService } from "./doctor.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponce";
import status from "http-status";

const getAllDoctors = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.getAllDoctors();

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctors fetched successfully",
    data: result,
  });
});

const getDoctorById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DoctorService.getDoctorById(id as string);

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctor fetched successfully",
    data: result,
  });
});

const deleteDoctorById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await DoctorService.deleteDoctorById(id as string);

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctor deleted successfully",
  });
});

const updateDoctorById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await DoctorService.updateDoctorById(id as string, data);

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctor updated successfully",
    data: result,
  });
});

export const DoctorController = {
  getAllDoctors,
  getDoctorById,
  deleteDoctorById,
  updateDoctorById,
};
