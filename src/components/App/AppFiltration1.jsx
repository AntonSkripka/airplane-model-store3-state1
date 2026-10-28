import { Component } from 'react';
import Section from '@/components/Section/Section.jsx';
import PlanesList from "@/components/PlanesList/PlanesList"
import planes from '@/json/planes.json';
import helicopters from '@/json/helicopters.json';
import css from "./AppFiltration.module.css";
import { Filter } from '../Filter/Filter';


//! Звичайний компонент
// export function AppFiltration1() {
//     return (
//         <>
//             {/*//! Літаки */}
//             <Section isOn={true} title="Магазин моделей літаків">
//                 <PlanesList items={planes} />
//             </Section >

//             {/*//! Вертольоти */}
//             <Section isOn={true} title="Магазин моделей вертольотів">
//                 <PlanesList items={helicopters} />
//             </Section >
//         </>
//     );
// };

//! Компонент-клас
export class AppFiltration1 extends Component {
    state = {
        // filter: '', // 'all', 'planes'  'helicopters'
        isPlanesOn: false,
        isHelicoptersOn: false,
        backgroundColor: "white"
    };

    handleFilter = (filterType) => {
        this.setState({ filter: filterType });
    };

    setAll = () => {
        console.log("Кнопка All")
        this.setState({ 
            isPlanesOn: true, 
            isHelicoptersOn: true, 
            backgroundColor: "green" 
        });
    }
    setPlanes = () => {
        console.log("Кнопка Planes")
        this.setState({ 
            isPlanesOn: true, 
            isHelicoptersOn: false,
            backgroundColor: "yellow"
        });
    }
    setHelicopters = () => {
        console.log("Кнопка helicopters")
        this.setState({ 
            isPlanesOn: false, 
            isHelicoptersOn: true,
            backgroundColor: "lightblue" 
        });
    }

    render() {
        const { isPlanesOn, isHelicoptersOn, backgroundColor } = this.state;
        console.log("-------------------- props & state --------------------");
        // console.log("ℹ️initialValue:", initialValue);
        console.log("🔢isPlanesOn, isHelicoptersOn:", isPlanesOn, isHelicoptersOn);
        console.log("-------------------------------------------------------");

        return (
            <>
                {/* <div className={css.filterBox}>
                    <button
                        className={css.buttonAllFiltration}
                        type="button"
                        onClick={this.setAll}
                    >
                        ВСІ
                    </button>

                    <button
                        className={css.buttonPlaneFiltration}
                        type="button"
                        onClick={this.setPlanes}
                    >
                        Літаки
                    </button>

                    <button
                        className={css.buttonHelicopterFiltration}
                        type="button"
                        onClick={this.setHelicopters}
                    >
                        Вертольоти
                    </button>
                </div> */}
                <Filter
                    onSetAll={this.setAll}
                    onSetPlanes={this.setPlanes}
                    onSetHelicopters={this.setHelicopters}
                />

                {/* //! Літаки */}
                <Section
                    isOn={isPlanesOn}
                    title="Магазин моделей літаків"
                    color={backgroundColor}
                >
                    <PlanesList items={planes} />
                </Section>

                {/* //! Вертольоти */}
                <Section
                    isOn={isHelicoptersOn}
                    title="Магазин моделей вертольотів"
                    color={backgroundColor}
                >
                    <PlanesList items={helicopters} />
                </Section>
            </>
        )
    }
}
