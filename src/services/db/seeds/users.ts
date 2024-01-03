import { db } from "@/services/db/drizzle.js";
import { users } from "@/schema.js";

import { InferInsertModel } from "drizzle-orm";

const usersArray: InferInsertModel<typeof users>[] = [
  {
    fullName: "John Doe",
    phone: "555-555-5555"
  },
  {
    fullName: "Jane Doe",
    phone: "555-555-5555"
  }
];

async function createUser(user: InferInsertModel<typeof users>) {
  const response = await db.insert(users).values(user).returning();
  console.log("created user: ", response);
  // we know that the response will be an array of one element
  return response[0].id;
}

export function seedUsers() {
  return Promise.all(usersArray.map((user) => createUser(user)));
}