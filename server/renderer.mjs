import React from 'react';
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import path from 'path';
import fs from 'fs';
import App from '../src/App';

function reactRenderer(req, res) {
    const context = {};
    var app = renderToString(<StaticRouter url={req.url} context={context}> {React.createElement(App)}</StaticRouter>);
    var html = fs
        .readFileSync(path.join(path.join(__dirname, '..', 'build'), 'index.html'), 'utf8')
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`);
    return res.send(html);
}

export default reactRenderer;