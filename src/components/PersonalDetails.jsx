const PersonalDetails = () => {
	return (
		<div className="bg-white rounded-xl p-5 flex gap-5 col-span-3">
			<div className="">
				<img className="max-w-[250px] rounded-xl" src="./Images/portrait.jpg" alt="Portrait" />
			</div>
			<div>
				<div className="flex justify-between">
					<div>
						<p className="font-semibold text-xl">Billy Pearson</p>
						<p>Front-end developer</p>
					</div>
					<div>
						<p className="flex items-center gap-4">
							<span className="material-icons">email</span>billy@example.com
						</p>
						<p className="flex items-center gap-4">
							<span className="material-icons">phone</span>(+603) 546 624 342
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-5 mt-10">
					<p className="text-gray-500">
						Self-motivated developer, who is willing to learn and create outstanding UI
						applications.
					</p>
					<p className="text-gray-500">
						Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat
						malesuada molestie.
					</p>
				</div>
			</div>
		</div>
	);
};
export default PersonalDetails;
