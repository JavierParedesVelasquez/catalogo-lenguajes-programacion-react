
import "./App.css";
import React from 'react';

// Array lista de cursos
const listacursos = [
  {
    titulo: "Angular",
    imagen: "https://dormoshe.io/images/newsletters/badges/angular.png",
    precio: "S/.100",
    comprar: "Agregar",
  },
  {
    titulo: "TypeScript",
    imagen: "https://dormoshe.io/images/newsletters/badges/typescript.png",
    precio: "S/.200",
    comprar: "Agregar",
  },
  {
    titulo: "VueJS",
    imagen: "https://dormoshe.io/images/newsletters/badges/vuejs.png",
    precio: "S/.300",
    comprar: "Agregar",
  },
  {
    titulo: "NodeJS",
    imagen: "https://dormoshe.io/images/newsletters/badges/nodejs.png",
    precio: "S/.700",
    comprar: "Agregar",
  },
  {
    titulo: "Android",
    imagen: "https://dormoshe.io/images/newsletters/badges/android.png",
    precio: "S/.800",
    comprar: "Agregar",
  },
  {
    titulo: "React",
    imagen: "https://dormoshe.io/images/newsletters/badges/react.png",
    precio: "S/.300",
    comprar: "Agregar",
  },
  {
    titulo: "JavaScript",
    imagen: "https://dormoshe.io/images/newsletters/badges/javascript.png",
    precio: "S/.700",
    comprar: "Agregar",
  },
  {
    titulo: "Kotlin",
    imagen: "https://dormoshe.io/images/newsletters/badges/kotlin.png",
    precio: "S/.800",
    comprar: "Agregar",
  },
  {
    titulo: "CSS",
    imagen: "https://dormoshe.io/images/newsletters/badges/css.png",
    precio: "S/.300",
    comprar: "Agregar",
  },
];

// Componentes para definir los titulos a los cursos
const Titulocursos = (props) => {
  return <p style={{ textAlign: "center" }}>{props.user.titulo}</p>;
};
// Componentes para definir las imagenes de los cursos
const ImagenesCursos = (props) => {
  return (
    <img
      src={props.user.imagen}
      alt={props.user.titulo}
      style={{ width: "200px" }}
    />
  )
};
// Componente para precio
const PrecioCurso = (props) => {
  return <h3 style={{ textAlign: "center" }}>{props.user.precio}</h3>;
};
// Componente para cursos
const ComprarCursos = (props) => {
  return (
    <button
      onClick={() => alert("En proceso de Implementación")}
      style={{ marginLeft: "70px" }}
    >
      {props.user.comprar}
    </button>
  )
};
// Se encarga de llamar a todos los componentes
// Se llama componentes adentro de componentes
const User = (props) => {
  return (
    <div className="user-item">
      <Titulocursos user={props.user} />
      <ImagenesCursos user={props.user} />
      <PrecioCurso user={props.user} />
      <ComprarCursos user={props.user} />
    </div>
  )
};
// Este componente es el que hace el barrido (recorrido)
const UserList = (props) => {
  const UserList = props.list.map((user, i) => <User user={user} key={i} />);
  return <div className="user-list">{UserList}</div>;
};

const xtitulo = "Cursos Relacionados con Front-End";
const xcolor = "blue";

function App() {
  return (
    <div className="App">
      <h1 className="titulo" style={{ color: xcolor }}>
        {xtitulo}
      </h1>
      <h1 className="titulo" style={{ color: xcolor }}>
        Desarrollador Web
      </h1>

      <UserList list={listacursos} />
    </div>
  );
}

export default App;
