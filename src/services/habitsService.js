import { supabase } from "./supabaseService";

export async function getHabits(userId) {
  const { data, error } = await supabase
    .from("habits")
    .select("*")
    .eq("user_id", userId)
    .order("created_at");

  return {
    data,
    error,
  };
}

export async function createHabit(
  title,
  userId
) {
  const { data, error } =
    await supabase
      .from("habits")
      .insert([
        {
          title,
          user_id: userId,
        },
      ])
      .select();

  return {
    data,
    error,
  };
}

export async function updateHabit(
  id,
  updates
) {
  const { data, error } =
    await supabase
      .from("habits")
      .update(updates)
      .eq("id", id)
      .select();

  return {
    data,
    error,
  };
}

export async function deleteHabit(
  id
) {
  const { error } =
    await supabase
      .from("habits")
      .delete()
      .eq("id", id);

  return {
    error,
  };
}

export async function updateHabitCompletion(
  id,
  completed
) {
  const { data, error } =
    await supabase
      .from("habits")
      .update({
        completed,
      })
      .eq("id", id)
      .select();

  return {
    data,
    error,
  };
}