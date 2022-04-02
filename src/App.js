import './App.css';
import CustomCheckbox from './components/customCheckbox/CustomCheckbox';
import BigCard from './components/BigCard.js/BigCard';

const bigCardData = [
	{
		icon: "facebook",
		username: "nathanf",
		followersCount: 1987,
		stats: 12,
		type: "Followers",
		increased: true,
		style: { borderTop: "4px solid hsl(210, 78%, 56%)" }
	},
	{
		icon: "twitter",
		username: "nathanf",
		followersCount: 1044,
		stats: 99,
		type: "Followers",
		increased: true,
		style: { borderTop: "4px solid hsl(210, 78%, 56%)" }
	},
	{
		icon: "instagram",
		username: "realnathanf",
		followersCount: "11k",
		stats: 1099,
		type: "Followers",
		increased: true,
		style: { borderTop: "4px solid pink" }
	},
	{
		icon: "youtube",
		username: "Nathan F.",
		followersCount: "8239",
		stats: "144",
		type: "Subscribers",
		increased: false,
		style: { borderTop: "4px solid red" }
	},
]

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
				<div className="current-data-box" >
					{bigCardData.map((data, index) => {
						return (
							<BigCard
								key={index}
								icon={data.icon}
								username={data.username}
								followersCount={data.followersCount}
								stats={data.stats}
								type={data.type}
								increased={data.increased}
								style={data.style}
							/>
						)
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
