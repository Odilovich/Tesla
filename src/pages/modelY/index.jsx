import Corusel from "../../components/ui/carusel"
import ModelSimage from "../../assets/images/black-ModelY.png"
import ModelStext from "../../assets/images/Model-Y-text.png"
import "./style.scss";

export default function index() {
  return (
    <>
      <section>
      <Corusel img={ModelSimage} text={ModelStext} />
      </section>
    </>
  )
}
