import NavCom from 'compnents/NavCom';
import Welcome from 'pages/Welcome';

const App = () => {
  return (
    <>
      <NavCom />
      <div className="bg-black d-flex flex-column justify-content-center background">
        {/* <ResumePDF /> */}
        <Welcome />
      </div>
    </>
  );
};

export default App;
