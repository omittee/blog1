import { Context } from "koa";
import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import Secret from '../config/jwt'

export default async (ctx: Context) => {
  const { pwd } = ctx.request.body;
  console.log(bcrypt.hashSync(pwd), bcrypt.genSaltSync(10));
  if (!bcrypt.compareSync(pwd, "11111")) {
    ctx.body = {
      status: 403,
      msg: "密码错误",
    }
  }
  else {
    const token = sign({ name: "Omittee" }, Secret.secret);
  }
}