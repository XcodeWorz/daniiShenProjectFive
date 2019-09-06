import React, { Component } from 'react';


class Form extends Component {
    constructor () {
        super ();
    }



    render() {
        return (
            <div className="searchForm">
                <form action="">
                    <label id="searchBar" className="visuallyHidden">Search for a brunch restaurant here</label>
                    <input type="text"
                        id="searchBar"
                        onChange={this.props.handleChange}
                        value={this.props.userInput}
                        placeholder="Find me some brunch" />
                    {/* <select name="sortBy" id="sortBy">
                    <option value="rating">Rating</option>
                    <option value="cost">Cost</option>
                </select> */}
                    <button onClick={this.props.handleSubmit}>
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                <a href=""
                    onClick={(e) => this.props.handleClick(e,'rating')} 
                    className="rating">
                    <i className="fas fa-star"></i>
                </a>
                
                <a href="" 
                    onClick={(e) => this.props.handleClick(e, 'cost')} 
                    className="cost">
                    <i className="fas fa-dollar-sign"></i>
                </a>
            </div>

        );
    }
}

export default Form;