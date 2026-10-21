//! Бібліотека react-icons
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'; //! Приклад react-icons
import { AiOutlineFlag, AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { GiArmoredBoomerang, GiCeremonialMask, GiAirplaneDeparture, GiCommercialAirplane, GiCurlyMask } from "react-icons/gi";
import { CiBadgeDollar, CiGlobe, CiAirportSign1 } from "react-icons/ci";
import { TbClockHour4Filled } from "react-icons/tb";
import { FcTrademark } from "react-icons/fc";
//? nameBrief
//? nameFull - <FcTrademark /> - Повна назва
//? type - <GiArmoredBoomerang /> - бумеранг, <GiCommercialAirplane /> - літак- Тип
//? nickname - <GiCeremonialMask /> маска1, <GiCurlyMask /> маска2  - Прізвисько
//? country - <AiOutlineFlag /> - прапор, <CiGlobe /> - глобус - Країна виробник
//? year - <AiOutlineClockCircle /> - годинник - Рік випуску
//? duration - <TbClockHour4Filled /> - годинник - Тривалість виробництва(в роках)
//? price - <CiBadgeDollar/> - $, <AiOutlineDollarCircle /> - $ - Ціна
//? description - <AiOutlineInfoCircle /> - info - Опис
//? <GiAirplaneDeparture /> - Рекламна модель
//? <CiAirportSign1 /> - Реальна модель

import defaultImage from "./default.png" //! Дефолтне зображення
import { iconSize } from '@/constants/iconSize.js';
//! Реекспорт - декілька імпортів з однієї папки
// import { getManufacturingYears } from '@/utils/formatDateDuration';
// import { getManufacturingYears, getBgColorVanillaCSS, getBgColorCSSModule, getBgColorBuiltInStyles } from '@/utils';
// console.log(getBgColorVanillaCSS(1999))
// console.log(getBgColorCSSModule(1999))
// console.log(getBgColorBuiltInStyles(1999))
import { getManufacturingYears } from '@/utils';
// iconSize.md = 56;
import css from "./PlaneItem.module.css"; //! CSS-модулі
import {
    PlanesTitleStyled,
    TextFieldStyled,
    TextFieldValueStyled,
    ImageTitles,
    ActualImageBox,
    ActualImageStyled,
    ItemButtonStyled,
    IconStyled
} from "./PlaneItem.styled";
// //! Стилі для текстових полів
// const textField = {
//     fontSize: '18px',
//     fontWeight: 700,
// }

// //! Стилі для значень текстових полів
// const textFieldValue = {
//     fontWeight: 400,
//     fontStyle: "italic",
// }

// //! Стилі для заголовків зображень
// const imageTitles = {
//     textAlign: 'center',
//     color: 'blue'
// }


function onErrorImg(e) {
    e.target.onError = null;
    e.target.src = defaultImage;
}

export default function PlaneItem({
    url = defaultImage,
    promotialUrl = defaultImage,
    realUrl,

    title,
    fullTitle,
    nickname,

    year,
    country,
    type,
    price,
    description,

    startM,
    endM
}) {
    return (
        <>
            {/* //! Приклад react-icons */}

            <PlanesTitleStyled
            // style={{
            //     marginBottom: 12,
            //     padding: "12px 16px",
            //     fontSize: 32,
            //     textAlign: 'center',
            //     borderRadius: 8,
            //     backgroundColor: "yellow",
            //     color: "blue",
            // }}
            // className={css.planesTitle}
            >
                {title}
            </PlanesTitleStyled>
            <img src={url} alt={fullTitle} onError={(e) => onErrorImg(e)} />
            <TextFieldStyled><FcTrademark size={iconSize.md} className={css.icon} />Повна назва: <TextFieldValueStyled>{fullTitle}</TextFieldValueStyled></TextFieldStyled>
            <TextFieldStyled><GiArmoredBoomerang size={iconSize.md} className={css.icon} />Тип: <TextFieldValueStyled><GiCommercialAirplane />{type}</TextFieldValueStyled></TextFieldStyled>
            <TextFieldStyled><GiCeremonialMask size={iconSize.md} className={css.icon} />Прізвисько: <TextFieldValueStyled>{nickname}</TextFieldValueStyled></TextFieldStyled>
            <TextFieldStyled><AiOutlineFlag size={iconSize.md} className={css.icon} />Країна виробник: <TextFieldValueStyled>{country}</TextFieldValueStyled></TextFieldStyled>
            <TextFieldStyled><AiOutlineClockCircle size={iconSize.md} className={css.icon} />Рік випуску: <TextFieldValueStyled>{year}</TextFieldValueStyled></TextFieldStyled>
            <TextFieldStyled><TbClockHour4Filled size={iconSize.md} className={css.icon} />Тривалість виробництва(в роках): <TextFieldValueStyled>{getManufacturingYears(startM, endM)}</TextFieldValueStyled></TextFieldStyled>
            <TextFieldStyled><TbClockHour4Filled size={iconSize.md} className={css.icon} />Актуальність: <TextFieldValueStyled>{(year >= 2000) ? "сучасний" : "минуле століття"}</TextFieldValueStyled></TextFieldStyled>
            <TextFieldStyled><CiBadgeDollar size={iconSize.md} className={css.icon} />Ціна: <TextFieldValueStyled>{price}</TextFieldValueStyled></TextFieldStyled>
            <TextFieldStyled><AiOutlineInfoCircle size={iconSize.md} className={css.icon} />Опис: <TextFieldValueStyled>{description}</TextFieldValueStyled></TextFieldStyled>
            <ImageTitles>
                <GiAirplaneDeparture
                    size={iconSize.md}
                />Рекламна модель:
            </ImageTitles>
            <img src={promotialUrl} alt={fullTitle} width="600" onError={(e) => onErrorImg(e)} />
            <ImageTitles>
                <CiAirportSign1
                    // size={iconSize.md}
                />Реальна модель:
            </ImageTitles>
            <ActualImageBox
            // className={css.actualImageBox}
            >
                {realUrl.map((img, index) => {
                    return (<ActualImageStyled key={index}
                        src={img} alt={fullTitle} width="300" onError={(e) => onErrorImg(e)}
                    />)
                })}
            </ActualImageBox>
            <br />
            <ItemButtonStyled
                className={css.itemButton}
                type="button">Додати до кошику
            </ItemButtonStyled>
        </>
    )
}