import type { APIRoute } from "astro";
import { Clients, db, eq } from "astro:db";

// export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const clientId = params.clientId ?? "";
  const clients = await db
    .select()
    .from(Clients)
    .where(eq(Clients.id, +clientId));

  if (clients.length === 0) {
    return new Response(JSON.stringify({ message: "client not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(clients), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
