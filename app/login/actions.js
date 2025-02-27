// 'use server';

// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';

// import { createClient } from '@/utils/supabase/server';

// export async function login(formData) {
//   const supabase = await createClient();

//   // Ensure inputs are strings (basic validation)
//   const email = formData.get('email');
//   const password = formData.get('password');

//   if (typeof email !== 'string' || typeof password !== 'string') {
//     redirect('/error');
//   }

//   const { error } = await supabase.auth.signInWithPassword({ email, password });

//   if (error) {
//     redirect('/error');
//   }

//   revalidatePath('/', 'layout');
//   redirect('/');
// }

// export async function signup(formData) {
//   const supabase = await createClient();

//   // Ensure inputs are strings (basic validation)
//   const email = formData.get('email');
//   const password = formData.get('password');

//   if (typeof email !== 'string' || typeof password !== 'string') {
//     redirect('/error');
//   }

//   const { error } = await supabase.auth.signUp({ email, password });

//   if (error) {
//     redirect('/error');
//   }

//   revalidatePath('/', 'layout');
//   redirect('/');
// }
