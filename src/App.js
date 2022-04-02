import './App.css';
import CustomCheckbox from './components/customCheckbox/CustomCheckbox';

function App() {
	return (
		<div className="App">
			<div className="container">
				<header>
					<div className="header-text">
						<h3>Social Media Dashboard</h3>
						<p>Total Followers: 23,004</p>
					</div>
					<div className="togglerCont">
						<span>Dark Mode</span><CustomCheckbox />
					</div>
				</header>
			</div>
		</div>
	);
}

export default App;
