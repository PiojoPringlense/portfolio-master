const Hobbie = ({ image, name, description }) => {
	return (
		<div>
			<img
				className="rounded-xl aspect-video object-cover"
				src={`./Images/${image}`}
				alt={name}
			/>
			<p className="mt-4 font-semibold">{name}</p>
			<p className="text-gray-500">{description}</p>
		</div>
	);
};

const Hobbies = () => {
	const hobbies = [
		{
			image: "guitar.jpg",
			name: "Guitar",
			description: "Playing blues music on my guitar",
		},
		{
			image: "football.jpg",
			name: "Football",
			description: "I play football on my city's club",
		},
		{
			image: "reading.jpg",
			name: "Reading",
			description: "I love reading good books",
		},
	];

	return (
		<div className="bg-white rounded-xl p-5 row-span-3">
			<p className="font-semibold text-xl mb-2">Hobbies</p>
			<div className="flex flex-col gap-10">
				{hobbies.map((hobbie, key) => (
					<Hobbie
						image={hobbie.image}
						name={hobbie.name}
						description={hobbie.description}
						key={key}
					/>
				))}
			</div>
		</div>
	);
};
export default Hobbies;
