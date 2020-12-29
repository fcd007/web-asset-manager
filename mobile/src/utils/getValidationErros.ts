import { ValidationError } from 'yup';

interface errorValidationProps {
  [key: string]: string;
}

export default function getValitdationErros(
  err: ValidationError,
): errorValidationProps {
  const validationErrors: errorValidationProps = {};

  err.inner.forEach(element => {
    validationErrors[element.path] = element.message;
  });

  return validationErrors;
}
