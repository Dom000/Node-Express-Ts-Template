import Container, { Service } from "typedi";
import { HttpException } from "@/utils/HttpException";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { PrismaClient } from "@prisma/client";
import * as argon from "argon2";
import { LoginDto } from "../Dto/login.dto";

@Service()
export default class AuthService {
  public prisma = new PrismaClient();

  async login(data: LoginDto) {
    try {
      return {
        status_code: 200,
        status: true,
        message: "login success",
      };
    } catch (error) {
      throw new HttpException(500, `${error.message}`);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
