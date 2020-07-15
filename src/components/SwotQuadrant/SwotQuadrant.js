import React from "react";
import './SwotQuadrant.css'

const SwotQuadrant = (props) => {
    const handleDragEnter = event => {
        event.preventDefault();
        event.stopPropagation();
    };
    const handleDragLeave = event => {
        event.preventDefault();
        event.stopPropagation();
    };
    const handleDragOver = event => {
        event.preventDefault();
        event.stopPropagation();
    }
    const handleDrop = event => {
        event.preventDefault();
        event.stopPropagation();
    }
    
    return (
        <>
            <div className={'drag-drop-zone'}
            id={props.name + '_zone'}
            onDrop={event => handleDrop(event)}
            onDragOver={event => handleDragOver(event)}
            onDragEnter={event => handleDragEnter(event)}
            onDragLeave={event => handleDragLeave(event)}
            >
                <p>Add categories to {props.name}</p>
            </div>
        </>
    )
}

export default SwotQuadrant;