const Blog = () => {
	return (
		<div className="col-span-2 row-span-2 bg-white rounded-xl p-5 overflow-hidden">
			<p className="text-gray-300 text-sm">Blog</p>
			<div className="flex justify-between">
				<p className="font-semibold text-xl mt-8">How to organize your CSS</p>
				<img
					className="rounded-xl h-64 translate-x-8 aspect-video object-cover"
					src="src\assets\Images\css.jpg"
					alt="Blog image"
				/>
			</div>
			<div className="my-14">
				<p className="mb-5 text-gray-500">
					In this article I tell the story about Proin eu justo sit amet lacus bibendum
					tincidunt. Vivamus non volutpat nisl, a luctus mi.
				</p>
				<p className="text-gray-500">
					Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada
					molestie.
				</p>
			</div>
			<a className="text-blue-700 text-sm" href="#">
				dev.to
			</a>
		</div>
	);
};
export default Blog;
