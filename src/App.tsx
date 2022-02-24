import React from 'react';
import {Layout} from 'antd';

import {MainPage} from './app/pages/MainPage';
import {Header} from './app/components';

function App() {
    return (
        <Layout>
            <Header />
            <MainPage />
        </Layout>
    );
}

export default App;
