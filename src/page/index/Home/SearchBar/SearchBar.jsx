
import './SearchBar.scss';
import React from 'react';

/**
 * @constructor <SearchBar />
 * @description 顶部搜索框代码
 */

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="search-bar">
                <div className="bar-location">
                    <div className="location-icon"></div>
                    <div className="location-text">杭州市</div>
                </div>
                
                <div className="search-btn">
                    <p className="place-holder">搜索</p>
                </div>
            </div>
        );
    }

}

export default SearchBar;
