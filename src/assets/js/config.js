import 'normalize.css';
import '../styles/main.scss';

const tl = new TimelineLite({ repeat: 0 });
const squares = document.querySelectorAll('.loader__square');
const lastSquare = squares[squares.length - 1];
tl.staggerTo('.loader__square', 0.75, { delay: 0.3, autoAlpha: 1, y: 5 }, 0.3)
  .staggerTo(lastSquare, 0.1, { 'background-color': 'orange' }, 0.1)
  .staggerTo('.loader__container', 0.1, { gap: 0 }, 0.1)
  .staggerTo(squares, 0.1, { background: 'orange' })
  .staggerTo('.loader__image', 0.5, { autoAlpha: 1 }, 0.5)
  .staggerTo(squares, 0.2, { background: 'white' })
  .staggerTo('.loader__container', 0.4, { background: 'white', gap: 0 }, 0.3)
  .staggerTo('.loader__text', 0.2, { text: { value: 'nicaela' } }, 0.3);
