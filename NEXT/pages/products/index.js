import Link from 'next/link'
import styles from '../../styles/MainContainer.module.css'

export default function Index() {
  return (
    <>
      <div className={styles.container}>
        <nav>
          <ul>
            <li>
              <Link href="/">Volta</Link>
            </li>
          </ul>
        </nav>

        <main>
          <h1>Pagina de Produtos</h1>
        </main>
      </div>
    </>
  )
}
