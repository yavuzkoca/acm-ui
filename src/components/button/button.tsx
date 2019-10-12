import React from "react";
import "../../styles/components/_button.scss";
import classnames from "classnames";
import IButton from "../../interfaces/button";

class Button extends React.Component<IButtonProps> {
    render() {
        const {className, size, fluid, ...props} = this.props;
        const buttonClasses = classnames(
            "acm-button",
            className,
            size && `acm-button__${size}`,
            fluid && 'acm-button__fluid'
        );
        return (
            <button className={buttonClasses} {...props}>
                {this.props.children}
            </button>
        );
    }
}

interface IButtonProps extends IButton{
    size?: string,
    fluid?: boolean,
}

export default Button;
