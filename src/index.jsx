import { CommonDOMRenderer } from 'render-jsx/dom';


const renderer = new CommonDOMRenderer();
renderer.render(<>Hellow World!</>).on(document.body);