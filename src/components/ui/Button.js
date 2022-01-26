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

const StyledButton = styled(antd.Button)`
    height: ${COMMON.height.control.def};
    padding: 6.4px 19px;
    font-size: 16px;
    border-color: ${PALETTE.primary.def};
    color: ${PALETTE.primary.def};
    border-radius: ${COMMON.border.radius.control.def};
    &:hover,
    &:focus {
        color: ${PALETTE.primary.def};
        border-color: ${PALETTE.primary.def};
        background: rgba(115,103,240,.04);
    }
    ${props => props.type == 'primary' && css`
        color: ${PALETTE.white};
        border-color: ${PALETTE.primary.def};
        background: ${PALETTE.primary.def};
    &:hover,
    &:focus {
        color: ${PALETTE.white};
        background: ${PALETTE.primary.def};
        border-color: ${PALETTE.primary.def};
        box-shadow: 0 8px 25px -8px #7367f0;
    }
    `}
    ${props => props.type == 'link' && css`
        color: ${PALETTE.primary};
        font-size: 14px;
        padding: 0;
        height: auto;
        border-color: transparent;
        background: transparent;
        box-shadow: none;
        &:hover {
            border-color: transparent;
            background: transparent;
        }
    `}
    ${props => props.size == 'large' && css`
        height: ${COMMON.height.control.lg};
        padding: 9px 27px;
        font-size: 18px;
    `}
    ${props => props.size == 'small' && css`
        height: ${COMMON.height.control.sm};
        padding: 4px 15px;
        font-size: 14px;
    `}
    ${props => !props.children && !props.size && css`
        width: ${COMMON.height.control.def};
        height: ${COMMON.height.control.def};
        padding: 4.9px 0;
        font-size: 18px;
        border-radius: ${COMMON.border.radius.control.def};
        vertical-align: -3px;
        & > * {
            font-size: 18px;
        }
    `}
    ${props => !props.children && props.size == 'large' && css`
        width: ${COMMON.height.control.lg} !important;
        height: ${COMMON.height.control.lg} !important;
        padding: 12px 0;
        font-size: 22px !important;
        border-radius: ${COMMON.border.radius.control.def} !important;
        & > * {
            font-size: 22px !important;
        }
    `}
    ${props => !props.children && props.size == 'small' && css`
        width: ${COMMON.height.control.sm} !important;
        height: ${COMMON.height.control.sm} !important;
        padding: 2.4px 0 !important;
        font-size: 16px !important;
        border-radius: ${COMMON.border.radius.control.def} !important;
        & > * {
            font-size: 16px !important;
        }
    `}
`;

export const Button = (props) => {
    return (
        <StyledButton {...props} />
    )
}
