export function Delete({ vers, setVers }) {
  function deleteChecked() {
    setVers(vers.filter((item) => !item.completed));
  }
  return (
    <button className="btn btn-primary mb-6" onClick={deleteChecked}>
      Удалить выполненные
    </button>
  );
}
