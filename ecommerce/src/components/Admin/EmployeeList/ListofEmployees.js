import { deleteUser } from "../../../FirebaseCall";
const ListofEmployees = ({ users, employeeEdit, refreshList }) => {
  const editButtonHandler = (user) => {
    employeeEdit(user);
  };

  const onClickButtonHandler = (id) => {
    deleteUser(id);
    refreshList()
    
  };
  const usersFiltered = users.filter((user) => {
    return user.userCat === "employee";
  });
  return (
    <>
      {usersFiltered.map((user) => (
        <ul className="list-group " key={user.id}>
          <li className="list-group-item list-group-item-action d-flex flex-row justify-content-start d-flex">
            <ul className="list-group d-flex flex-row">
              <li className="list-group-item  m-1">{user.email}</li>
              <li className="list-group-item m-1">{user.password}</li>

              <button
                className="btn btn-primary m-1"
                onClick={() => editButtonHandler(user)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger m-1"
                onClick={() => onClickButtonHandler(user.id)}
              >
                Remover
              </button>
            </ul>
          </li>
        </ul>
      ))}
    </>
  );
};

export default ListofEmployees;
