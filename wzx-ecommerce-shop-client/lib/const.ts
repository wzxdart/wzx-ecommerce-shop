//@todo rename

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const HASH_SALT_ROUNDS = 10;

export const EMAIL_MIN_LENGTH = 4;
export const EMAIL_MAX_LENGTH = 254;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 254;

export const NAME_MIN_LENGTH = 3;
export const NAME_MAX_LENGTH = 254;

export const LOGIN_EMAIL_ERROR_MESSAGE = "email is required";
export const LOGIN_PASSWORD_ERROR_MESSAGE = "password is required";

export const LOGINSCHEMA_ERROR = "invalid field";
export const LOGINSCHEMA_SUCCESS = "success, code sent to email";

export const REGISTERSCHEMA_ERROR = "invalid field";
export const REGISTERSCHEMA_SUCCESS = "success, code sent to email";
export const REGISTER_USER_SUCCESS_MESSAGE = "user created successfully";
export const EXIST_USER_ERROR_MESSAGE = "user already exist";

export const INVALID_LOGIN_DATA_MESSAGE = "password or email is invalid";
export const UNDEFINED_LOGIN_ERROR_MESSAGE = "something went wrong";

export const EMAIL_REQUIRED_MESSAGE = "email is required";
export const PASSWORD_REQUIRED_MESSAGE = "password is required";
export const CONFIRM_PASSWORD_REQUIRED_MESSAGE = "confirm password is required";
export const NAME_REQUIRED_MESSAGE = "name is required";

export const PASSWORD_CONFIRM_ERROR_MESSAGE = "password not confirmed";
export const EMAIL_INVALID_MESSAGE = "email is invalid";

export const EMAIL_MIN_LENGTH_MESSAGE = `email min lenght is ${EMAIL_MIN_LENGTH}`;
export const PASSWORD_MIN_LENGTH_MESSAGE = `password min lenght is ${PASSWORD_MIN_LENGTH}`;

export const EMAIL_MAX_LENGTH_MESSAGE = `email max lenght is ${EMAIL_MAX_LENGTH}`;
export const PASSWORD_MAX_LENGTH_MESSAGE = `password max lenght is ${PASSWORD_MAX_LENGTH}`;

export const NAME_MIN_LENGTH_MESSAGE = `firstname min lenght is ${NAME_MIN_LENGTH}`;
export const NAME_MAX_LENGTH_MESSAGE = `firstname max lenght is ${NAME_MAX_LENGTH}`;
