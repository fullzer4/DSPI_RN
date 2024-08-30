import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import createEmailAuth from "./methods/auth/email/create.ts";
import IEmail from "./types/auth/email.ts";
import loginUserAuth from "./methods/auth/email/singin.ts";
import getUserPoints from "./methods/points/get.ts";
import addUserPoints from "./methods/points/put.ts";

const app = new Application();
const router = new Router();

app.use(oakCors({ origin: '*' }));

router
  .get("/", (ctx) => {
    ctx.response.body = "See the github repo";
  })
  .post("/auth/email/create", async (ctx) => {
    const body: IEmail = await ctx.request.body().value;
    const { name, email, pass, pass2 } = body;

    try {
      const res = await createEmailAuth(name, email, pass, pass2);
      ctx.response.body = { message: res }; 
    } catch (err) {
      ctx.response.body = { error: err };
    }
  })
  .post("/auth/email/login/", async (ctx) => {
    const body: { email: string; password: string } = await ctx.request.body().value;
    const { email, password } = body;

    try {
      const res = await loginUserAuth(email, password);
      ctx.response.body = { message: res }; 
    } catch (err) {
      ctx.response.body = { error: err };
    }
  })
  .post("/points/get", async (ctx) => {
    const body: { userid: string; } = await ctx.request.body().value;
    const { userid } = body;

    try {
      const res = await getUserPoints(userid);
      ctx.response.body = { message: res }; 
    } catch (err) {
      ctx.response.body = { error: err };
    }
  })
  .post("/points/put", async (ctx) => {
    const body: { userid: string; add: number;} = await ctx.request.body().value;
    const { userid, add } = body;

    try {
      const res = await addUserPoints(userid, add);
      ctx.response.body = { message: res }; 
    } catch (err) {
      ctx.response.body = { error: err };
    }

  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8081 });