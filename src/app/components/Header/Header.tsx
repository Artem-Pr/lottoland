import React from 'react';
import {Layout} from 'antd';

import {Svg} from '../../../uiKit';

const {Header: HeaderLayout} = Layout;

export const Header = () => (
    <HeaderLayout>
        <div className="container position-fixed">
            <Svg iconName="ll-logo-green" className="logo" />
        </div>
    </HeaderLayout>
);
