import Corusel from "../../components/ui/carusel"
import ModelSimage from "../../assets/images/White-ModelX.png"
import ModelStext from "../../assets/images/Model-X-text.png"
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
