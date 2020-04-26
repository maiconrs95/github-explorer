import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [inputError, setInputError] = useState('');
    const [newRepository, setNewRepository] = useState('');

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        if (!newRepository || !newRepository.includes('/')) {
            setInputError('Digite um repositório válido.');

            return;
        }

        try {
            const { data: repository } = await api.get<Repository>(
                `/repos/${newRepository}`,
            );

            setRepositories([...repositories, repository]);
            setNewRepository('');
            setInputError('');
        } catch (err) {
            setInputError(`Erro ao buscar ${newRepository}.`);
        }
    }

    return (
        <>
            <img src={logoImg} alt="Github explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    placeholder="Digite o nome do repositório"
                    value={newRepository}
                    onChange={(e) => setNewRepository(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map((repository) => (
                    <a
                        key={repository.full_name}
                        href={`https://github.com/${repository.full_name}`}
                        target="blank"
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt="maicon silva"
                        />
                        <div>
                            <strong>{repository.owner.login}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
