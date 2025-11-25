import axios, { AxiosInstance } from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const instance: AxiosInstance = axios.create({
    baseURL: config.public.apiBase || '/api',
    timeout: 10000,
  })

  instance.interceptors.request.use((req) => {
    return req
  })

  instance.interceptors.response.use(
    (res) => res.data,
    (err) => Promise.reject(err)
  )

  nuxtApp.provide('axios', instance)
})
