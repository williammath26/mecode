import axios from 'axios'

import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const result = await axios.get(
    'https://backendtalentos.herokuapp.com/listuser'
  )

  const dados = result.data.Sucess

  return {
    props: {
      dados: dados
    }
  }
}

export default function Users({ dados }) {
  return (
    <>
      <h1 className={styles.title}>Usuários do Banco de Talentos</h1>
      <fieldset className={styles.fieldset}>
        <h1>Tabela</h1>
        <table border="1" className={styles.tabela}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Usuário</td>
              <td>Email</td>
              <td>Tenant</td>
            </tr>
          </thead>
          <tbody>
            {dados.map(dados => (
              <tr>
                <td key={dados.id}>{dados.id}</td>
                <td key={dados.id}>{dados.user}</td>
                <td key={dados.id}>{dados.email}</td>
                <td key={dados.id}>{dados.tenant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </fieldset>
    </>
  )
}
