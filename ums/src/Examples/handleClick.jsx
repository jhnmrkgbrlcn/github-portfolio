function handleClick() {
  const handleClick = (name) => {
    alert(`Ayaw ko kol,  ${name}`);
  };
  return (
    <button
      className="btn btn-success"
      onClick={() => handleClick("Cuenos, asdfas")}>
      TButton
    </button>
  );
}

export default handleClick;
