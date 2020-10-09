import React from "react";


const Button = (props) => {
	const { children, className, click} = props;
		return(
			<button className={className} type="button" onClick={() => click()}>
        {children}
      </button>
		)
}

export default Button;