import React from "react";

export default function useForm(props) {
  const [values, setValues] = React.useState(props.initialValues);

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({ ...values, [name]: value });
    },
    clearForm() {
      setValues({});
    },
  };
}
