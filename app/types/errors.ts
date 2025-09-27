export type ApplicationError = {
  message: string;
  code?: string;
  details?: Record<string, any>;
};
