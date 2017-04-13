import React from 'react';
import {Link} from 'react-router-dom';

function LinkItem(props) {
  return <li><Link to={props.resource + props.element._id}>{props.element.name}</Link></li>;
}

function LinkList(props) {
    return (props.elements[0] ? (
        <ul>
            {props.elements.map((element) => 
            <LinkItem key={element._id} element={element} resource={props.resource}/>)}
        </ul>
    ) : (
        <div>
            Sorry, there is no info!
        </div>
    ));
}

export {LinkItem, LinkList};
