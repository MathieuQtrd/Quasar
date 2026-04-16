import { createSlice } from '@reduxjs/toolkit'

const savedUser = localStorage.getItem('user')

const initialState = {
    currentUser: savedUser ? JSON.parse(savedUser) : null,
    isConnected: !!savedUser,
    /*
        !savedUser 
            object => false
            null   => true

        !!sevedUser
            object => true
            null   => false
    */ 

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload 
            state.isConnected = true
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.currentUser = null
            state.isConnected = false
            localStorage.removeItem('user')
        }
    }
})

export const { login, logout } = userSlice.actions 
export default userSlice.reducer