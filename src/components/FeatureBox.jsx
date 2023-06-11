import React from "react";

function FeatureBox(props) {
	const features = props.features;
	return (
		<div className="flex flex-col w-full p-5">
			{features.map((feature) => {
				return (
					<div className="mb-20 flex flex-col justify-center items-center" key={feature.id}>
						<img className="w-20 mb-8" src={feature.image} alt={feature.image} />
                        <div></div>
						<h3 className="mb-3 text-white font-bold text-lg">{feature.title}</h3>
						<p className="text-white text-center">{feature.description}</p>
						<div></div>
					</div>
				);
			})}
		</div>
	);
}

export default FeatureBox;
