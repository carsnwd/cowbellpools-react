import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * @name IButtonProps
 * @property {IconDefinition} [icon] - Passes a Font Awesome icon to display on the button.
 * @property {string} [label] - Label to display on button.
 * @property {string} [classes] - CSS classes to wrap button in.
 * @property {Function} onClickHandler - Callback for handling click events of the button.
 */
type IButtonProps = {
  icon?: IconDefinition;
  label?: string;
  classes?: string;
  onClickHandler: Function;
};

/**
 * @componenet
 * @name Button
 * @description Component for displaying a Bulma styled button and encapsulates properties.
 */
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
