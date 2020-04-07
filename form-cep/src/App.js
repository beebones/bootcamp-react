import React, { useState } from 'react';
import './App.css';

function App() {
  const [ endereco, setEndereco ] = useState({cep: "", logradouro: "", complemento: "", bairro: "", localidade: "", uf: "", unidade: ""});
	const recebeAPI = () => {
    console.log(endereco.cep)
		const URL_DA_API = 'http://viacep.com.br/ws/'+endereco.cep+'/json/';
		fetch(URL_DA_API)
			.then((res) => res.json())
			.then((data) => {
				setEndereco(data);
			})
			.catch((err) => console.log(err));
	};
	console.log(endereco);
	return (
		<div className="App">
			<form>
				<div className="form-input-container">
					<label className="input">Preencha o CEP corretamente</label>
					<input
						type="text"
            value={endereco.cep}
						onChange={(e) => {
              console.log(e);
              if(endereco.cep.length === 8) {
                recebeAPI()
              }
							setEndereco({
                ...endereco,
								cep: e.target.value
							});
						}}
					/>

					<label className="input">Endereço</label>
					<input
						type="text"
						value={endereco.logradouro}
						onChange={(e) => {
							console.log(e);
							setEndereco({
                ...endereco,
								logradouro: e.target.value
							});
						}}
					/>

					<label className="input">Complemento</label>
					<input
						type="text"
						value={endereco.complemento}
						onChange={(e) => {
							console.log(e);
							setEndereco({
                ...endereco,
								complemento: e.target.value
							});
						}}
					/>

					<label className="input">Bairro</label>
					<input
						type="text"
						value={endereco.bairro}
						onChange={(e) => {
							console.log(e);
							setEndereco({
                ...endereco,
								bairro: e.target.value
							});
						}}
					/>

					<label className="input">Localidade</label>
					<input
						type="text"
						value={endereco.localidade}
						onChange={(e) => {
							console.log(e);
							setEndereco({
                ...endereco,
								localidade: e.target.value
							});
						}}
					/>

					<label className="input">Estado</label>
					<input
						type="text"
						value={endereco.uf}
						onChange={(e) => {
							console.log(e);
							setEndereco({
                ...endereco,
								uf: e.target.value
							});
						}}
					/>

					<label className="input">Número</label>
					<input
						type="text"
						value={endereco.unidade}
						onChange={(e) => {
							console.log(e);
							setEndereco({
                ...endereco,
								unidade: e.target.value
							});
						}}
					/>
				</div>
			</form>
		</div>
	);
}

export default App;
