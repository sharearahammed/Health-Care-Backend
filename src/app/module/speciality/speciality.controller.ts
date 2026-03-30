/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { specialityService } from "./speciality.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponce";

const createSpeciality = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await specialityService.createSpeciality(payload);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Speciality created successfully",
    data: result,
  });
});

const getAllSpecialities = catchAsync(async (req: Request, res: Response) => {
  const result = await specialityService.getAllSpecialities();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialities fetched successfully",
    data: result,
  });
});

const deleteSpeciality = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await specialityService.deleteSpeciality(id as string);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Speciality deleted successfully",
    data: result,
  });
});

const updateSpeciality = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await specialityService.updateSpeciality(
    id as string,
    payload,
  );
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Speciality updated successfully",
    data: result,
  });
});

export const specialityController = {
  createSpeciality,
  getAllSpecialities,
  deleteSpeciality,
  updateSpeciality,
};
