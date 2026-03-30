import { Speciality } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpeciality = async (payload: Speciality): Promise<Speciality> => {
  const Speciality = await prisma.speciality.create({
    data: payload,
  });
  return Speciality;
};


const getAllSpecialities = async (): Promise<Speciality[]> => {
  const specialities = await prisma.speciality.findMany();
  return specialities;
};

const deleteSpeciality = async (id: string): Promise<Speciality> => {
  const Speciality = await prisma.speciality.delete({
    where: { id },
  });
  return Speciality;
};

const updateSpeciality = async (id: string, payload: Speciality): Promise<Speciality> => {
  const Speciality = await prisma.speciality.update({
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
