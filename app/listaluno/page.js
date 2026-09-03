'use client';

import Link from "next/link";
import Header from "../components/header";
import styles from "./page.module.css";


export default function ListaAluno() {

    return (
        <>
            <Header />

            <main className={styles.page}>

                {/*=== CABEÇALHO ===*/}

                <section className={styles.pageHeader}>

                    <div>

                        <span className={styles.tag}>
                            ALUNOS
                        </span>

                        <h1>
                            Lista de Alunos
                        </h1>

                        <p>
                            Consulte os alunos cadastrados
                            no sistema escolar.
                        </p>

                    </div>


                    <Link
                        href="/cadaluno"
                        className={styles.button}
                    >
                        + Cadastrar aluno
                    </Link>

                </section>


                {/*=== TABELA ===*/}

                <section className={styles.tableCard}>

                    <div className={styles.tableHeader}>

                        <div>

                            <h2>
                                Alunos cadastrados
                            </h2>

                            <p>
                                Informações dos alunos registrados no sistema.
                            </p>

                        </div>


                        <span className={styles.counter}>
                            3 alunos
                        </span>

                    </div>


                    <div className={styles.tableWrapper}>

                        <table>

                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Série</th>
                                    <th>RA</th>
                                </tr>

                            </thead>


                            <tbody>

                                <tr>
                                    <td>
                                        <span className={styles.id}>
                                            01
                                        </span>
                                    </td>

                                    <td>
                                        <strong>
                                            Arthur Amorim Tomazi
                                        </strong>
                                    </td>

                                    <td>
                                        16 anos
                                    </td>

                                    <td>
                                        3º A Ensino Médio
                                    </td>

                                    <td>
                                        <span className={styles.ra}>
                                            2648
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span className={styles.id}>
                                            02
                                        </span>
                                    </td>

                                    <td>
                                        <strong>
                                            Vinícius Camargo
                                        </strong>
                                    </td>

                                    <td>
                                        41 anos
                                    </td>

                                    <td>
                                        3º A Ensino Médio
                                    </td>

                                    <td>
                                        <span className={styles.ra}>
                                            3110
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span className={styles.id}>
                                            03
                                        </span>
                                    </td>

                                    <td>
                                        <strong>
                                            Marcelo Corrêa
                                        </strong>
                                    </td>

                                    <td>
                                        56 anos
                                    </td>

                                    <td>
                                        3º A Ensino Médio
                                    </td>

                                    <td>
                                        <span className={styles.ra}>
                                            0207
                                        </span>
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