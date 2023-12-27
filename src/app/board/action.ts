'use server'
import { supabase } from "@/supabase/auth"
import { redirect } from "next/navigation"

export async function actionGetBoards() {
    const { data, error } = await supabase
        .from('TB_BOARD')
        .select('*')
        .order('id', { ascending: false })

    return data;
}


export async function actionGetBoardInfo(id: string) {
    const { data, error } = await supabase
        .from('TB_BOARD')
        .select('*')
        .eq('id', id)

    if (data) {
        return data[0]
    }
}

export async function actionInsertBoard(formData: FormData) {
    const { data, error } = await supabase
        .from('TB_BOARD')
        .insert([{
            board_code: 'bss',
            title: formData.get('title'),
            contents: formData.get('contents'),
        }])
        .select()

    if (error) throw error
    const boardId = data[0].id
    redirect(`/board/${boardId}`)
}

