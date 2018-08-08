import React from 'react';

export default function Category(props) {
    return (
        <div>
            {props._text}
        </div>
    );
};

Category.defaultProps = {
    text: ''
};
