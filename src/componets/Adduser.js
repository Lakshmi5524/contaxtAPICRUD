import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuid } from 'uuid'
import {
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap'
const Adduser = () => {
	const [name, setName] = useState('')
	const { addUser } = useContext(GlobalContext);
	const history = useHistory();


	const onsubmit = () => {
		const newUser = {
			id: uuid(),
			name: name
		}

		addUser(newUser);
		history.push('/')
	}

	const onChange = (e) => {
		setName(e.target.value)
	}

	return (
		<div>
			<h1>AddUser</h1>
			<Form onSubmit={onsubmit}>
				<FormGroup>
					<Label>Name</Label>
					<Input type="text" name="name" value={name} onChange={onChange} placeholder=" Enter Name" />
				</FormGroup>
				<Button type="submit">Submit</Button>
				<Link to='/' className="btn btn-danger ml-4">Cancel</Link>
			</Form>
		</div >
	)
}
export default Adduser