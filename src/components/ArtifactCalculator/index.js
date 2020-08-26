import React, { useState } from 'react';
import FormField from '../FormField';
import Button from '../Button';
import useForm from '../../hooks/useForm';
import styled from 'styled-components';

const ArtifactCalculatorContent = styled.main`
    background-color: var(--black);
    color: var(--blackLighter);
    
    .hideDot {
        list-style-type: none;
    }

    .list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .label {
        color: white;
        background-color: darkred;
        font-size: xx-large;

        @media (max-width: 900px) {
            font-size: x-large;
        }

        @media (max-width: 700px) {
            font-size: large;
        }

        @media (max-width: 500px) {
            font-size: medium;
        }
        
        border-bottom-style: solid;
        border-bottom-color: darkgray;
        border-top-style: solid;
        border-top-color: darkgray;
    }
`;

function ArtifactCalculator() {
    const artifacts = ["Essence", "Scroll", "Metal"];
    const [calculations, setCalculations] = useState([]);

    const { handleChange, values, clearForm } = useForm({
        hero: 'Galahad',
        artifact: 'Essence',
        level: '1',
        quantity: '0'
    });

    return (
        <ArtifactCalculatorContent>
            <ul class="hideDot">
                <li key="title" class="list">
                    <label class="label">Hero</label>
                    <label class="label">Artifact</label>
                    <label class="label">Level</label>
                    <label class="label">Quantity</label>
                    <label class="label">Next level</label>
                    <label class="label">Next color</label>
                    <label class="label">Max</label>
                </li>
                {calculations.map((calculations, index) => (
                    <li key={`${calculations.titulo + index}`} class="list">
                        <label class="label">{calculations.hero}</label>
                        <label class="label">{calculations.artifact}</label>
                        <label class="label">{calculations.level}</label>
                        <label class="label">{calculations.quantity}</label>
                        <label class="label">{calculations.quantity}</label>
                        <label class="label">{calculations.quantity}</label>
                    </li>
                ))}
            </ul>
            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCalculations([...calculations, values]);
                clearForm();
            }}
            >
                <FormField
                    label="Hero"
                    type="text"
                    name="hero"
                    value={values.hero}
                    onChange={handleChange}
                />

                <FormField
                    label="Artifact Type"
                    type="text"
                    name="artifact"
                    value={values.artifact}
                    onChange={handleChange}
                    suggestions={artifacts}
                />

                <FormField
                    label="Current level"
                    type="text"
                    name="level"
                    value={values.level}
                    onChange={handleChange}
                />

                <FormField
                    label="Current Quantity"
                    type="text"
                    name="quantity"
                    value={values.quantity}
                    onChange={handleChange}
                />
                <Button>
                    Calculate
                </Button>
            </form>
        </ArtifactCalculatorContent>
    );
}

export default ArtifactCalculator;