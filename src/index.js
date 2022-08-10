import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './Componentes/App';

// const newLocal = <div>
//   <h1>Titulo</h1>
//   <div>
//     Contenido......
//   </div>
// </div>;

// function Componente({titulo,Contenido}) {
//   return (
//     <div>
//       <h1>{titulo }</h1>,
//       <div>
//         {Contenido}
//       </div>
//     </div>  
//   );

// }

// class Componente extends Component {
//   render() {
//     return (
//           <div>
//             <h1>{this.props.titulo }</h1>,
//             <div>
//               {this.props.Contenido}
//             </div>
//           </div>  
//         );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Componente titulo="........Curso Básico de ReactJs...." Contenido="Introducción......" Desarrollo="Concepot de Componentes"/>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <App/>
);