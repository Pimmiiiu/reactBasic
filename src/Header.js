import React from 'react'

function Header(props) {
    return (
        <div className="App">
            <h1> Header</h1>
            <p>{props.message}</p>
        </div>
    );
}

export default Header;