import React from 'react';

const Category = props => {
    return (
        <div>
            {props._text}
        </div>
    );
};

Category.defaultProps = {
    _text: ''
};

export default Category;
