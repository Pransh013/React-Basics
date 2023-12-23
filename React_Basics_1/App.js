const heading1 = React.createElement('h1', {id: 'pink', style: {color: 'pink',}}, 'Hii, I am Pink');
const heading2 = React.createElement('h3', {id: 'yellow', style: {color: 'yellow',}}, 'Hii, I am Yellow');
const container = React.createElement('div', {id: 'container', style: {backgroundColor: 'teal', borderRadius: '8px', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(container);