class Welcome extends React.Component {

	render() {
		return <React.Fragment>
			<h1>Bonjour {this.props.prenom}</h1>
			<p>
				{this.props.children}
			</p>
		</React.Fragment>
	}
}
function Home() {
	return <div>
		<Welcome prenom="Abdellah"></Welcome>
		
	</div>
}
/*
function Welcome(props) {
	return <h1>Bonjour {props.prenom}</h1>
}
*/
ReactDOM.render(<Welcome />, document.querySelector('#app'))

