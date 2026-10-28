import css from "./Filter.module.css";

export function Filter({ onSetAll, onSetPlanes, onSetHelicopters }) {

    return (
    <div className={css.filterBox}>
        <button
            className={css.buttonAllFiltration}
            type="button"
            onClick={onSetAll}
        >
            ВСІ
        </button>

        <button
            className={css.buttonPlaneFiltration}
            type="button"
            onClick={onSetPlanes}
        >
            Літаки
        </button>

        <button
            className={css.buttonHelicopterFiltration}
            type="button"
            onClick={onSetHelicopters}
        >
            Вертольоти
        </button>
    </div>
    )
}