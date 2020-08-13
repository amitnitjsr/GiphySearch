import React, { Component } from 'react';

class Gif extends React.Component {
    render() {
        return (
            <li className="gif-wrap">
                <img alt="" src={props.url} />
            </li>
        );
    }
}

export default Gif;