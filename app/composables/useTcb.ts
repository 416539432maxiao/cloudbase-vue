export const useTcb = () => {
    const { $tcb } = useNuxtApp()
    return $tcb
}

export const useDb = () => {
    const tcb = useTcb()
    return tcb.database()
}
