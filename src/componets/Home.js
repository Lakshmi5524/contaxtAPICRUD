import React from 'react'
import Heading from './Heading'
import UserList from './UserList'

const Home = () => {
	return (
		<div className="home">
			<h1>Home</h1>
			<Heading />
			<UserList />
		</div >
	)
}
export default Home;