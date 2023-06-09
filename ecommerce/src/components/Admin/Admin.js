import React from "react";
const isAdmin = true
const Admin = () => {
  return (
    <div className="container p-4">
    <nav className="list-group h-100">
      <a className="list-group-item list-group-item-action d-flex flex-row justify-content-start" href="#!">
        Productos
      </a>

     {isAdmin && <a className="list-group-item list-group-item-action d-flex flex-row justify-content-start" href="#!">
        Usuarios
      </a>}

      <a className="list-group-item list-group-item-action d-flex flex-row justify-content-start" href="#!">
        Pedidos
      </a>
    </nav>
    <div>

    </div>
    </div>
  );
};

export default Admin;
