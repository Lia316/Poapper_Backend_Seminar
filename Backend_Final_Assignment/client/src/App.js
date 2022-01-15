import axios from "axios"
import {useEffect} from "react"
import './App.css';

function App() {
  const callApi = async() => {
    axios.get("/study").then((res) => console.log(res.data))
  }
  useEffect(() => {
    callApi()
  }, [])

  return (
    <div>test</div>
  );
}

export default App;
