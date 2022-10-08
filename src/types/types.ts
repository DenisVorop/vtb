export type TDepartment = {
    department_id: number
    name: string
}

export type TUser = {
    user_id: number
    name: string
    phone: string
    is_show_phone: boolean
    telegram: string
    is_show_telegram: boolean
    email: string
    is_show_email: boolean
    role: string[]
    department: TDepartment
    job_title: string
}

export type TContacts = {
    phone: string
    is_show_phone: boolean
    telegram: string
    is_show_telegram: boolean
    email: string
    is_show_email: boolean
}

export type TTransaction = {
    hash: string
    blockNumber: number
    timeStamp: number
    contractAddress: string
    from: string
    to: string
    value: number
    tokenName: string
    tokenSymbol: string
    gasUsed: number
    confirmations: number
    isError: string
}
