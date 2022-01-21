/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import './App.scss';
import siteData from './siteData.json';

function App() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch('https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json');
			const _employees = await response.json();
			setEmployees(_employees);
		})();
	}, []);

	return (
		<div className="App">
			<h1>{siteData.title}</h1>
			<img src="images/general/profile.jpg" />
			<h2>Links</h2>
			<ul>
				{siteData.links.map(link => {
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
			<h2>{employees.length} Employees</h2>
			<ul>
				{employees.map(employee => {
					return (
						<li>{employee.firstName} {employee.lastName}</li>
					)
				})}
			</ul>
		</div >
	);
}

export default App;
