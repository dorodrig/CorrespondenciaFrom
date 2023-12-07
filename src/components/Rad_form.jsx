import { useContext } from "react";
import AuthContext from "../context/AuthContext";
const Rad_form = () => {
  let { setStep } = useContext(AuthContext);
  return (
    <>
      <h2>Radicación de correspondencia</h2>
      <form action="" autoComplete="off">
        <fieldset>
          <h3>Datos generales</h3>
          <div className="ContdatosPrincipales">
            <div className="datosPrincipales">
              <label htmlFor="">Fecha de radicación</label>
              <input
                type="date"
                name="datosPrincipales__fecha"
                id="datosPrincipales__fecha"
              />
              <label htmlFor="">Numero de radicacion</label>
              <input
                type="text"
                name="datosPrincipales__numero"
                id="datosPrincipales__numero"
                placeholder="Número"
              />
              <label htmlFor="">Tipo de correspondencia</label>
              <select
                name="datosPrincipales__tipoCorres"
                id="datosPrincipales__tipoCorres"
              >
                <option value="0">Seleccione</option>
                <option value="1">Entrada</option>
                <option value="2">Salida</option>
              </select>
              <label htmlFor="">Medio de llegada </label>
              <select
                name="datosPrincipales__medio"
                id="datosPrincipales__medio"
              >
                <option value="0">Seleccione</option>
                <option value="1">Correo</option>
                <option value="2">Personal</option>
                <option value="3">Mensajero</option>
              </select>
              <select
                name="datosPrincipales__tipodocumental"
                id="datosPrincipales__tipodocumental"
              >
                <option value="0">Seleccione</option>
                <option value="1">Comunicado</option>
                <option value="2">Carta</option>
                <option value="3">Oficio</option>
                <option value="4">Memorando</option>
                <option value="5">Correo electronico</option>
                <option value="6">Facturas</option>
                <option value="7">Recibos</option>
              </select>
            </div>
          </div>
          <div className="contremitente">
            <div className="remitente">
              <h3>Datos del remitente</h3>
              <label htmlFor="">Nombres del remitente</label>
              <input
                type="text"
                name="remitente__nombres"
                id="remitente__nombres"
                placeholder="Nombres"
              />
              <label htmlFor="">Correo electronico del remitente</label>
              <input
                type="email"
                name="remitente__email"
                id="remitente__email"
                placeholder="Correo electrónico"
              />
              <label htmlFor="">Telefono del remitente</label>
              <input
                type="text"
                name="remitente__telefono"
                id="remitente__telefono"
                placeholder="Telefono"
              />
              <label htmlFor="">Tipo de identificacion del remitente</label>
              <select name="remitente__tipo_id" id="remitente__tipo_id">
                <option value="0">Seleccione</option>
                <option value="1">Cedula de ciudadania</option>
                <option value="2">Cedula de extranjeria</option>
                <option value="3">Pasaporte</option>
              </select>
              <label htmlFor="">Numero de identificacion del remitente</label>
              <input
                type="text"
                name="remitente__numero_id"
                id="remitente__numero_id"
                placeholder="Numero de identificacion"
              />
            </div>
          </div>
          <input
            id="btn_button"
            type="button"
            value="Siguiente"
            onClick={() => setStep("desti")}
          />
        </fieldset>
      </form>
    </>
  );
};

export default Rad_form;
