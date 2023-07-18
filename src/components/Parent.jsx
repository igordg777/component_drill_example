import React, { useState, useEffect } from 'react';
import Son from './Son'

function Ited(props) {
    const str = "Ited";
    const descriptionText = "code school!!!"

    const example = (text) => {
        props.alertAppJs(text)
    }
    return (
        <>
            Parent
            <br />
            <Son nameSchool={str} description={descriptionText} alarm={example} />
        </>
    )
}

export default Ited