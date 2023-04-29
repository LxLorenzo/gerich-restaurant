import React, { useEffect, useState } from "react";

import { FaArrowCircleUp } from "react-icons/fa";
import "./UpArrow.css";

const FooterOverlay = () => {
	useEffect(() => {
		const handleScrollButtonVisibility = () => {
			window.pageYOffset > 1000 ? setShowButton(true) : setShowButton(false);
		};

		window.addEventListener("scroll", handleScrollButtonVisibility);

		return () => {
			window.removeEventListener("scroll", handleScrollButtonVisibility);
		};
	}, []);

	const [showButton, setShowButton] = useState(false);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
        <>
			{showButton && (
				<div className="app__UpArrow">
					<FaArrowCircleUp
						className="app__UpArrow-arrow"
						onClick={handleScrollToTop}
					/>
				</div>
			)}
        </>
	);
};

export default FooterOverlay;
