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

    const MAX_GRAY = 624;
    const MAX_GREEN = 1050;
    const MAX_BLUE = 790;
    const MAX_OTHER = 555;

    let calculatedValue = {
        "nextLevel": 1,
        "nextColor": 2
    };

    function grayFormula(level) {
        return level * 2 - 1;
    }

    function greenFormula(level) {
        return level + 4;
    }

    function blueFormula(level) {
        return level - 21
    }

    function purpleFormula(i) {
        return i - 41;
    }

    function goldFormula(i) {
        return i - 56;
    }

    function grayTotalEssencePerLevel(level) {
        let currentSum = 0;
        for (var i = 2; i <= level; i++) {
            currentSum += grayFormula(i);
        }
        return currentSum;
    }

    function greenTotalEssencePerLevel(level) {
        let currentSum = 0;
        for (var i = 26; i <= level; i++) {
            currentSum += greenFormula(i);
        }
        return currentSum;
    }

    function blueTotalEssencePerLevel(level) {
        let currentSum = 0;
        for (var i = 51; i <= level; i++) {
            currentSum += blueFormula(i);
        }
        return currentSum;
    }

    function purpleTotalEssencePerLevel(level) {
        let currentSum = 0;
        for (var i = 71; i <= level; i++) {
            currentSum += purpleFormula(i);
        }
        return currentSum;
    }

    function goldTotalEssencePerLevel(level) {
        let currentSum = 0;
        for (var i = 86; i <= level; i++) {
            currentSum += goldFormula(i);
        }
        return currentSum;
    }

    function getMaxTotalAndNextLevelByColor(total, level) {
        let max = MAX_OTHER;
        let nextLevel = level + 1;

        if (level < 25) {
            total += grayTotalEssencePerLevel(level);
            max = MAX_GRAY;
            nextLevel = grayFormula(nextLevel);
            return { nextLevel, max, total };
        }

        if (level < 50) {
            total += greenTotalEssencePerLevel(level);
            max = MAX_GREEN;
            nextLevel = greenFormula(nextLevel);
            return { nextLevel, max, total };
        }

        if (level < 70) {
            total += blueTotalEssencePerLevel(level);
            max = MAX_BLUE;
            nextLevel = blueFormula(nextLevel);
            return { nextLevel, max, total };
        }

        if (level < 85) {
            total += purpleTotalEssencePerLevel(level);
            nextLevel = purpleFormula(nextLevel)
            return { nextLevel, max, total };
        }

        total += goldTotalEssencePerLevel(level);
        nextLevel = goldFormula(level + 1);
        return { nextLevel, max, total };
    }

    function getNextLevelAndNextColorNeeds(quantity, level) {
        if (level >= 100) {
            let nextLevel, nextColor = 0;
            return { nextLevel, nextColor };
        }

        let nextLevel, nextColor, max, total;
        ({ nextLevel, max, total } = getMaxTotalAndNextLevelByColor(quantity, level));
        console.log("nextLevel, quantity, max, total", nextLevel, quantity, max, total);
        if (level === 25 || level === 50 || level === 70 || level === 85) {
            total = quantity;
        }
        nextColor = max - total;

        return { nextLevel, nextColor };
    }

    function calculateValues(level, quantity) {
        let nextLevel = 0;
        let nextColor = 0;

        ({ nextLevel, nextColor } = getNextLevelAndNextColorNeeds(parseInt(quantity), parseInt(level)));

        calculatedValue.nextLevel = nextLevel;
        calculatedValue.nextColor = nextColor;
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