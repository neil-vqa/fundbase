import * as yup from "yup";

const newProjectFormSchema = yup.object({
  name: yup
    .string()
    .required("Required")
    .max(32, "Must be 32 characters or less"),
  description: yup
    .string()
    .required("Required")
    .max(128, "Must be 128 characters or less"),
});

const updateFundsFormSchema = yup.object({
  description: yup
    .string()
    .required("Required")
    .max(128, "Must be 256 characters or less"),
  amount: yup.number().required("Required"),
});

export { newProjectFormSchema, updateFundsFormSchema };
