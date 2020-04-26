import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/dashboard">
                    <FiChevronsLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/19610095?s=460&u=871596faa48f02d9b589d1e072d6dca9f7dc265c&v=4" />

                    <div>
                        <strong>maiconrs95/maiconsilva</strong>
                        <p>descrição do repositório</p>
                    </div>
                </header>

                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link
                    key="repository.full_name"
                    to={`/repository/${'repository.full_name'}`}
                >
                    <div>
                        <strong>repository.owner.login</strong>
                        <p>repository.description</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
