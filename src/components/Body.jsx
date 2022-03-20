function Body(props) {
	if (props.model) {
		return <div className='container text-center'>{props.model}</div>
	}
	return <div className='container text-center'>{props.body}</div>
}

export default Body
