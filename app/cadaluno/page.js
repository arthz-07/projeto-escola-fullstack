'use client';

import { useState } from "react";
import Header from "../components/header";
import styles from "./page.module.css";


export default function CadastroAluno() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');


    return (
        <>
            <Header />


            <main className={styles.page}>

                {/*=== CABEÇALHO ===*/}

                <div className={styles.pageHeader}>

                    <span className={styles.tag}>
                        CADASTRO SESI/SENAI
                    </span>

                    <h1>
                        Cadastro de Aluno
                    </h1>

                    <p>
                        Preencha as informações abaixo para
                        adicionar um novo aluno ao sistema escolar.
                    </p>

                </div>



                {/*=== FORMULÁRIO ===*/}

                <section className={styles.formCard}>


                    <div className={styles.formTitle}>

                        <h2>
                            Informações do aluno
                        </h2>

                        <p>
                            Informe os dados necessários para realizar o cadastro.
                        </p>

                    </div>


                    <form className={styles.form} action="">




                        {/*=== NOME ===*/}

                        <div className={styles.field}>

                            <label htmlFor="nome">
                                Nome completo
                            </label>

                            <input
                                id="nome"
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Digite o nome completo do aluno"
                            />

                        </div>



                        {/*=== E-MAIL ===*/}

                        <div className={styles.field}>

                            <label htmlFor="email">
                                E-mail
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite o e-mail do aluno"
                            />

                        </div>



                        {/*=== DATA + SÉRIE ===*/}

                        <div className={styles.row}>


                            <div className={styles.field}>

                                <label htmlFor="dataNascimento">
                                    Data de nascimento
                                </label>

                                <input
                                    id="dataNascimento"
                                    type="date"
                                    value={dataNascimento}
                                    onChange={(e) => setDataNascimento(e.target.value)}
                                />

                            </div>


                            <div className={styles.field}>

                                <label htmlFor="serie">
                                    Série / Ano
                                </label>

                                <input
                                    id="serie"
                                    type="text"
                                    value={serie}
                                    onChange={(e) => setSerie(e.target.value)}
                                    placeholder="Ex.: 3º A EM"
                                />

                            </div>


                        </div>



                        {/*=== RA ===*/}

                        <div className={styles.field}>

                            <label htmlFor="ra">
                                Registro do Aluno (RA)
                            </label>

                            <input
                                id="ra"
                                type="number"
                                value={ra}
                                onChange={(e) => setRa(e.target.value)}
                                placeholder="Digite o RA do aluno"
                            />

                        </div>


                        {/*=== BOTÃO ===*/}

                        <div className={styles.buttonContainer}>

                            <button
                                type="submit"
                                className={styles.button}
                            >
                                Cadastrar aluno
                            </button>

                        </div>


                    </form>

                </section>

            </main>

        </>
    );
}