import React, { Component } from "react";
import css from "./Counter.module.css"


//! Компонент-клас
// export class Counter extends React.Component {
export class Counter extends Component {
    static defaultProps = {
        initialValue: 0,
    }

    //todo: var.1 - створення об'єкта state
    // constructor() {
    //     super();
    //     this.state = {
    //         value: 0,
    //         // value: 5,
    //     }
    // };
    //todo: var.2 - створення об'єкта state
    // state = {
    //     value: 0,

    // };

    state = {
        value: this.props.initialValue,
    };



    handleIncrement = () => {

        console.log("+1");
        // console.log("this:", this); //! undefined
        // console.log("event:", event);
        // console.log("event.target:", event.target);
        // console.log("event.type:", event.type);
        //! Доступность event в синхронном коде
        //todo: var.1
        // setTimeout(() => {
        //     console.log("event.target:", event.target);
        // }, 1000);
        //todo: var.2
        // const target = event.target;
        // setTimeout(() => {
        //     console.log("target:", target);
        // }, 2000);

        // this.state.value = 6; //! ❗️❗️❗️ так не можна робити!!!!
        // this.render();
        // this.setState({ value: 9 }); //* ✅ так треба робити для створення НОВОГО ЗНАЧЕННЯ
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            };
        });
    };

    handleDecrement = () => {
        console.log("-1");
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            };
        });
    }

    render() {
        const { initialValue } = this.props; //! деструктурізуємо значення props
        const { value } = this.state; //! деструктурізуємо значення state

        console.log("-------------------- props & state --------------------");
        console.log("ℹ️initialValue:", initialValue);
        console.log("🔢value:", value);
        console.log("-------------------------------------------------------");

        return (
            <div className={css.counter}>
                {/* <span className={css.counterValue}>0</span> */}
                <span className={css.counterValue}>{this.state.value}</span>
                <div className={css.counterControls}>
                    <button
                        className={css.buttonIncrement}
                        // onClick={() => { console.log("+1") }}
                        onClick={this.handleIncrement}
                    >
                        + 1
                    </button>
                    <button
                        className={css.buttonDecrement}
                        onClick={this.handleDecrement}
                    >
                        - 1
                    </button>
                </div>
            </div>
        )
    };


}
//! Перерендер компонентів відбувається у двох випадках:
//! 1.Коли до них приходять нові props
//! 2.Коли змінюється state ✅
