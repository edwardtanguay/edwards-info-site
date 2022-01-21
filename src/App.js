/* eslint-disable jsx-a11y/alt-text */
import './App.scss';
import data from './data.json';

const siteName = "Edward's Info Site";

function App() {
	return (
		<div className="App">
			<h1>{siteName}</h1>
			<img src="images/general/profile.jpg" />
			<ul>
				{data.links.map(link => {
					return (
						<li className={link.favorite ? 'favorite' : ''}>
							<div>
								{link.intro}: <a href={link.url}>{link.title}</a>
							</div>
							<img src={`images/links/${link.idCode}.png`} />
						</li>
	)
})}
			</ul >
		</div >
	);
}

export default App;
