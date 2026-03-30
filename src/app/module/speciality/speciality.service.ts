import { speciality } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpeciality = async (payload: speciality): Promise<speciality> => {
  const speciality = await prisma.speciality.create({
    data: payload,
  });
  return speciality;
};


const getAllSpecialities = async (): Promise<speciality[]> => {
  const specialities = await prisma.speciality.findMany();
  return specialities;
};

const deleteSpeciality = async (id: string): Promise<speciality> => {
  const speciality = await prisma.speciality.delete({
    where: { id },
  });
  return speciality;
};

const updateSpeciality = async (id: string, payload: speciality): Promise<speciality> => {
  const speciality = await prisma.speciality.update({
    where: { id },
    data: payload,
  });
  return speciality;
};


export const specialityService = {
  createSpeciality,
  getAllSpecialities,
  deleteSpeciality,
  updateSpeciality,
};
