import React from 'react';

import './directory.styles.scss';

import sectionsData from '../../resources/directory.data';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [...sectionsData]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    // destructuring received props into otherSectionProps, sans id since id is not in MenuItem props
                    // spread operator allows for component to destructure props from received object
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps}></MenuItem>
                    ))
                }
            </div>
        )
    }
}

export default Directory;