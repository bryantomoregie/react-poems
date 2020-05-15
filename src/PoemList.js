import React from 'react';
import { PoemCard } from './PoemCard';

export function PoemList(props){ //everything inside the name of this component called in the parent component is 'props'.
    return (
        <div className="ui cards" style={{ marginTop: 20 }}>
        {props.poemsArray.map( poem => (  //if working inside a class component, use this. to pass props. If a function, we don't use this. 
            <PoemCard
                name={poem.name}
                content={poem.content}
                delete={props.deletePoem}
                poem={poem}
                update={props.editPoem}
            />
        ))}
        </div>
    )
}