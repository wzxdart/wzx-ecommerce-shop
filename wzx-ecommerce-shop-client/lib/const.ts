export const BASE_URL = "http://localhost:3000";

export const SESSION_LIFYCYCLE_TIME_IN_SECONDS = 2592000;

export const VERIFICATION_TOKEN_LIFECYCLE_TIME_IN_MILLISECONDS = 3600000;
export const RESET_TOKEN_LIFECYCLE_TIME_IN_MILLISECONDS = 3600000;
export const TWO_FA_TOKEN_LIFECYCLE_TIME_IN_MILLISECONDS = 3600000;

export const MIN_RANDOM_TWO_FA_TOKEN = 100000;
export const MAX_RANDOM_TWO_FA_TOKEN = 1000000;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const HASH_SALT_ROUNDS = 10;

export const EMAIL_MIN_LENGTH = 4;
export const EMAIL_MAX_LENGTH = 254;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 254;

export const NAME_MIN_LENGTH = 3;
export const NAME_MAX_LENGTH = 254;

export const TWO_FA_CODE_LENGTH = 6;

export const EMAIL_REQUIRED_MESSAGE = "email is require";
export const PASSWORD_REQUIRED_MESSAGE = "password is require";
export const CONFIRM_PASSWORD_REQUIRED_MESSAGE = "confirm password is require";
export const NAME_REQUIRED_MESSAGE = "name is require";

export const PASSWORD_CONFIRM_ERROR_MESSAGE = "password not confirmed";
export const EMAIL_INVALID_MESSAGE = "email is invalid";

export const EMAIL_MIN_LENGTH_MESSAGE = `email min lenght is ${EMAIL_MIN_LENGTH}`;
export const PASSWORD_MIN_LENGTH_MESSAGE = `password min lenght is ${PASSWORD_MIN_LENGTH}`;

export const EMAIL_MAX_LENGTH_MESSAGE = `email max lenght is ${EMAIL_MAX_LENGTH}`;
export const PASSWORD_MAX_LENGTH_MESSAGE = `password max lenght is ${PASSWORD_MAX_LENGTH}`;

export const NAME_MIN_LENGTH_MESSAGE = `firstname min lenght is ${NAME_MIN_LENGTH}`;
export const NAME_MAX_LENGTH_MESSAGE = `firstname max lenght is ${NAME_MAX_LENGTH}`;
