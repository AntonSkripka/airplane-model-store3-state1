import styled from '@emotion/styled';

export const PlanesTitleStyled = styled.h3`
  /*//! Налаштування відступів - spacing */
  margin-bottom: ${props => props.theme.spacing(3)};
  padding: 12px 16px;
  font-size: 32px;
  text-align: center;
  border-radius: 8px;
  background-color: yellow;
  color: blue;
`

export const TextFieldStyled = styled.p`
  font-size: 18px;
  font-weight: 700;

  svg {
        /* min-width: 28px; */
        min-width: ${props => props.theme.iconSize.md}px;
        height: ${props => props.theme.iconSize.md}px;
        margin-bottom: -8px;
        /* color: #9b25fc; */
        color: ${props => props.theme.iconColor.textField};
    }
`

export const TextFieldValueStyled = styled.span`
  font-weight: 400;
  font-style: italic;
`

export const ImageTitles = styled.p`
    text-align: center;
    color: blue;

    /*//todo: Налаштування для іконок */
    svg {
        margin-bottom: -10px;
        margin-right: 4px;
        width: ${props => props.theme.iconSize.lg}px;
        height: ${props => props.theme.iconSize.lg}px;
        // outline: 1px solid red; 
    }

`

export const ActualImageBox = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 8px;
  border-radius: 8;
  background-color: gray;
`

export const ActualImageStyled = styled.img`
  max-width: calc((100% - 10px) / 2);
  border-radius: 4px;
`

export const ItemButtonStyled = styled.button`
  width: 70%;
  margin: 20px auto;
  padding: 16px 32px;
  display: inline-block;
  align-items: center;
  font-family: 'Franklin Gothic Medium, Arial Narrow';
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  background-color: #008080;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 16px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.9);
`

export const IconStyled = styled.svg`
    margin-bottom: -8px;
    color: #9b25fc;
`