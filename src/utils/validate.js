export const checkValidFormData = (email, password) => {
  const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmail) return "Please enter a valid email ID";

  if (!isPassword) return "Please enter a correct password";

  return null;
};
