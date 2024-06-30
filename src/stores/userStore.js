import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const postSignup = async (userData) => {
    console.log(userData)
  }
  return { postSignup }
})
