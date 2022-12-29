import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

const handler = async (req, res) => {
  try {
    const { email, password } = req.body;

    //* Basic validation
    // Check if all required fields are present
    if (!email || !password)
      return res.status(400).json({
        error: {
          message: "Not all required fields are present",
        },
      });

    // Validate if the email is valid
    const validEmail = email ? email.match(/^[^@]+@[^@]+\.[^@]+$/) : false;

    if (!validEmail)
      return res.status(400).json({
        error: {
          message: "Invalid credentials",
        },
      });

    // Validate if the password is valid
    const validPassword = password ? password.match(/^.{8,}$/) : false;

    if (!validPassword)
      return res.status(400).json({
        error: {
          message: "Invalid credentials",
        },
      });

    const supabase = createServerSupabaseClient({
      req,
      res,
    });

    // If the identifier is an email, signup with email
    const session = await signup(supabase, email, password);
    return res.status(200).json(session);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: { message: error.message },
    });
  }
};

const signup = async (supabase, email, password) => {
  const { data: session, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "https://app.tuturuuu.com",
    },
  });

  // Check if there is an error
  if (error) throw error?.message;

  // Check if the session is valid
  if (!session) throw "Something went wrong";

  return session;
};

export default handler;
