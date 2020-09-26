import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IButtonProps = {
  icon?: IconDefinition;
  label?: string;
  classes?: string;
  onClickHandler: Function;
};

export class Button extends React.Component<IButtonProps> {
  constructor(props: IButtonProps) {
    super(props);
  }
  render() {
    return (
      <a className={this.props.classes} onClick={() => this.props.onClickHandler()} type="button">
        {this.props.icon ? <FontAwesomeIcon icon={this.props.icon} /> : null} {this.props.label}
      </a>
    );
  }
}
