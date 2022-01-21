import './App.css';
import data from './data.json';

const siteName = "Edward's Info Site";

function App() {
	return (
		<div className="App">
			<h1>{siteName}</h1>
			<ul>
				{data.links.map(link => {
					return (
						<li>{link.intro}: <a href={link.url}>{link.title}</a></li>
					)
				})}
			</ul>
		</div>
	);
}

export default App;
