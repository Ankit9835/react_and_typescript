import Component from "./starter/02-props";

function App() {
  return (
    <main>
      <Component name='test' id={123} >
        content
      </Component>
      <Component name='test' id={123} >
      </Component>
    </main>
  );
}

export default App;
