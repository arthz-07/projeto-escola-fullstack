import Header from "../components/header";

export default function Principal() {
    return (
        <>
            <Header />

            <main className="principal">

                {src="/professores.png"}

                <section className="hero">

                    <div className="hero-content">

                        <span className="hero-tag">
                            SISTEMA ESCOLAR DO SESI/SENAI
                        </span>

                        <h1>
                            Gestão escolar
                            <strong> simples e organizada.</strong>
                        </h1>

                        <p>
                            Bem-vindo ao sistema escolar da
                            SESI CE 323 Mirandópolis. Aqui você
                            pode gerenciar alunos, notas e
                            informações acadêmicas de forma
                            rápida e organizada.
                        </p>

                        <div className="hero-buttons">

                            <a href="/cadaluno">
                                Cadastrar aluno
                            </a>

                            <a
                                href="/listaluno"
                                className="secondary"
                            >
                                Ver alunos
                            </a>

                        </div>

                    </div>


                    <div className="hero-image">

                        <div className="image-card">

                            <img
                                src="/escola.jpg"
                                alt="Escola SESI de Mirandópolis"
                            />

                        </div>

                    </div>

                </section>


                {/* ACESSOS RÁPIDOS */}

                <section className="quick-access">

                    <div className="section-heading">

                        <span>
                            ACESSO RÁPIDO
                        </span>

                        <h2>
                            O que você deseja fazer?
                        </h2>

                        <p>
                            Escolha uma das opções para
                            acessar as funcionalidades do sistema.
                        </p>

                    </div>


                    <div className="cards">

                        <a
                            href="/cadaluno"
                            className="card"
                        >
                            <div className="card-icon">
                                +
                            </div>

                            <h3>
                                Cadastrar aluno
                            </h3>

                            <p>
                                Adicione um novo aluno
                                ao sistema escolar.
                            </p>

                            <span>
                                Acessar →
                            </span>
                        </a>


                        <a
                            href="/listaluno"
                            className="card"
                        >
                            <div className="card-icon">
                                ≡
                            </div>

                            <h3>
                                Lista de alunos
                            </h3>

                            <p>
                                Consulte os alunos
                                cadastrados no sistema.
                            </p>

                            <span>
                                Acessar →
                            </span>
                        </a>


                        <a
                            href="/notaluno"
                            className="card"
                        >
                            <div className="card-icon">
                                ✓
                            </div>

                            <h3>
                                Cadastrar notas
                            </h3>

                            <p>
                                Registre e atualize as
                                notas dos alunos.
                            </p>

                            <span>
                                Acessar →
                            </span>
                        </a>


                        <a
                            href="/listnota"
                            className="card"
                        >
                            <div className="card-icon">
                                %
                            </div>

                            <h3>
                                Lista de notas
                            </h3>

                            <p>
                                Consulte o desempenho
                                acadêmico dos alunos.
                            </p>

                            <span>
                                Acessar →
                            </span>
                        </a>

                    </div>

                </section>

            </main>
        </>
    );
}