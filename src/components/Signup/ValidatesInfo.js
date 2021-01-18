export default function ValidatesInfo(values) {
  let errors = {};
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // If email input is empty
  // and must be in this format and contain @ and .
  if (!values.email) {
    errors.email = "Email required";
  } else if (!re.test(values.email)) {
    errors.email = "Not a valid email address!";
  }

  // Password validation
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more.";
  }

  // Password match validation
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Password does not match.";
  }

  return errors;
}
