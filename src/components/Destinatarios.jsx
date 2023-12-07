const Destinatarios = () => {
  return (
    <>
      <h2>Radicación de correspondencia</h2>
      <form action="" autoComplete="off">
        <fieldset>
          <div className="contdatosdestinatario">
            <div className="datosdestinatario">
              <h3>Datos del destinatario</h3>
              <label htmlFor="">Nombres del destinatario</label>
              <input
                type="text"
                name="destinatario__nombres"
                id="destinatario__nombres"
                placeholder="Nombres"
              />
              <label htmlFor="">Correo electronico del destinatario</label>
              <input
                type="email"
                name="destinatario__email"
                id="destinatario__email"
                placeholder="Correo electrónico"
              />
              <label htmlFor="">Cargo del destinatario </label>
              <input
                type="text"
                name="destinatario__cargo"
                id="destinatario__cargo"
                placeholder="Cargo"
              />
            </div>
          </div>
          <div className="continformacioncorrespondencia">
            <div className="informacioncorrespondencia">
              <h3>Información de la correspondencia</h3>
              <label htmlFor="">Asunto</label>
              <input
                type="text"
                name="informacioncorrespondencia__asunto"
                id="informacioncorrespondencia__asunto"
                placeholder="Asunto"
              />
              <label htmlFor="">Contenido</label>
              <textarea
                name="informacioncorrespondencia__contenido"
                id="informacioncorrespondencia__contenido"
                cols="30"
                rows="10"
              ></textarea>
              <label htmlFor="">Numero de folios</label>
              <input
                type="number"
                name="informacioncorrespondencia__folios"
                id="informacioncorrespondencia__folios"
                placeholder="Folios"
              />
              <label htmlFor="">requiere respuesta</label>
              <select
                name="informacioncorrespondencia__requiereresp"
                id="informacioncorrespondencia__requiereresp"
              >
                <option value="0">Seleccione</option>
                <option value="1">Si</option>
                <option value="2">No</option>
              </select>
              <input
                type="button"
                value="Finalizar"
                onClick={() => {
                  alert(
                    "Su proceso se radico con exito, muchas gracias por usar nuestros servicios"
                  );
                  window.close();
                }}
              />
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Destinatarios;
