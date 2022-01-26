import React from 'react';
import * as antd from 'antd';
import styled, { css } from 'styled-components';

const COMMON = {
    height: {
        control: {
            def: '40px',
            sm: '32px',
            lg: '48px',
        },
    },
    border: {
        radius: {
            control: {
                def: '4px',
            },
        },
    },
}

const PALETTE = {
    primary: {
        def: '#7367f0'
    },
    white: '#ffffff'
}

const StyledCheckbox = styled(antd.Checkbox)`
/* border: 1px solid red; */
& > span > span {
    width: 18px;
    height: 18px;
}

&:hover .ant-checkbox-inner {
    border-color: #d9d9d9;
}

& .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${PALETTE.primary.def};
        border-color: ${PALETTE.primary.def};
        box-shadow: 0 2px 4px 0 rgba(115,103,240,.4)!important;
    }

    /* ${props => props.backgroundColor && css`
      & .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${props.backgroundColor};
        border-color: ${props.backgroundColor};
      }
 
     `} */
 &:hover .ant-checkbox::after {
  visibility: hidden;
}
    


`;

export const Checkbox = (props) => {
    return (
        <StyledCheckbox {...props} />
    )
}
