import React, { useState, useEffect } from 'react';
import Daughter from './Daughter';

function Mother(props) {

    return (
        <>
            Mother
            <br />
            <Daughter info2={props.info} />
        </>
    )
}

export default Mother