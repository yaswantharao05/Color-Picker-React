import './App.css';
import F1 from './components/F1'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const colors = ["#fe0000","#00ff01","#0000fe","#ffff00","#ff00fe","#00ffff","#fea500","#81007f",
                  "#ffc0cb","#008001","#fe6347","#00cfd2","#8b4511","#ff8b00","#4682b4","#fed700"]
  return (
    <div>
      <F1 colors={colors}/>
    </div>
  );
}

export default App;
