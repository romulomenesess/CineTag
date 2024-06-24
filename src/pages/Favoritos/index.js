import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import styles from "./Favoritos.module.css";

function Favoritos () {
    <>
    <Banner imagem='favorito' />
    <Titulo>
        <h1>Meus favoritos</h1>
    </Titulo>
    <section className={styles.container}>
        <Card id='1' titulo='Gato bonifácio' capa='' />
    </section>
    </>
}

export default Favoritos; 