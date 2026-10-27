import css from "./Counter.module.css"

export function Value({currentValue}) {
    return (
        <span className={css.counterValue}>{currentValue}</span>
    )
}