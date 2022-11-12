const Skill = ({ skill }) => {
	const rating = [];
	let level = skill.level;
	for (let i = 0; i < 5; i++) {
		if (level > 1) {
			rating.push("star_rate");
			level--;
			continue;
		}
		if (level > 0) {
			rating.push("star_half");
			level--;
			continue;
		}
		rating.push("star_outline");
		level--;
	}
	return (
		<div className="flex justify-between">
			<p className="text-gray-700">{skill.name}</p>
			<div className="flex">
				{rating.map((star, key) => (
					<span className="material-icons text-yellow-600" key={key}>
						{star}
					</span>
				))}
			</div>
		</div>
	);
};

const Skills = ({ title, skills }) => {
	return (
		<div className="bg-white rounded-xl p-5">
			<p className="font-semibold text-xl mb-2">{title}</p>
			{skills.map((skill, key) => (
				<Skill key={key} skill={skill} />
			))}
		</div>
	);
};
export default Skills;
