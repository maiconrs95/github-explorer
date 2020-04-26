import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const repositoriesStorage = localStorage.getItem(
            '@githubExplorer:repositories',
        );

        if (repositoriesStorage) {
            return JSON.parse(repositoriesStorage);
        }

        return [];
    });
    const [inputError, setInputError] = useState('');
    const [newRepository, setNewRepository] = useState('');

    useEffect(() => {
        localStorage.setItem(
            '@githubExplorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

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
                    <Link
                        key={repository.full_name}
                        to={`/repository/${repository.full_name}`}
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
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
