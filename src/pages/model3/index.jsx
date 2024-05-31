import Corusel from "../../components/ui/carusel"
import ModelSimage from "../../assets/images/Red-Model3.png"
import ModelStext from "../../assets/images/Model-3-text.png"
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
