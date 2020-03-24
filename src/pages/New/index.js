import React, { useState, useMemo } from 'react';
import Button from '../../components/Button';
import camera from '../../assets/camera.svg';
import api from '../../services/api';

const New = ({ history }) => {
  const [thumbnail, setThumbnail] = useState('');
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(
    () => (thumbnail ? URL.createObjectURL(thumbnail) : null),
    [thumbnail]
  );

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const user_id = localStorage.getItem('user');
    const data = new FormData();
    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    await api.post('/spots', data, {
      headers: {
        user_id
      }
    });

    history.push('/dashboard');
  };

  return (
    <form className="new" onSubmit={(event) => onFormSubmit(event)}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'thumbnail thumbnail--active' : 'thumbnail'}
      >
        <input
          type="file"
          onChange={(event) => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="company">Empresa *</label>
      <input
        id="company"
        placeholder="Sua empresa está incrível"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />

      <label htmlFor="techs">
        Tecnologias *<span> separadas por vírgula</span>
      </label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={(event) => setTechs(event.target.value)}
      />

      <label htmlFor="price">
        Valor da Diária *<span> (em branco para GRATUITO)</span>
      </label>
      <input
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <Button modifier="feature">Cadastrar</Button>
    </form>
  );
};

export default New;
