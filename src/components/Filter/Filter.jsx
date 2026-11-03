import css from "./Filter.module.css";

export function Filter({activeButton, onSetAll, onSetPlanes, onSetHelicopters, onSetBiplanes }) {

    return (
    <div className={css.filterBox}>
        <button
            // className={css.buttonAllFiltration}
            className={activeButton === "all" ? `${css.buttonAllFiltration} ${css.active}` : css.buttonAllFiltration}
            type="button"
            onClick={onSetAll}
        >
            ВСІ
        </button>

        <button
            className={activeButton === "planes" ? `${css.buttonPlaneFiltration} ${css.active}` : css.buttonPlaneFiltration}
            type="button"
            onClick={onSetPlanes}
        >
            Літаки
        </button>

        <button
            // className={css.buttonBiplaneFiltration}
            className={activeButton === "biplanes" ? `${css.buttonBiplaneFiltration} ${css.active}` : css.buttonBiplaneFiltration}
            type="button"
            onClick={onSetBiplanes}
        >
            Біплани
        </button>

        <button
            // className={css.buttonHelicopterFiltration}
            className={activeButton === "helicopters" ? `${css.buttonHelicopterFiltration} ${css.active}` : css.buttonHelicopterFiltration}
            type="button"
            onClick={onSetHelicopters}
        >
            Вертольоти
        </button>
    </div>
    )
}