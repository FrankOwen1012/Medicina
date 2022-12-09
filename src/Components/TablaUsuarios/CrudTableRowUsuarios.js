import React from "react";

const CrudTableRowUsuarios = ({ el, setDataToEdit, deleteData }) => {
  let { id, Nombres, Apellidos, Correo, Password, RUC } = el;
  return (
    <tr>
      <th scope="row">{el.id}</th>
      <td>{Nombres}</td>
      <td>{Apellidos}</td>
      <td>{Correo}</td>
      <td>{Password}</td>
      <td>{RUC}</td>
      <th scope="col">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteData(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
          Eliminar
        </button>
      </th>
    </tr>
  );
};

export default CrudTableRowUsuarios;
