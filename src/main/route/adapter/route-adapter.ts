import { Response, Request } from 'express';
import { Controller } from '../../../presentation/protocols/controller';
import { HttpRequest } from '../../../presentation/protocols/http';

export default function RouteAdapter(controller: Controller): any {
  return async (req: Request, res: Response): Promise<any> => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequest);
    if (httpResponse.statusCode === 200) {
      return res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      return res
        .status(httpResponse.statusCode)
        .json({ error: httpResponse.body.message });
    }
  };
}
