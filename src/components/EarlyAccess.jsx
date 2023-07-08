import React from "react";
import Button from "./Button";
function EarlyAccess() {
	return (
		<div className=" text-white relative -top-[11rem] lg:-top-[9rem] bg-dark-blue-testimonials flex flex-col items-center py-10 px-7 mx-6 lg:mx-72 lg:h-[17.1875rem] lg:shrink-0 rounded-lg shadow-md lg:shadow-lg">
			<h2 className=" font-Raleway font-extrabold text-lg lg:text-[2rem]  mb-4">
				Get early access today
			</h2>
			<p className="text-center mb-8 lg:mb-[2.37rem] text-sm lg:mx-[5.94rem]">
				It only takes a minute to sign up and our free starter tier is
				extremely generous. If you have any questions, our support team
				would be happy to help you.
			</p>
			
			<form action="" className="lg:mx-[4.81rem] flex flex-col items-center justify-center lg:flex-row lg:h-7 lg:items-center w-full lg:justify-center lg:gap-[1.81rem]">
				<input
					type="email"
					placeholder="email@example.com"
					className="text-sm text-dark-blue-main mb-6 lg:mb-0 rounded-full px-[1.81rem] h-12 w-full lg:w-[30rem]"
				/>
				<Button width="w-full lg:w-[12.5rem]" text="Get Started For Free" />
			</form>
		</div>
	);
}

export default EarlyAccess;
