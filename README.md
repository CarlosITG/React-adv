# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

## Patrones de diseño en REACT

1-) Compound component pattern react:
el cual es muy usado por Material UI, ionic y muchos otros que trabajan con componentes
previamente creados que se pueden anidar entre si mediante HOCs (Higher Order Components)

2-) component step styles: poderle dar estilos a un componente propio mediante clases y la propiedad style

3-) Controll Props En esta sección aprenderemos a darle el control a nuestro usuario o compañero de trabajo sobre las propiedades y estado de nuestro componente, usualmente este patrón es el que se utiliza de manera tradicional en formularios, es decir:

<input
value={ algún valor de solo lectura }
onChange={ alguna función que cambia el valor }
/>
Este patrón es el que implementaremos a continuación
