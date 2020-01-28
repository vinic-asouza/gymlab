/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pt-br';
import MaterialTable from 'material-table';
import Fab from '@material-ui/core/Fab';
import { Add, AspectRatio, Visibility, Edit, Delete } from '@material-ui/icons';
import { MainContent, Actions } from '../../pages/_layouts/default/styles';
import api from '../../services/api';

// import InfoPessoa from './info';
// import CadastraPessoa from './store';
// import AtualizaPessoa from './update';
// import ExcluiPessoa from './delete';

export default function ListaPlanos() {
  const [planos, setPlanos] = useState([]);
  const [plnId, setPlanoId] = useState();
  const [auxComponent, setAuxComponent] = useState();
  const [detail, setDetail] = useState('');

  useEffect(() => {
    async function loadPlanos() {
      const res_planos = await api.get('planos');
      setPlanos(res_planos.data);
    }
    loadPlanos();
  }, [plnId]);

  // function storePessoa() {
  //   setDetail('store');
  // }
  // function infoPessoa(id) {
  //   setPessoaId(id);
  //   setDetail('info');
  // }
  // function updatePessoa(id) {
  //   setPessoaId(id);
  //   setDetail('update');
  // }

  function loadComponent() {
    switch (detail) {
      case 'info':
        // setAuxComponent(<InfoPessoa pssId={pssId} />);
        return '';
      case 'store':
        // setAuxComponent(<CadastraPessoa />);
        return '';
      case 'update':
        // setAuxComponent(<AtualizaPessoa pssId={pssId} />);
        return '';
      default:
        // setAuxComponent(<CadastraPessoa />);
        return '';
    }
  }

  useEffect(() => {
    loadComponent();
  }, [detail, plnId]);

  return (
    <>
      <MainContent grid="8">
        <Actions>
          <Fab size="small" aria-label="add"
          // onClick={() => storePessoa()}
          >
            <Add />
          </Fab>

          {/* <Link to="/viewusuarios">
            <Fab size="small" aria-label="add">
              <AspectRatio />
            </Fab>
          </Link> */}

          <h1>Alunos</h1>
        </Actions>

        <MaterialTable
          title="Registros:"
          columns={[
            { title: 'Código', field: 'id' },
            { title: 'Descricão', field: 'descricao' },
            { title: 'Valor', field: 'valor' },
            { title: 'Data do Cadastro', field: 'created_at' },
            { title: '', field: 'acoes' },
          ]}
          data={planos.map(plano => ({
            id: plano.id,
            descricao: plano.descricao,
            valor: plano.valor,
            created_at: moment(plano.created_at).calendar(),
            acoes: (
              <div>
                <button
                  type="button"
                  size="small"
                  aria-label="info"
                  // onClick={() => infoPessoa(pessoa.id)}
                >
                  <Visibility size="small" />
                </button>
                <button
                  type="button"
                  size="small"
                  aria-label="update"
                  // onClick={() => updatePessoa(pessoa.id)}
                >
                  <Edit size="small" />
                </button>

                {/* <ExcluiPessoa pssId={pessoa.id} /> */}
              </div>
            ),
          }))}
        />
      </MainContent>

      {auxComponent}
    </>
  );
}
