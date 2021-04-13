import React, { Component } from 'react'

export default class Connect extends Component {
    render() {
        return (
            <div className="normal">
                <button className="right-arrow-btn" onClick={()=>this.props.setMenuId(0)}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
            </div>
        )
    }
}
