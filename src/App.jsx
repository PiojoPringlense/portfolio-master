import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import Blog from "./components/Blog";

function App() {
	const frontEndSkills = [
		{ name: "HTMS", level: 5 },
		{ name: "CSS", level: 5 },
		{ name: "Javascript", level: 5 },
		{ name: "React", level: 4.5 },
		{ name: "Next.js", level: 4 },
		{ name: "Vue", level: 3 },
	];
	const backEndSkills = [
		{ name: "Node.js", level: 5 },
		{ name: "Phyton", level: 4 },
		{ name: "PHP", level: 3.5 },
		{ name: "Ruby", level: 3 },
		{ name: "Java", level: 3 },
	];

	return (
		<div className="bg-slate-100 p-16">
			<div className="bg-slate-100 container mx-auto max-w-5xl grid grid-cols-3 gap-10">
				<PersonalDetails />
				<Skills title="Front End" skills={frontEndSkills} />
				<Skills title="Back End" skills={backEndSkills} />
				<Hobbies />
				<Blog />
				<Projects />
			</div>
		</div>
	);
}

export default App;
