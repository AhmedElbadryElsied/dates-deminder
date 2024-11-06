import { Container } from "react-bootstrap";
import Title from "./Title";
import Reactangle from "./Reactangle";
import Action from "./Action";
import { useState } from "react";
import data from "./Json";

function App() {
  const [dataTime, setDataTime] = useState(data);

  const onDelete = () => {
    setDataTime([]);
  };
  const onShow = () => {
    setDataTime(data);
  };

  return (
    <div className="font color-body">
      <Container className="py-5">
        <Title data={dataTime} />
        <Reactangle data={dataTime}/>
        <Action deleteData={onDelete}  showData={onShow}/>
      </Container>
    </div>
  );
}

export default App;
