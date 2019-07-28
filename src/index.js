import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import HomeView from './HomeView';
import TimerView from './TimerView';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

export const Root = styled.div`
    @font-face {
        font-family: 'Museo Sans Rounded';
        src: url(./assets/MuseoSansRounded-500-webfont.woff2);
    }

    font-family: Museo Sans Rounded;
    font-size: 30px;
`;

ReactDOM.render(
    <HashRouter>
        <Root>
            <GlobalStyle />
            <Switch>
                <Route path="/timer" component={TimerView} />
                <Route path="/" component={HomeView} />
            </Switch>
        </Root>
    </HashRouter>,
    document.getElementById('app')
);
