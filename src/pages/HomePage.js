import {useEffect, useState} from "react";
import {Cargando} from "../components/Cargando";
import {useMetrics} from "../hooks/useMetrics";

export const HomePage = () => {

  const {isLoading,thisYear, lastYear} = useMetrics();

  if (isLoading) { // si está cargando, mostramos un texto que lo indique
    return (
        <>
          <h1 className='text-center'>Home</h1>
          <Cargando />
        </>
    );
  }

  return (
      <>
        <h1 className='text-center'>Home</h1>
        <p>
          El teléfono del Maltrato cerró el año {new Date().getFullYear()-1} con {lastYear} casos.
        </p>

        <p>
          En lo que llevamos de {new Date().getFullYear()}, nos han llamado {thisYear} personas. ¿Nos ayudas a cambiar esta realidad?
        </p>
      </>
  );

}