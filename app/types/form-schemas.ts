import type { InferType } from "yup";

import { boolean, object, ref, string } from "yup";

export const LoginSchema = object({
  email: string().email().required().label("Email"),
  password: string().required().label("Password").min(8),
  tenant: string().required().label("Tenant").min(2),
  remember: boolean().optional().default(false),
});

export const SignUpSchema = object({
  name: string().required().label("Name").min(3).max(50),
  last_name: string().required().label("Name").min(3).max(50),
  email: string().email().required().label("Email"),
  password: string().required().label("Password").min(8),
  confirm_password: string()
    .required()
    .label("Password")
    .min(8)
    .oneOf([ref("password")], "Passwords must match"),
  tenant: string().required().label("Name").min(2).max(50),
  slug: string().required().label("Name").min(2).max(5),
  acceptTerms: boolean()
    .oneOf([true], "You must accept the terms to continue")
    .required(),
});

export type SignUpSchemaType = InferType<typeof SignUpSchema>;
export type LoginSchemaType = InferType<typeof LoginSchema>;
