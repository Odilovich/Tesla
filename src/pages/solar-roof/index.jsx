import Corusel from "../../components/ui/carusel"
import ModelSimage from "../../assets/images/blue-modelS.png"
import ModelStext from "../../assets/images/Model-S-text.png"
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
