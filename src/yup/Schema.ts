import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

export const schemaReg = yup.object().shape({
  name: yup.string().required('nameRequired'),
  email: yup.string().email().required('emailRequired'),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email')], 'emails mismatch')
    .required('confirmEmailRequired'),
  password: yup.string().password().required('passwordRequired'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'passwordMismatch')
    .required('passwordConfirmRequired'),
});

export const schemaAuth = yup.object().shape({
  email: yup.string().email().required('emailRequired'),
  password: yup.string().password().required('passwordRequired'),
});
