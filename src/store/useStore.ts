import { create } from 'zustand'

interface User {
  id: string
  name: string
  email: string
}

interface UserStore {
  users: User[]
  createUser: (user: User) => void
  readUsers: () => User[]
  updateUser: (id: string, updatedData: Partial<User>) => void
  deleteUser: (id: string) => void
}

const useUserStore = create<UserStore>((set, get) => ({
  users: [],

  createUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),

  readUsers: () => {
    return get().users
  },

  updateUser: (id, updatedData) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updatedData } : user
      ),
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}))

export default useUserStore
