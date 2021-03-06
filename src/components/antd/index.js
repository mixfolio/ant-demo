import AntButton, {
    ButtonProps as AntButtonProps,
} from 'antd/lib/button/index';
import Tooltip from 'antd/lib/tooltip';
import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled(AntButton)`
    background-color: red;
`;

// export type ButtonProps = AntButtonProps & {
//     tooltipTitle?: React.ReactNode;
// };

const MyButton = ({ tooltipTitle, ...props }) => {
    const button = (
        <ButtonStyled {...props} className={classNames(props.className)} />
    );
    if (tooltipTitle) {
        return <Tooltip title={tooltipTitle}>{button}</Tooltip>;
    }
    return button;
};

export default MyButton;