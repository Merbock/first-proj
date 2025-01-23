import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const currentYear = new Date().getFullYear(); //Императивный стиль: здесь мы используем встроенный метод Date для получения текущего года.
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{currentYear}</p> {/*Декларативный стиль: здесь мы просто указываем, что хотим отобразить текущий год.*/}
			</header>
		</div>
	);
}



export default App;
