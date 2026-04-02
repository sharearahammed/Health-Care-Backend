/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../lib/prisma";

const getAllDoctors = async () => {
  const doctors = await prisma.doctor.findMany({
    include: {
      user: true,
      specialties: {
        include: { specialty: true },
      },
    },
  });
  return doctors;
};

const getDoctorById = async (id: string) => {
  const doctor = await prisma.doctor.findUnique({
    where: { id, isDeleted: false },
    include: {
      user: true,
      specialties: {
        include: { specialty: true },
      },
    },
  });
  return doctor;
};

const updateDoctorById = async (id: string, data: any) => {
  const doctor = await prisma.doctor.update({
    where: { id, isDeleted: false },
    data,
  });
  return doctor;
};

const deleteDoctorById = async (id: string) => {
  await prisma.doctor.delete({
    where: { id, isDeleted: false },
  });
};

export const DoctorService = {
  getAllDoctors,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById,
};
