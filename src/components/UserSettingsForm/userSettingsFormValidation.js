import * as yup from 'yup'

export const userSchema = yup.object({
    name: yup.string()
        .required('Please enter your name')
        .min(2, 'Name should contain at least 2 symbols')
        .max(20, 'Name is too long'),
    email: yup.string()
        .required('Email is required')
        .min(5, 'Email is too short')
        .max(40, 'Email is too long')
        .matches('@', 'Email should contain @ sign'),
  weight: yup.number()
        .typeError('For rfaction number use . instead of ,')
        .transform((_, inputValue)=> inputValue === '' ? 0 : Number(inputValue))
        .min(0, 'Weight should be more than 10 kg')
        .max(300, 'Maximum weight for this calculation can be 300 kg')
        .optional(),
  time: yup.number()
        .typeError('For rfaction number use . instead of ,')
        .transform((_, inputValue)=> inputValue === '' ? 0 : Number(inputValue))
        .nullable()
        .min(0)
        .max(24, 'There`s only 24 hours in your day..')
        .optional(),
  liters: yup.number()
        .typeError('For rfaction number use . instead of ,')
        .min('0', 'Enter a valid number here')
        .max('10', 'We doubt you will drink more than 10 liters')
      .required('This field is important too!'),
  avatar: yup.mixed()
})

export const validateInput = (key, value) => {
    const inputSchema = yup.reach(userSchema, `${key}`)

    return inputSchema.validate(`${value}`)
}
