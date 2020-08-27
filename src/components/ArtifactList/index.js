import React from 'react';
import artifactsData from '../../data/artifacts.json';
import styled from 'styled-components';

const ArtifactListContent = styled.main`
    background-color: var(--black);
    color: var(--blackLighter);
    padding-top: 50px;

    font-size: 25px;
    text-align: center;

    @media (max-width: 800px) {
      padding-top: 20px;
    }

    .categories {
        display: flex;
        flex-direction: row;
    }

    .category {
        flex-direction: column;
        flex-grow: 1;

        border-right-style: solid;
        border-right-color: darkgray;
    }

    .item {
        display: flex;
        flex-direction: row;        
        justify-content: space-around;

        color: white;       
    }

    .label {
        color: white;
        background-color: darkred;
        
        display: flex;
        justify-content: center;
        
        font-family: fantasy;
        font-variant: all-petite-caps;
        font-size: xx-large;
        
        border-bottom-style: solid;
        border-bottom-color: darkgray;
        border-top-style: solid;
        border-top-color: darkgray;
    }
`;

function ArtifactList() {
    return (
        <ArtifactListContent>
            <div id="categories" className="categories">
                {artifactsData.categories.map((category, index) => {
                    return (
                        <div key={"category"+ category.color} className="category" style={{ backgroundColor: category.color || 'red' }}>
                            <label className="label">{category.color}</label>
                            {category.levels.map((item, index) => {
                                return (
                                    <div className="item" key={"item"+ index}>
                                        <label>{item.level}</label>
                                        <label>{item.essence}</label>
                                    </div>
                                );
                            })}
                            <label className="label">Total: {category.total}</label>
                        </div>
                    );
                })}
            </div>

        </ArtifactListContent>
    );
}

export default ArtifactList;