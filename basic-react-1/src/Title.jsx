function Title() {
  return <h1>Hi This is a Heading </h1>;
}

function Sum() {
  const a = 10;
  const b = 10;
  return <h2>Sum is {a + b}</h2>;
}
// export default Title;

// so using this below export method u can call multiple functions
export { Sum, Title };
