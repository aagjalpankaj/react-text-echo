import React from 'react';

const InputBox = ( {inputBoxChange} ) => {

	return(
		<div className="InputBox ma3">
			<input type="text" className="w-50 grow pa2 tc" placeholder="START TYPING HERE" onChange={inputBoxChange} />
		</div>
	);
}

export default InputBox;
