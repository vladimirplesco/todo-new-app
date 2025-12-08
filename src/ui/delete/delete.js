export function Delete({ vers, setVers }) {
  function deleteChecked() {
    setVers(vers.filter((item) => !item.completed));
  }
  return (
    <button className="btn btn-primary" onClick={deleteChecked}>
      Удалить выполненные
    </button>
  );
}
