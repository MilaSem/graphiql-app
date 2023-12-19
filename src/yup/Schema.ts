import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

export const schemaReg = yup.object().shape({
  name: yup.string().required('enter your name'),
  email: yup
    .string()
    .email()
    .min(8, 'minimum 8 symbols')
    .minNumbers(1, 'at least one digit')
    .minLowercase(1, 'at least one letter')
    .minSymbols(1, 'at least one special character')
    .required('enter your email'),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email')], 'emails mismatch')
    .required('confirm your email'),
  password: yup.string().password().required('enter password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'passwords mismatch')
    .required('confirm password'),
});

export const schemaAuth = yup.object().shape({
  email: yup
    .string()
    .email()
    .min(8, 'minimum 8 symbols')
    .minNumbers(1, 'at least one digit')
    .minLowercase(1, 'at least one letter')
    .minSymbols(1, 'at least one special character')
    .required('enter your email'),
  password: yup.string().password().required('enter password'),
});
