import { useFormik } from 'formik';

export const useFormValidation = (values: { email: string }) => {
  type valuesFormTypes = {
    email: string;
  };

  const validate = () => {
    const errors = {} as valuesFormTypes;

    console.log(values);

    if (!values.email) {
      errors.email = 'Поле обязательно для заполнения';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Неправильный email';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (value) => {
      alert(JSON.stringify(value, null, 2));
    },
  });

  return { formik };
};
