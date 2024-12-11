import { db, Clients } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Clients).values([
    { ud: 1, name: "John Doe", age: 30, isActive: true },
    { id: 2, name: "Jane Doe", age: 25, isActive: false },
    { id: 3, name: "Bob Smith", age: 40, isActive: true },
    { id: 4, name: "Alice Johnson", age: 35, isActive: false },
    { id: 5, name: "Charlie Brown", age: 50, isActive: true },
  ]);
}
