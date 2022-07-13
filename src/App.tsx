import "./index.css";
import { vzrosli, rebyonk } from "./data/data";
import Wheel from "./slider/Wheel";
function App() {
  return (
    <div className="contatiner">
      <div className="wrepper">
        <h1 className="title">А вдруг СМА?</h1>
        <p className="subtitle">Выберите, кто Ваш пациент:</p>

        <div className="cont">
          <div className="item">
            <h1 className="category">Взрослый</h1>

            {vzrosli.map((item, i) => {
              return (
                <div key={i}>
                  <div className="baner">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="info">{item.title}</div>
                </div>
              );
            })}
          </div>
          <div className="item">
            <h1 className="category">Ребенок</h1>
            {rebyonk.map((item, i) => {
              return (
                <div>
                  <div className="baner">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="info">{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <Wheel />
      </div>
    </div>
  );
}

export default App;
