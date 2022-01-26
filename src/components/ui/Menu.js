import React from 'react';
import * as antd from 'antd';
import styled, { css } from 'styled-components';


const StyledMenuItem = styled(antd.Menu.Item)`

`;
const StyledSubMenu = styled(antd.SubMenu)`

`;

const StyledMenu = styled(antd.Menu)`

`;

export const MenuItem = (props) => {
    return (
        <StyledMenuItem {...props} />
    )
}
export const SubMenu = (props) => {
    return (
        <StyledSubMenu {...props} />
    )
}
export const Menu = (props) => {
    return (
        <StyledMenu {...props} />
    )
}
