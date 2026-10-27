import css from "./Counter.module.css"

export function Controls({onHandleIncrement, onHandleDecrement}) {
    return (
        <div className={css.counterControls}>
            <button
                className={css.buttonIncrement}
                // onClick={() => { console.log("+1") }}
                onClick={onHandleIncrement}
            >
                + 1
            </button>
            <button
                className={css.buttonDecrement}
                onClick={onHandleDecrement}
            >
                - 1
            </button>
        </div>
    )
}