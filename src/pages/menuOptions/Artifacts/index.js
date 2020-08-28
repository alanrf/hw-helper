import React from 'react';
import PageDefault from '../../../components/PageDefault';
import styled from 'styled-components';
import ArtifactList from '../../../components/ArtifactList';
import ArtifactCalculator from '../../../components/ArtifactCalculator';

const ArtifactContent = styled.main`
    background-color: var(--black);
    color: var(--blackLighter);
    padding-top: 50px;

    font-size: 25px;
    text-align: center;
`;

function Artifacts() {
    return (
        <PageDefault paddingAll={1}>
            <ArtifactContent>
                <h1>Artifact</h1>
                <ArtifactCalculator />
                {/* <ArtifactList /> */}
            </ArtifactContent>
        </PageDefault >
    );
}

export default Artifacts;