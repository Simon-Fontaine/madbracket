import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const userResetPasswordSchema = z.object({
  email: z.string().email(),
});

export const userUpdatePasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    passwordConfirmation: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords must match",
    path: ["passwordConfirmation"],
  });

export const userAccountDeleteSchema = z.object({
  confirm: z.string().refine((data) => data === "DELETE", {
    message: "Please type DELETE to confirm",
  }),
});
