const TodoList = ({ todos, deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="d-flex">
              <div className="text">
                <p>Title : {todo.title}</p>
                <p>Content : {todo.content}</p>
                <button className="btn btn-danger" onClick={() => deleteTodo(i)}>X</button>
              </div>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      <ul className="list-group">
        <li className="list-group-item">{todosList}</li>
      </ul>
      
    </div>
  );
};

export default TodoList;