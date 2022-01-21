import './App.css';

const siteName = "Edward's Info Site";

function App() {
	return (
		<div className="App">
			<h1>{siteName}</h1>
			<ul>
				<li>Learn React: <a href="https://reactjs.org/docs/getting-started.html">React documentation</a></li>
				<li>Learn JAMStack: <a href="https://jamstack.org">JAMStack start site</a> </li>
			</ul>
		</div>
	);
}

export default App;
