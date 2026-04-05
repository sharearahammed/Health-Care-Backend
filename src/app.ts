/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";
import { IndexRouter } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandeler";
import { notFound } from "./app/middleware/notFound";
import cookieParser from "cookie-parser";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser())

app.use("/api/v1", IndexRouter);

// Basic route
app.get("/", async (req: Request, res: Response) => {
  const speciality = await prisma.specialty.create({
    data: {
      title: "Cardiology",
    },
  });
  res
    .status(201)
    .json({ status: true, message: "API is working", data: speciality });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
