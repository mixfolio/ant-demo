import React from 'react';
import * as antd from 'antd';
import styled, { css } from 'styled-components';

const StyledFormItem = styled(antd.Form.Item)`

& .ant-form-item-label {
    padding-bottom: 4px;
    & label {
        font-size: 12px;
        line-height: 16px
    }
}

`;

const StyledForm = styled(antd.Form)`
 
`;

export const FormItem = (props) => {
    return (
        <StyledFormItem {...props} />
    )
}
export const Form = (props) => {
    return (
        <StyledForm {...props} />
    )
}
