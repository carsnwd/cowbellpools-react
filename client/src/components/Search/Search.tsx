import React from 'react';
import './Search.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

type ISearchProps = {
    classes?: string
}

export class Search extends React.Component<ISearchProps>{
    render(){
        return(
            <div className={"search-bar navbar-item" + (this.props.classes ? this.props.classes : "")}>
                <div className="has-icons-left control">
                    <input className="input is-medium" type="text" placeholder="Search for pads..."/>
                    <span className="icon is-medium is-left">
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </span>
                </div>
            </div>
        );
    }
};