import { useEffect, useState } from "react";
import { projectList, tags } from "../assets/projectList";

const Project = ({ project }) => {
	return (
		<div className=" bg-white rounded-xl p-5">
			<img className="rounded-xl" src={`./Images/${project.image}`} alt={project.title} />
			<div className="flex gap-4">
				{project.tags.map((tag) => (
					<span className="text-gray-500 text-sm my-4" key={`${project.image}${tag}`}>
						#{tag}
					</span>
				))}
			</div>
			<p className="font-semibold mb-4">{project.title}</p>
			<p className="text-gray-500 text-sm">{project.content}</p>
			<div className="flex justify-around gap-6 mt-8">
				<button className="grow text-center bg-blue-700 text-white hover:bg-blue-900 border-2 rounded-xl px-4 py-1  border-blue-700">
					Demo
				</button>
				<button className="grow text-center bg-white hover:bg-blue-100 border-2 rounded-xl px-4 py-1  border-blue-700">
					Code
				</button>
			</div>
		</div>
	);
};

const Tag = ({ name, addTag, removeTag }) => {
	const [selected, setSelected] = useState(false);

	return (
		<button
			onClick={() => {
				setSelected((curr) => !curr);
				selected ? removeTag(name) : addTag(name);
			}}
			key={name}
			className={`${
				selected ? "bg-blue-700 text-white hover:bg-blue-900" : "bg-white hover:bg-blue-100"
			} border-2 rounded-xl px-4 py-1  border-blue-700`}>
			{name}
		</button>
	);
};

const Projects = () => {
	const [selectedTags, setSelectedTags] = useState([]);
	const [projects, setProjects] = useState(projectList);

	const addTag = (tag) => {
		setSelectedTags((curr) => [...curr, tag]);
	};
	const removeTag = (tag) => {
		setSelectedTags((curr) => curr.filter((name) => name !== tag));
	};

	useEffect(() => {
		setProjects(projectList);

		setProjects((current) =>
			current.filter((proj) => {
				let match = true;
				selectedTags.forEach((tag) => {
					if (!proj.tags.includes(tag)) {
						match = false;
					}
				});
				return match;
			})
		);
	}, [selectedTags]);

	return (
		<div className="col-span-3">
			<div className=" bg-white rounded-xl p-5">
				<div className="flex items-center justify-between">
					<p className="font-semibold text-xl mb-2">Projects</p>
					<span>
						{projects.length} of {projectList.length}
					</span>
				</div>
				<div className="flex flex-wrap gap-3">
					{tags.map((tag) => (
						<Tag key={tag} name={tag} addTag={addTag} removeTag={removeTag} />
					))}
				</div>
			</div>
			<div className="grid grid-cols-3 gap-5 mt-5 max-h-[80vh] overflow-y-scroll">
				{projects.map((proj, key) => (
					<Project key={key} project={proj} />
				))}
			</div>
		</div>
	);
};
export default Projects;
