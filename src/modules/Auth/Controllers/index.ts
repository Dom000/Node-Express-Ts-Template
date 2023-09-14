import { Request, Response } from "express";
import Container from "typedi";
import AuthService from "../Service";
import { LoginDto } from "../Dto/login.dto";

export class AuthController {
  async login(req: Request, res: Response) {
    const authService = Container.get<AuthService>(AuthService);

    try {
      const data: LoginDto = req.body;
      console.log(data);

      const response = await authService.login(data);
      res.status(response.status_code).json(response);
    } catch (error) {}
  }
}
