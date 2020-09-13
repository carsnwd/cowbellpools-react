import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type IButtonProps = {
    icon: IconDefinition,
    label?: string,
    classes?: string
}

export class Button extends React.Component<IButtonProps>{
    constructor(props: IButtonProps){
        super(props);
    };
    render(){
        return(
            <a className={this.props.classes}>
                <FontAwesomeIcon icon={this.props.icon}/> {this.props.label}
            </a>
        );
    };
}