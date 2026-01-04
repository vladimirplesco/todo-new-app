export function Delete({ vers, setVers }) {
  function deleteChecked() {
    setVers(vers.filter((item) => !item.completed));
  }
  return (
    <button className="btn btn-warning mb-6 mx-auto block" onClick={deleteChecked}>
      Удалить выполненные
    </button>
  );
}
