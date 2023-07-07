
function FeatureBox(props) {
	const features = props.features;
	return (
		<div className="grid grid-flow-row lg:grid-cols-2 w-full p-5">
			{features.map((feature) => {
				return (
					<div className=" lg:w-[21.8125rem] mb-20 flex flex-col justify-center items-center" key={feature.id}>
						<img className="w-20 lg:w-[6.5rem] h-20 lg:h-[6.5rem] mb-[1.5rem]" src={feature.image} alt={feature.image} />
						<h3 className="mb-[0.5rem] text-white font-bold text-lg lg:text-xl">{feature.title}</h3>
						<p className="text-white text-center lg:text-sm">{feature.description}</p>
					</div>
				);
			})}
		</div>
	);
}

export default FeatureBox;
