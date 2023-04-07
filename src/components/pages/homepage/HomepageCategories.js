import React from 'react';
import HomepageCategoryTile from './HomepageCategoryTile';

const HomepageCategories = () => {
    return (
        <div className="content-wide homepage-featured-categories">
            <h1 className="homepage-feature-title">
                Featured Categories
            </h1>

            <div className="featured-categories-wrapper">
                <HomepageCategoryTile name={"vintage"}/>
                <HomepageCategoryTile name={"steampunk"}/>                
            </div>
        </div>
    )
}

export default HomepageCategories;