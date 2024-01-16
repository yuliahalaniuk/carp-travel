export const careerFormInputProps = [
  {
    inputName: "name",
    label: "Full name",
    validation: {
      required: true,
      minLength: 3,
      pattern: /^[a-zA-Z]+ [a-zA-Z]+$/i,
    },
    placeholder: "John Smith",
    id: 1,
  },
  {
    inputName: "email",
    inputType: "email",
    label: "E-mail",
    validation: {
      required: true,
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    },
    placeholder: "johnsmith@email.com",
    id: 2,
  },
  {
    inputName: "position",
    label: "Position",
    validation: { required: true },
    placeholder: "Movie maker",
    id: 3,
  },
  {
    inputName: "number",
    inputType: "tel",
    label: "Phone",
    validation: { required: true },
    placeholder: "+ 38 (097) 12 34 567",
    id: 4,
  },
];
