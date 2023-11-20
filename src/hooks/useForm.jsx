import React, { useState } from "react";

export const useForm = ({ defaultValues, onSubmit, validate, require }) => {
  const [formData, setFormData] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });

    if (validate) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validate(name, value),
      }));
    }

    if (require && require[name]) {
      // Check if the field is required and value is empty
      if (!value || (Array.isArray(value) && value.length === 0)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "This field is required",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      }
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (validate) {
        const validationErrors = Object.entries(formData).reduce(
          (acc, [name, value]) => ({
            ...acc,
            [name]: validate(name, value),
          }),
          {}
        );
        setErrors(validationErrors);

        if (Object.values(validationErrors).some((error) => error)) {
          // If there are validation errors, do not submit the form
          return;
        }
      }

      if (require) {
        // Check for required fields
        const missingFields = Object.entries(require).filter(
          ([name, isRequired]) =>
            isRequired &&
            (!formData[name] ||
              (Array.isArray(formData[name]) && formData[name].length === 0))
        );

        if (missingFields.length > 0) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ...missingFields.reduce(
              (acc, [name]) => ({ ...acc, [name]: "This field is required" }),
              {}
            ),
          }));
          return;
        }
      }

      if (onSubmit) {
        await onSubmit(formData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setFormData(defaultValues);
    setErrors({});
  };

  const getValue = (name) => {
    return formData[name];
  };

  return {
    handleChange,
    handleSubmit,
    reset,
    formData,
    errors,
    getValue,
    loading,
  };
};
