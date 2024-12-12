import { createServer } from 'node:http';
import { templateHome, templateAbout } from './template.js';

const PORT = 3000;

function render(template, data) {
  return template.replace(/{{(\w+)}}/g, (_, key) => data[key] || '');
}

const server = createServer((req, res) => {
  if (req.url === '/') {
    
    const currentTime = new Date().toLocaleTimeString();
    const year = new Date().getFullYear();
    const data = {
      title: 'Manual Server Side Rendering',
      heading: 'Welcome to Server-Side Rendering',
      content: 'This page is rendered dynamically using plain JavaScript.',
      currentTime,
      year,
    };

    const renderedHTML = render(templateHome, data);

    res.setHeader('Content-Type', 'text/html');
    res.end(renderedHTML);
  } else if (req.url === '/about') {
    const renderedHTML = render(templateAbout, {});
    res.setHeader('Content-Type', 'text/html');
    res.end(renderedHTML);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
