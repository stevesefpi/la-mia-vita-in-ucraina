import { supabase } from "./supabase";
import bcrypt from "bcryptjs";

export async function createUser(email, password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const {data, error } = await supabase
    .from("users")
    .insert([{ email, password_hash: hashedPassword }])
    .select("*")
    .single();

  if (error) {
    console.error("Error creating user:", error);
    return null;
  }

  console.log("User created successfully:", data);
  return data;
}
