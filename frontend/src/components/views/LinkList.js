import React from 'react';

function LinkItem(props) {
  return <li><a href={props.element.id}>{props.element.name}</a></li>;
}

function LinkList(props) {
    return (props.elements ? (
        <ul>
            {props.elements.map((element) => <LinkItem element={element}/>)}
        </ul>
    ) : (
        <div>
            Sorry, there is no info!
        </div>
    ));
}

export {LinkItem, LinkList};
