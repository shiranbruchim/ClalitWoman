import * as yup from 'yup';

export const loginWithSMSSchema = yup.object().shape({
  idNumber: yup
    .number()
    .positive()
    .test('len', val => val?.toString().length === 9)
    .required(),
});
