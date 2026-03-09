import tcb from 'tcb-js-sdk'

export default defineNuxtPlugin((_nuxtApp: any) => {
    const config = useRuntimeConfig()

    // Placeholder envId - should be replaced by user
    const envId = config.public.tcbEnvId || 'cool-points-env-id'

    const app = tcb.init({
        env: envId
    })

    return {
        provide: {
            tcb: app
        }
    }
})
