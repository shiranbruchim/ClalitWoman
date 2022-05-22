import * as yup from 'yup';

export const loginWithSMSSchema = yup.object().shape({
  CodeNumber: yup
    .number()
    .positive()
    .test('len', val => val?.toString().length === 4)
    .required(),
});
