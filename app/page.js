import Image from "next/image";
import Link from "next/link";

import Header from "./components/header";

import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>

            <Header />

            <main>

                {/* ================= HERO ================= */}

                <section className={styles.hero}>

                    <div className={styles.heroContainer}>

                        <div className={styles.heroText}>

                            <span className={styles.tag}>
                                SISTEMA ESCOLAR SESI/SENAI
                            </span>

                            <h1>
                                Gestão escolar
                                <strong> simples e organizada.</strong>
                            </h1>

                            <p>
                                Uma plataforma desenvolvida para
                                facilitar o gerenciamento de alunos,
                                notas e informações acadêmicas.
                            </p>

                            <div className={styles.buttons}>

                                <Link
                                    href="/cadaluno"
                                    className={styles.primaryButton}
                                >
                                    Cadastrar aluno
                                </Link>

                                <Link
                                    href="/listaluno"
                                    className={styles.secondaryButton}
                                >
                                    Ver alunos
                                </Link>

                            </div>

                        </div>


                        <div className={styles.heroImage}>

                            <div className={styles.imageGlow}></div>

                            <div className={styles.imageCard}>

                                <Image
                                    src="/professores.png"
                                    alt="Professores da escola"
                                    width={1664}
                                    height={936}
                                    priority
                                />

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================= INTRODUÇÃO ================= */}

                <section className={styles.introduction}>

                    <div className={styles.introductionContainer}>

                        <span className={styles.sectionTag}>
                            PROJETO SESI/SENAI
                        </span>

                        <h2>
                            Tudo o que você precisa em um só lugar.
                        </h2>

                        <p>
                            O sistema foi desenvolvido para tornar
                            tarefas escolares mais práticas,
                            organizadas e acessíveis.
                        </p>

                    </div>

                </section>


                {/* ================= RECURSOS ================= */}

                <section className={styles.features}>

                    <div className={styles.featuresContainer}>

                        <div className={styles.featuresHeader}>

                            <span className={styles.sectionTag}>
                                ACESSO RÁPIDO
                            </span>

                            <h2>
                                O que você deseja fazer?
                            </h2>

                            <p>
                                Escolha uma das opções abaixo para
                                acessar as funcionalidades do sistema.
                            </p>

                        </div>


                        <div className={styles.cards}>

                            <Link
                                href="/cadaluno"
                                className={styles.card}
                            >

                                <span className={styles.cardNumber}>
                                    01
                                </span>

                                <div className={styles.cardIcon}>
                                    +
                                </div>

                                <h3>
                                    Cadastrar aluno
                                </h3>

                                <p>
                                    Adicione novos alunos ao
                                    sistema escolar.
                                </p>

                                <span className={styles.cardLink}>
                                    Acessar →
                                </span>

                            </Link>


                            <Link
                                href="/listaluno"
                                className={styles.card}
                            >

                                <span className={styles.cardNumber}>
                                    02
                                </span>

                                <div className={styles.cardIcon}>
                                    ≡
                                </div>

                                <h3>
                                    Lista de alunos
                                </h3>

                                <p>
                                    Consulte os alunos cadastrados
                                    no sistema.
                                </p>

                                <span className={styles.cardLink}>
                                    Acessar →
                                </span>

                            </Link>


                            <Link
                                href="/notaluno"
                                className={styles.card}
                            >

                                <span className={styles.cardNumber}>
                                    03
                                </span>

                                <div className={styles.cardIcon}>
                                    ✓
                                </div>

                                <h3>
                                    Cadastrar notas
                                </h3>

                                <p>
                                    Registre e atualize as notas
                                    dos alunos.
                                </p>

                                <span className={styles.cardLink}>
                                    Acessar →
                                </span>

                            </Link>


                            <Link
                                href="/listnota"
                                className={styles.card}
                            >

                                <span className={styles.cardNumber}>
                                    04
                                </span>

                                <div className={styles.cardIcon}>
                                    %
                                </div>

                                <h3>
                                    Lista de notas
                                </h3>

                                <p>
                                    Consulte o desempenho
                                    acadêmico dos alunos.
                                </p>

                                <span className={styles.cardLink}>
                                    Acessar →
                                </span>

                            </Link>

                        </div>

                    </div>

                </section>


                {/* ================= RODAPÉ DA HOME ================= */}

                <section className={styles.finalSection}>

                    <div>

                        <span className={styles.sectionTag}>
                            ESCOLA SESI/SENAI CE 323 MIRANDÓPOLIS
                        </span>

                        <h2>
                            Tecnologia para facilitar
                            a rotina escolar.
                        </h2>

                        <p>
                            Projeto desenvolvido por Arthur Amorim Tomazi,
                            sucessor de Vinícius Camargo e Marcelo Corrêa,
                            especialistas no desenvolvimento de sistemas.
                        </p>

                    </div>

                </section>

            </main>

        </div>
    );
}