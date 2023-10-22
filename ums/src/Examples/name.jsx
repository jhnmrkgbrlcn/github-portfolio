//jsx syntax
function user() {
  const name = {
    firstName: "Rolly",
    lastName: "Cueno",
  };

  const FormatName = (name) => {
    return name.firstName + " " + name.lastName;
  };

  return (
    <>
      <h1>I am {FormatName}</h1>
    </>
  );
}
