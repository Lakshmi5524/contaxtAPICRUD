import React, { createContext, useReducer } from 'react'
import AddReducer from './AppReducer'
const initialState = {
	users: [
		// { id: 1, name: 'user one' },
		// { id: 2, name: 'user Two' },
		// { id: 3, name: 'user Three' },


	]
};
//create context
export const GlobalContext = createContext(initialState)

//provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AddReducer, initialState)

	//Action

	const removeUser = (id) => {
		dispatch({
			type: 'REMOVE_USER',
			payload: id
		})
	}


	const addUser = (user) => {
		dispatch({
			type: 'ADD_USER',
			payload: user
		})
	}

	const editUser = (user) => {
		dispatch({
			type: 'EDIT_USER',
			payload: user
		})
	}


	return (
		<GlobalContext.Provider value={{
			users: state.users,
			removeUser,
			addUser,
			editUser
		}}>
			{children}
		</GlobalContext.Provider >
	)
}