export type TDepartment = {
    department_id: number
    name: string
}

export type TUser = {
    user_id: number
    name: string
    telegram?: string
    is_show_telegram: boolean
    email?: string
    is_show_email: boolean
    role: string[]
    department: TDepartment
    Job_title: string
}
