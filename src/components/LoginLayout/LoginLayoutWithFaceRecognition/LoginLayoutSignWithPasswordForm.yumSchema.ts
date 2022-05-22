import {Strings} from 'common/Theme/Strings';
import * as yup from 'yup';

export const loginWithPasswordSchema = yup.object().shape({
  idNumber: yup
    .number()
    .positive()
    .test(
      'len',
      (id: any) =>
        Array.from(id.toString(), Number).reduce((counter, digit, i) => {
          const step = digit * ((i % 2) + 1);
          return counter + (step > 9 ? step - 9 : step);
        }) %
          10 ===
        0,
    )
    .required(),
  userCode: yup
    .string()
    .min(7, Strings('login.schema.wrongUserCodePleaseTryAgain'))
    .max(7, Strings('login.schema.wrongUserCodePleaseTryAgain'))
    .required(),
  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(/^[\w]*$/)
    .required(),
});
