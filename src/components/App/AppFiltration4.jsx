import { Component } from 'react';

import Section from '@/components/Section/Section.jsx';
import PlanesList from "@/components/PlanesList/PlanesList"
import { Filter } from '../Filter/Filter';

// import planes from '@/json/planes.json';
// import helicopters from '@/json/helicopters.json';
import aircrafts from "@/json/aircrafts.json";

// import css from "./AppFiltration.module.css";

//! Компонент-клас
export class AppFiltration4 extends Component {
    state = {
        aircraftsArray: aircrafts,
        title: "Магазин літальних апаратів",
        // isPlanesOn: false,
        // isHelicoptersOn: false,
        // isAllOn: false,
        backgroundColor: "green",
        activeButton: "all"
    };

    setAll = () => {
        console.log("Кнопка All")
        this.setState({ 
            aircraftsArray: aircrafts,
            title: "Магазин літальних апаратів",
            backgroundColor: "green",
            activeButton: "all" 
        });
    }
    setPlanes = () => {
        console.log("Кнопка Planes")
        this.setState({ 
            aircraftsArray: aircrafts.filter(item => item.aircraftType === "plane"),
            title: "Магазин літаків",
            backgroundColor: "yellow",
            activeButton: "planes"
        });
    }
    setBiplanes = () => {
        console.log("Кнопка biplanes")
        this.setState({ 
            aircraftsArray: aircrafts.filter(item => item.aircraftType === "biplane"),
            title: "Магазин біпланів",
            backgroundColor: "pink",
            activeButton: "biplanes" 
        });
    }

    setHelicopters = () => {
        console.log("Кнопка helicopters")
        this.setState({ 
            aircraftsArray: aircrafts.filter(item => item.aircraftType === "helicopter"),
            title: "Магазин гелікоптерів",
            backgroundColor: "lightblue",
            activeButton: "helicopters" 
        });
    }

    render() {
        const {
            aircraftsArray, 
            title,
            // isPlanesOn, 
            // isHelicoptersOn, 
            // isAllOn, 
            backgroundColor,
            activeButton
        } = this.state;
        console.log("-------------------- props & state --------------------");
        console.log("🔢aircrafts:", aircrafts);
        console.log("🔢background:", backgroundColor);
        console.log("🔢title:", title);
        console.log("-------------------------------------------------------");

        return (
            <>
                <Filter
                    activeButton={activeButton}
                    onSetAll={this.setAll}
                    onSetPlanes={this.setPlanes}
                    onSetHelicopters={this.setHelicopters}
                    onSetBiplanes={this.setBiplanes}
                />

                {/* //! Літаки
                <Section
                    isOn={isPlanesOn}
                    title="Магазин моделей літаків"
                    color={backgroundColor}
                >
                    <PlanesList items={planes} />
                </Section>

                {/* //! Вертольоти 
                <Section
                    isOn={isHelicoptersOn}
                    title="Магазин моделей вертольотів"
                    color={backgroundColor}
                >
                    <PlanesList items={aircrafts} />
                </Section> */}

                {/* //! Всі */}
                <Section
                    // isOn={isAllOn}
                    title={title}
                    color={backgroundColor}
                >
                    <PlanesList items={aircraftsArray} />
                </Section>
            </>
        )
    }
}
