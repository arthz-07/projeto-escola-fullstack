'use client';

import { useState } from "react";
import Header from "../components/header";

import styles from "./page.module.css";


export default function NotaAluno() {

    const [aluno, setAluno] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');


    return (
        <>
            <Header />

            <main className={styles.page}>

                {/* ================= CABEÇALHO ================= */}

                <section className={styles.pageHeader}>

                    <span className={styles.tag}>
                        NOTAS
                    </span>

                    <h1>
                        Cadastro de Notas
                    </h1>

                    <p>
                        Registre as notas e trabalhos do aluno
                        no sistema escolar.
                    </p>

                </section>


                {/* ================= FORMULÁRIO ================= */}

                <section className={styles.formCard}>

                    <div className={styles.formTitle}>

                        <h2>
                            Informações das notas
                        </h2>

                        <p>
                            Preencha os dados abaixo para realizar o cadastro.
                        </p>

                    </div>


                    <form className={styles.form}>


                        {/* ================= ALUNO ================= */}

                        <div className={styles.field}>

                            <label htmlFor="aluno">
                                Aluno
                            </label>

                            <input
                                id="aluno"
                                type="text"
                                value={aluno}
                                onChange={(e) => setAluno(e.target.value)}
                                placeholder="Digite o nome do aluno"
                            />

                        </div>


                        {/* ================= T1 E T2 ================= */}

                        <div className={styles.workRow}>

                            <div className={styles.field}>

                                <label htmlFor="t1">
                                    T1
                                </label>

                                <input
                                    id="t1"
                                    type="number"
                                    value={t1}
                                    onChange={(e) => setT1(e.target.value)}
                                    placeholder="Trabalho 1"
                                />

                            </div>


                            <div className={styles.field}>

                                <label htmlFor="t2">
                                    T2
                                </label>

                                <input
                                    id="t2"
                                    type="number"
                                    value={t2}
                                    onChange={(e) => setT2(e.target.value)}
                                    placeholder="Trabalho 2"
                                />

                            </div>

                        </div>


                        {/* ================= N1, N2 E N3 ================= */}

                        <div className={styles.gradesRow}>

                            <div className={styles.field}>

                                <label htmlFor="n1">
                                    N1
                                </label>

                                <input
                                    id="n1"
                                    type="number"
                                    value={n1}
                                    onChange={(e) => setN1(e.target.value)}
                                    placeholder="Nota 1"
                                />

                            </div>


                            <div className={styles.field}>

                                <label htmlFor="n2">
                                    N2
                                </label>

                                <input
                                    id="n2"
                                    type="number"
                                    value={n2}
                                    onChange={(e) => setN2(e.target.value)}
                                    placeholder="Nota 2"
                                />

                            </div>


                            <div className={styles.field}>

                                <label htmlFor="n3">
                                    N3
                                </label>

                                <input
                                    id="n3"
                                    type="number"
                                    value={n3}
                                    onChange={(e) => setN3(e.target.value)}
                                    placeholder="Nota 3"
                                />

                            </div>

                        </div>


                        {/* ================= BOTÃO ================= */}

                        <div className={styles.buttonContainer}>

                            <button
                                type="submit"
                                className={styles.button}
                            >
                                Cadastrar notas
                            </button>

                        </div>


                    </form>

                </section>

            </main>
        </>
    );
}