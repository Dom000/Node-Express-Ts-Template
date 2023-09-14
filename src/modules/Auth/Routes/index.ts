import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { ValidationMiddleware } from "../../../middleware/validation.middleware";
import { AuthController } from "../Controllers";
import { LoginDto } from "../Dto/login.dto";


export class AuthRoute implements Routes {
    public path = '/';
    public router = Router();
    public auth = new AuthController()

    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, ValidationMiddleware(LoginDto), this.auth.login);

    }
}
