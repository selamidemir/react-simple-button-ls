# react-simple-button-ls

> Simple button for React

[![NPM](https://img.shields.io/npm/v/react-simple-button-ls.svg)](https://www.npmjs.com/package/react-simple-button-ls) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-simple-button-ls
```

## Usage

```jsx
import Reactfrom 'react';

import Button from 'react-simple-button-ls';
import 'react-simple-button-ls/dist/index.css';

class Example extends Component {
  render() {
    return <Button type='dashed'>Dashed Button</Button>
  }
}
```
## Button Types
Button types are default, primary, dashed, text, link. You set type prop to change the button type.

## Use Event
To use event you can add event in Button props.

```<Button type='dashed' onClick={btnClicked}>Pls Click</Button>```

## Use Css Class
To use special css class you can add style props.

```<Button type='text' style={{color: red}}>Red Text Button</Button>```

## Use Class Name
To set class name you can add className prop.

```<Button type='link' className='your-class-name'>Link Button with CSS Classes</Button>```

## License

MIT © [selamidemir](https://github.com/selamidemir)
