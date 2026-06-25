import { supabase } from "./supabaseService";

export async function signUp(
  email,
  password
) {
  return await supabase.auth.signUp({
    email,
    password,
  });
}

export async function signIn(
  email,
  password
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signOut() {
  return await supabase.auth.signOut();
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
export function onAuthStateChange(callback) {
  return supabase.auth.onAuthStateChange(
    (_, session) => {
      callback(session?.user ?? null);
    }
  );
}