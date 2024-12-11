import type { APIRoute } from "astro";
import { db, Clients } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const users = await db.select().from(Clients);
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
