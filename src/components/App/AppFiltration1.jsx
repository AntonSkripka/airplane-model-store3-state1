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
        value: 0,
    };

    render() {
        return (
            <>
                <div className={css.filterBox}>
                    <button
                        className={css.buttonAllFiltration}
                        type="button"
                    >
                        ВСІ
                    </button>

                    <button
                        className={css.buttonPlaneFiltration}
                        type="button"
                    >
                        Літаки
                    </button>

                    <button
                        className={css.buttonHelicopterFiltration}
                        type="button"
                    >
                        Вертольоти
                    </button>
                </div>

                {/*//! Літаки */}
                <Section isOn={true} title="Магазин моделей літаків">
                    <PlanesList items={planes} />
                </Section >

                {/*//! Вертольоти */}
                <Section isOn={true} title="Магазин моделей вертольотів">
                    <PlanesList items={helicopters} />
                </Section >
            </>
        )
    }
}
