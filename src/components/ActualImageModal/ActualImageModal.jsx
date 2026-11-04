import { Component } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import css from './ActualImageModal.module.css';

export class ActualImageModal extends Component {
    state = {
        open: false, //! керування відкриттям та закриттям галереї
        index: 0 //! індекс зображення, з якого відкриваємо галерею
    };

    //! Обробник кліка по зображенню
    openLightbox = (i) => {
        this.setState({
            open: true,
            index: i
        });
    };

    //! Обробник закриття галереї
    closeLightbox = () => {
        this.setState({
            open: false
        });
    };


    render() {
        const { images, briefName, error } = this.props;
        const { open, index } = this.state;
        //! Масив об'єктів зображень для Lightbox
        const slides = images.map((src) => ({ src }));

        return (
            <div
                className={css.actualImageBox}
            >
                {images.map((img, index) => {
                    return (
                        <img
                            key={index}
                            className={css.actualImage}
                            src={img}
                            alt={briefName}
                            width="300"
                            onError={(e) => error(e)}
                            style={{ cursor: "pointer" }}
                            //! Обробник onClick запам'ятовує індекс фотографії на яку натиснув користувач
                            onClick={() => this.openLightbox(index)}
                        />)
                })}
                {/*//! Lightbox */}
                <Lightbox
                    open={open}
                    close={this.closeLightbox}
                    slides={slides}
                    index={index}
                />

            </div>
        )
    }
}