import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpeciality = async (payload: Specialty): Promise<Specialty> => {
  const Speciality = await prisma.specialty.create({
    data: payload,
  });
  return Speciality;
};


const getAllSpecialities = async (): Promise<Specialty[]> => {
  const specialities = await prisma.specialty.findMany();
  return specialities;
};

const deleteSpeciality = async (id: string): Promise<Specialty> => {
  const Speciality = await prisma.specialty.delete({
    where: { id },
  });
  return Speciality;
};

const updateSpeciality = async (id: string, payload: Specialty): Promise<Specialty> => {
  const Speciality = await prisma.specialty.update({
    where: { id },
    data: payload,
  });
  return Speciality;
};


export const SpecialityService = {
  createSpeciality,
  getAllSpecialities,
  deleteSpeciality,
  updateSpeciality,
};
