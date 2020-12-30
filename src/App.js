import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { listPeoples } from './actions/peopleAction'

const App = () => {
  const dispatch = useDispatch()

  const peopleList = useSelector((state) => state.peopleList)
  const { loading, error, peoples } = peopleList

  console.log(peoples)

  useEffect(() => {
    dispatch(listPeoples())
  }, [dispatch])
  return (
    <div className='App'>
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
      <h1>Working</h1>
      {/* <p>{peoples.count}</p> */}
    </div>
  );
}

export default App;
