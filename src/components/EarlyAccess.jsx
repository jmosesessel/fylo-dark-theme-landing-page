import React from "react";
import Button from "./Button";
function EarlyAccess() {
	return (
		<div className="text-white relative -top-[11rem] bg-dark-blue-testimonials flex flex-col items-center py-10 px-7 mx-6 rounded-lg shadow-md">
			<h2 className=" font-Raleway font-extrabold text-lg mb-4">
				Get early access today
			</h2>
			<p className="text-center mb-8 text-sm">
				It only takes a minute to sign up and our free starter tier is
				extremely generous. If you have any questions, our support team
				would be happy to help you.
			</p>
			<form action="" className="flex flex-col">
				<input
					type="text"
					placeholder="email@example.com"
					className="text-sm text-dark-blue-main mb-6 rounded-full px-[1.81rem] h-12"
				/>
				<Button width="w-full" text="Get Started For Free" />
			</form>
		</div>
	);
}

export default EarlyAccess;
