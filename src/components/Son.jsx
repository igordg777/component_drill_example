import React, { useState, useEffect } from 'react';

function Ited(props) {
    console.log(props)
    return (
        <>
            Son
            <h1> {props.nameSchool} {props.description}</h1>
            <br />
            <button onClick={() => props.alarm('hello from son')}>уведомление</button>
        </>
    )
}

export default Ited