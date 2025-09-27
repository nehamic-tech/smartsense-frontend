import type { ApplicationError } from "~/types/errors";

function errorize(err: any): ApplicationError {
  return {
    message: err?.message || "An unknown error occurred",
    code: err?.code,
    details: err?.details,
  };
}
export { errorize };
