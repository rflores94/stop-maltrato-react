import {useEffect, useState} from "react";

export const useMetrics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [thisYear, setThisYear] = useState(null);
  const [lastYear, setLastUrl] = useState(null);

  useEffect(() => {
    let year = new Date().getFullYear();
    fetch("https://picam.confemac.net/api-rest/public/seguimientoYear/" + year)
        .then((response) => response.json())
        .then((response) => {
          setThisYear(response.num); // Guardar datos
          setLastUrl(response.numAnyoPasado); // Guardar datos
          setIsLoading(false); // Desactivar modo "cargando"
        });
  }, []);

  return {
    isLoading,
    thisYear,
    lastYear
  }
}