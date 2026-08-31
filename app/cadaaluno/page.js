export default function CadastroAluno() {
    return (
        <main>
            <h1>Cadastro de Aluno</h1>

            <form>

                <label>
                    Nome:
                    <input
                        type="text"
                        placeholder="Digite o nome do aluno"
                    />
                </label>

                <label>
                    E-mail:
                    <input
                        type="email"
                        placeholder="Digite o e-mail do aluno"
                    />
                </label>

                <label>
                    Data de nascimento:
                    <input type="date" />
                </label>

                <button type="submit">
                    Cadastrar aluno
                </button>

            </form>
        </main>
    );
}