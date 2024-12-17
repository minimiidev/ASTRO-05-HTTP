import type { APIRoute } from "astro";
import { db, Clients } from "astro:db";

export const GET: APIRoute = async ({ params, request }) => {
  const users = await db.select().from(Clients);

  if (users.length === 0) {
    return new Response(JSON.stringify({ message: "clients not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
