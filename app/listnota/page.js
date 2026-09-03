import Link from "next/link";
import Header from "../components/header";

import styles from "./page.module.css";


export default function ListaNotas() {

    return (
        <>
            <Header />

            <main className={styles.page}>

                {/* ================= CABEÇALHO ================= */}

                <section className={styles.pageHeader}>

                    <div>

                        <span className={styles.tag}>
                            NOTAS
                        </span>

                        <h1>
                            Lista de Notas
                        </h1>

                        <p>
                            Consulte as notas e trabalhos
                            registrados no sistema escolar.
                        </p>

                    </div>


                    <Link
                        href="/notaluno"
                        className={styles.button}
                    >
                        + Cadastrar notas
                    </Link>

                </section>


                {/* ================= TABELA ================= */}

                <section className={styles.tableCard}>

                    <div className={styles.tableHeader}>

                        <div>

                            <h2>
                                Notas dos alunos
                            </h2>

                            <p>
                                Consulte T1, T2, N1, N2 e N3.
                            </p>

                        </div>


                        <span className={styles.counter}>
                            1 aluno
                        </span>

                    </div>


                    <div className={styles.tableWrapper}>

                        <table>

                            <thead>

                                <tr>
                                    <th>Aluno</th>
                                    <th>T1</th>
                                    <th>T2</th>
                                    <th>N1</th>
                                    <th>N2</th>
                                    <th>N3</th>
                                </tr>

                            </thead>


                            <tbody>

                                <tr>

                                    <td>
                                        <strong>
                                            Arthur Amorim Tomazi
                                        </strong>
                                    </td>

                                    <td>
                                        8,0
                                    </td>

                                    <td>
                                        9,0
                                    </td>

                                    <td>
                                        7,5
                                    </td>

                                    <td>
                                        8,0
                                    </td>

                                    <td>
                                        9,0
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </section>

            </main>
        </>
    );
}