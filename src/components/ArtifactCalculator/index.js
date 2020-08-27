import React, { useState } from 'react';
import FormField from '../FormField';
import Button from '../Button';
import useForm from '../../hooks/useForm';
import styled from 'styled-components';

const ArtifactCalculatorContent = styled.main`
    background-color: var(--black);
    color: var(--blackLighter);
    
    .section {
        display: table;
        width: 100%;
        padding-bottom: 10px;s
    }
      
    .section > * {
        display: table-row;
    }
      
    .section .col {
        display: table-cell;
    }

    .label {
        color: white;
        background-color: darkred;
        font-size: x-large;

        @media (max-width: 700px) {
            font-size: large;
        }

        @media (max-width: 500px) {
            font-size: medium;
        }
        
        border-style: solid;
        border-color: darkgray;        
    }

    .gray {
        background-color: gray;
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

    let calculatedValue = {
        "nextLevel": 1,
        "nextColor": 2,
        "max": 3
    };

    function gray(level) {
        let currentSum = 0;
        // let maxColor = 
        if (level == 2) {
            currentSum = 3;
        }
        if (level > 2) {
            for (var i = 2; i <= level; i++) {
                currentSum += level * 2 - 1;
            }
        }
    }

    function calculateValues(level, quantity) {
        let nextLevel = 0;
        let nextColor = 0;
        let max = 0;
        if (level < 25) {
    
        }
        calculatedValue.nextLevel = nextLevel;
        calculatedValue.nextColor = nextColor;
        calculatedValue.max = max;
    }

    return (
        <ArtifactCalculatorContent>
            <section className="section">
                <header>
                    <label className="col label">Hero</label>
                    <label className="col label">Artifact</label>
                    <label className="col label">Level</label>
                    <label className="col label">Quantity</label>
                    <label className="col label">Next level</label>
                    <label className="col label">Next color</label>
                    <label className="col label">Max</label>
                </header>
                {calculations.map((calculation, index) => (                
                    <div className="row" key={"row" + index}>
                        {calculateValues(calculation.level, calculation.quantity)}
                        <label className="col label gray">{calculation.hero}</label>
                        <label className="col label gray">{calculation.artifact}</label>
                        <label className="col label gray">{calculation.level}</label>
                        <label className="col label gray">{calculation.quantity}</label>
                        <label className="col label gray">{calculatedValue.nextLevel}</label>
                        <label className="col label gray">{calculatedValue.nextColor}</label>
                        <label className="col label gray">{calculatedValue.max}</label>
                    </div>
                ))}
            </section>
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