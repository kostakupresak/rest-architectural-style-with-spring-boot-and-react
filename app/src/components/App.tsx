import Card from "./Card";

function App(): JSX.Element {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-10">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
