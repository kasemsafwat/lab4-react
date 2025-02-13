/* eslint-disable react/prop-types */

export default function Web({children}) {
  console.log(children);
  return (
    <div className="container">
      <h3>Web</h3>
      {children}
    </div>
  );
}
