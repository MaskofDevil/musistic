import { createClient } from "@supabase/supabase-js";

const URL = "URL";
const ANNON_PUBLIC_SECRET = "PUBLIC_SECRET";

export const supabase = createClient(
    URL,
    ANNON_PUBLIC_SECRET
);