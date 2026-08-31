import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="header-container">

                <Link href="/" className="logo">
                    <span className="logo-icon"> 🕷️ </span>

                    <div>
                        <h1>SESI & SENAI </h1>
                        <span>Sistema de Gestão Escolar</span>
                    </div>
                </Link>

                <nav>
                    <ul>

                        <li>
                            <Link href="/">
                                Início
                            </Link>
                        </li>

                        <li>
                            <Link href="/cadaluno">
                                Cadastro
                            </Link>
                        </li>

                        <li>
                            <Link href="/listaluno">
                                Alunos
                            </Link>
                        </li>

                        <li>
                            <Link href="/notaluno">
                                Notas
                            </Link>
                        </li>

                        <li>
                            <Link href="/listnota">
                                Lista de Notas
                            </Link>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    );
}