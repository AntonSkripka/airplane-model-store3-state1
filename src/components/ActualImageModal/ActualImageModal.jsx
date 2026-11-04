import { Component } from 'react';
//? Бібліотека для модальних вікон: Yet Another React Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
//? Додавання плагінів Yet Another React Lightbox
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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
        const { images, briefName, error, description } = this.props;
        const { open, index } = this.state;
        //! Масив об'єктів зображень для Lightbox
        // const slides = images.map((src) => ({ src }));
        //? Для плагіна Captions і Share
        const slides = images.map((src) => ({
            src,
            title: briefName,
            description: description,
        }));


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
                    //! ЗНАЧЕННЯ ОСНОВНИХ ВЛАСТИВОСТЕЙ Lightbox:
                    //! open - Відкрито або закрито галерею
                    //! close - Функція закриття галереї
                    //! slides - Масив об'єктів з зображеннями для перегляду
                    //! index - ндекс фотографії, з якої починається перегляд
                    open={open}
                    close={this.closeLightbox}
                    slides={slides}
                    index={index}
                    //? Додавання популярних плагінів: Fullscreen + Zoom
                    counter={{
                        container: {
                            style: {
                                top: "6vh",
                                bottom: "unset",
                                left: "4vw",
                                fontSize: "1.25em",
                                fontWeight: 900,
                                color: "red",
                            }
                        }
                    }}
                    captions={{
                        showToggle: true,
                        descriptionTextAlign: "center",
                        descriptionMaxLines: 3
                    }}
                    thumbnails={{
                        position: "bottom",
                        width: 120,
                        height: 80,
                        border: 1,
                        borderRadius: 4,
                        padding: 4,
                        gap: 16,
                        imageFit: "contain",
                        vignette: true,
                        hidden: false,
                        showToggle: true
                    }}


                    plugins={[Fullscreen, Zoom, Download, Slideshow, Counter, Captions, Thumbnails]}
                />

            </div>
        )
    }
}