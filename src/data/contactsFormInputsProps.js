export const contactsFormInputsProps = [
  {
    inputName: "name",
    placeholder: "John Smith",
    label: "Full name",
    validation: {
      required: true,
      pattern: /^[a-zA-Z]+ [a-zA-Z]+$/i,
    },
    id: 1,
  },
  {
    inputName: "email",
    inputType: "email",
    placeholder: "support@carptravel.com",
    label: "E-mail",
    validation: {
      required: true,
      minLength: 3,
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    },
    id: 2,
  },
];
