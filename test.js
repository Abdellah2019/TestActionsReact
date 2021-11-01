class Welcome extends React.Component {

	render() {
		return <React.Fragment>
			<h1>Bonjour {this.props.prenom}</h1>
		</React.Fragment>
	}
}



function F_Welcome(props) {
	console.log(props.Object)
	console.log(props.prenom)
	return <h1>HHH {props.prenom}</h1>
}

ReactDOM.render(<F_Welcome prenom="Abd"/>, document.querySelector('#app'))

