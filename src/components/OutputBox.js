import React from 'react';

const OutputBox = ( {text} ) => {

	return(
		<div className="OutputBox ma3 code red">
			<h2>
				{!text ? 'AND YOUT TEXT WILL BE ECHOED HERE' : text}
			</h2>
		</div>
	);
}

export default OutputBox;
