import css from './AppCounter.module.css'

export function AppCounter() {
    return (
        <div className={css.counter}>
            <span className={css.counterValue}>0</span>
            <div className={css.counterControls}>
                <button className={css.buttonIncrement}>+ 1</button>
                <button className={css.buttonDecrement}>- 1</button>
            </div>
        </div>
    )
}