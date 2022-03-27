import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup.string().required("why not fill this email😀"),
  password: yup
    .string()
    .required("why not fill this password😀")
    .min(8, " Need a longer password")
    .max(15, "Too long password"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="email"
        name="email"
        placeholder="email"
      />
      <br />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}

      <br />
      <input
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="password"
        name="password"
        placeholder="password"
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <button type="submit">Submit</button>
    </form>
  );
}
