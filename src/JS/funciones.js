import '../css/componentes.css';
// import casero from '../assets/img/casero-batman.gif';

export const saludar = (nombre) =>{// export es para que se pueda exportar
    console.log('Creando etiqueta');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}!!!`;

    document.body.append(h1);

    //img 
    // console.log(casero)
    // const img = document.createElement('img');
    // img.src = casero;
    // document.body.append(img);
    
}
