import styled from 'styled-components';
import colours from '../../styles/colours';
import { device } from "../../styles/device";

export const SearchContainer = styled.div`
    position: relative;
`
export const Add = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: inline-block;
    background: ${colours.HONEY_DEW};
    text-align: center;    
    font-size: 25px;
    color: ${colours.TEAL}
    &:before {
        content: "+";
    }
`
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    background: white;
    &:hover{
        background: ${colours.HONEY_DEW};
    }
`;
export const AddContainer = styled.div`
    padding: 16px 10px;
    ${device.small`
        width:100%;
        padding: 10px;
    `}
    ${device.medium`
        width:100%;
        padding: 16px 10px;
    `}
`
export const InputContainer = styled.div`
    padding: 16px 10px;
    box-shadow: 1px 3px 7px 0px ${colours.DARK_GRAY};
    i.fa-times{
        position: absolute;
        right: 10px;
        margin-top: 8px;
    }
    ${device.small`
        width:100%;
        padding: 10px;
    `}
    ${device.medium`
        width:100%;
        padding: 16px 10px;
    `}
`;
export const AutoCompleteList = styled.ul`
    display: inline-block;
    position: absolute;
    padding: 0px;
    left: 0;
    top: 64px;
    max-width: 100%;
    width: 100%;
    z-index: 99;
    list-style: none;
    box-shadow: 1px 3px 7px 0px ${colours.DARK_GRAY};   
`