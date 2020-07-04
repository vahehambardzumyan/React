import React from 'react';


const Error = ({ touched, message }) => {
    if (!touched) {
        return <div style={{fontSize: '15px', margin: '0', padding: '0'}}>&nbsp;</div>
    }
    if (message) {
        return <div style={{color:"rgba(10, 180, 180, 1)", fontSize: '15px', margin: '0', padding: '0'}}>{message}</div>
    }
    return <div>&nbsp;</div>
}

export default Error