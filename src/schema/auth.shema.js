import { z } from "zod";

export const registerShema = z.object({
  nameUser: z.string({
    required_error: "name user required",
  }),
  groupUser: z.number({
    required_error: "group user required",
  }),
  addressUser: z.string({
    required_error: "address user required",  
  }),
  emailUser: z
    .string({
      required_error: "email user required",
    })
    .email({
      message: "invalid email",
    }),
  passwordUser: z
    .string({
      required_error: "password user required",
    })
    .min(10, {
      message: "password must be at least 10 characters",
    }),
  idUser: z.number({
    required_error: "id user must be a number",
  }),
});

export const loginShema = z.object({
  emailUser: z
    .string({
      required_error: "email user required",
    })
    .email({
      message: "invalid email",
    }),
  passwordUser: z
    .string({
      required_error: "password user required",
    })
    .min(10, {
      message: "password must be at least 10 characters",
    }),
});
