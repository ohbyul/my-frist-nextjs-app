import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!       // ! => Non-null assertion operator(단언 연산자) 피연산자가 Nullish(null이나 undefined) 값이 아님을 단언

export const supabase = createClient(supabaseUrl, supabaseKey)
