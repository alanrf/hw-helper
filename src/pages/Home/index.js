import React from 'react';
import PageDefault from '../../components/PageDefault';
import styled from 'styled-components';

const Welcome = styled.main`
    background-color: var(--black);
    color: var(--blackLighter);
    flex: 1;
    font-size: 25px;
    text-align: center;
    padding-top: 50px;
    @media (max-width: 800px) {
      padding-top: 20px;
    }
`;

function Home() {
    return (
        <PageDefault paddingAll={1}>
            <Welcome>
                Welcome to our site.
                <br />
                <br />
                Right now you may click on one of the items at the menu above to be guided to each calculator helper.
            </Welcome>
        </PageDefault>
    );
}

export default Home;