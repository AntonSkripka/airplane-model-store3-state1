import { Component } from 'react';
import Section from '@/components/Section/Section.jsx';
import PlanesList from "@/components/PlanesList/PlanesList"
import planes from '@/json/planes.json';
import helicopters from '@/json/helicopters.json';
import css from "./AppFiltration.module.css"


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
        filter: '', // 'all', 'planes'  'helicopters'
    };

    handleFilter = (filterType) => {
        this.setState({ filter: filterType });
    };

    setAll = () => {
        console.log("Кнопка All")
        this.setState({ filter: "all" });
    }
    setPlanes = () => {
        console.log("Кнопка Planes")
        this.setState({ filter: "planes" });
    }
    setHelicopters = () => {
        console.log("Кнопка helicopters")
        this.setState({ filter: "helicopters" });
    }

    render() {
        const { filter } = this.state;
        console.log("-------------------- props & state --------------------");
        // console.log("ℹ️initialValue:", initialValue);
        console.log("🔢filter:", filter);
        console.log("-------------------------------------------------------");

        const showAll = filter === 'all';
        const showPlanes = filter === 'planes' || showAll;
        const showHelicopters = filter === 'helicopters' || showAll;

        return (
            <>
                <div className={css.filterBox}>
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
                </div>

                {showPlanes && (
                    <Section isOn={true} title="Магазин моделей літаків">
                        <PlanesList items={planes} />
                    </Section>
                )}

                {/* //! Вертольоти */}
                {showHelicopters && (
                    <Section isOn={true} title="Магазин моделей вертольотів">
                        <PlanesList items={helicopters} />
                    </Section>
                )}
            </>
        )
    }
}
