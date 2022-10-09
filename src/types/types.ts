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

export type TUserTransaction = {
    user_from: TUser | null
    user_to: TUser | null
    department: TDepartment
    job_title: string
    value_matic: number
    value_rub: number
    error: string
    timestamp: number
    date: string
}

export type TUserBalance = {
    balance: {
        maticAmount: number
        coinsAmount: number
    }
    balance_nft: any[]
}

export type TEvent = {
    id: number
    title: string
    description: string
    text: string
    filter_params: string[]
    max_count_members: number
    all_members: number[]
    approved_members: number[]
    date_start: string
    date_end: string
    timestamp_start: number
    timestamp_end: number
    creator: {
        id: number
        role: string
    },
    rewards: [{
        rub: number
        nfts: number[]
    }],
    user_must_send_reports: boolean
    status: string
    _id?: string
    TYPE?: string
}
