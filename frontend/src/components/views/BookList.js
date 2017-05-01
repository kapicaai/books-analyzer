import React from 'react';
import {Link} from 'react-router-dom';

function BriefBookItem(props) {
    if(!props.element.author)
        props.element.author = {name:"No author"};
  return (<li>
    <div className="brief-book">
        <img className='book-img-preview' src={props.element.image} alt={props.element.name}/>
        <Link to={props.resource + props.element._id}>{props.element.name}</Link>
        <div>{props.element.author.name}</div>
    </div>
  </li>);
}

function BookList(props) {
    console.log(props.elements);
    return (props.elements[0] ? (
        <ul>
            {props.elements.map((element) => 
            <BriefBookItem key={element._id} element={element} resource={props.resource}/>)}
        </ul>
    ) : (
        <div>
            Sorry, there is no info!
        </div>
    ));
}

export {BriefBookItem, BookList};
