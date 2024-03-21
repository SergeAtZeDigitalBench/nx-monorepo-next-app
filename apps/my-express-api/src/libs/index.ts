export const getErrorMessage = (error: unknown, defaultError: string) => {
  if (error instanceof Error) {
    return error.message;
  }

  return defaultError;
};
