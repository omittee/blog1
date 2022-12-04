import { Context } from "koa";
import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'

export default async (ctx: Context) => {
  const { pwd } = ctx.request.body;
  console.log(bcrypt.hashSync(pwd, bcrypt.genSaltSync(10)));
  if (!bcrypt.compareSync(pwd, "$2a$10$zZEkgZgfhWZMQX8c0WF15uCmMy.9tXKoEHmlgZ3xMQmDeQWOOMAu6")) {
    ctx.body = {
      status: 403,
      msg: "密码错误",
    }
  }
  else {
    const token = sign({ name: "Omittee" }, process.env.JWT_SECRET_KEY);
    ctx.body = {
      status: 200,
      token
    }
  }
}