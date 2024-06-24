import styles from './NaoEncontrada.module.css'

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo não está disponível</p>
        </section>
    )
}

export default NaoEncontrada;