# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

## Patrones de diseño en REACT

**1-) Compound component pattern react:**
el cual es muy usado por Material UI, ionic y muchos otros que trabajan con componentes
previamente creados que se pueden anidar entre si mediante HOCs (Higher Order Components)

**2-) component step styles:**
poderle dar estilos a un componente propio mediante clases y la propiedad style

**3-) Controll Props:**
En esta sección aprenderemos a darle el control a nuestro usuario o compañero de trabajo sobre las propiedades y estado de nuestro componente, usualmente este patrón es el que se utiliza de manera tradicional en formularios, es decir:

<input
value={ algún valor de solo lectura }
onChange={ alguna función que cambia el valor }
/>
Este patrón es el que implementaremos a continuación

**4-) State Initializer:**
Lo que están apunto de observar en esta sección es el patrón State Initializer junto al diseño de componentes que utiliza Formik.

El principal objetivo es poder exponer todo lo que el usuario (otro desarrollador) puede utilizar, el patrón principalmente pide que se pueda ofrecer un estado inicial y una forma de re-establecer el estado a su forma original, pero nosotros aquí lo llevaremos a otro nivel exponiendo funciones y nuevas propiedades.

También aprenderemos a enviar una función como children, similar a la implementación de Formik.
