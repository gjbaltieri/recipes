import ServerError from '../../errors/server-error';

export const ok = (body: any) => {
  return {
    statusCode: 200,
    body: body,
  };
};

export const serverError = (error?: Error) => {
  return {
    statusCode: 500,
    body: new ServerError(error?.stack || 'Internal Server Error'),
  };
};

export const badRequest = (error?: Error) => {
  return {
    statusCode: 400,
    body: error,
  };
};
