import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="test">
                    <img
                        src="https://avatars3.githubusercontent.com/u/19610095?s=460&u=871596faa48f02d9b589d1e072d6dca9f7dc265c&v=4"
                        alt="maicon silva"
                    />
                    <div>
                        <strong>Maicon Silva</strong>
                        <p>subtitle</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
