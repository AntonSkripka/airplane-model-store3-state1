import styled from '@emotion/styled';
import {getBgColorEmotion} from "@/utils/getBackgroundColor"

export const PlanesListStyled = styled.ul`
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(445px, 1fr));
  gap: 32px;
  outline: 1px solid red;
`

export const PlanesItemStyled = styled.li`
    display: grid;
    gap: 12px;
    padding: 10px;
    //todo: var.1
    background-color: ${getBgColorEmotion};

    outline: 1px solid grey;
`

