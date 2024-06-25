import { Hono } from "hono";
import stock from "./stock";

const app = new Hono().basePath("/api");

app.route("stocks", stock);

export default app;
