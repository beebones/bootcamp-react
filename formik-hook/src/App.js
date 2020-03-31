import React from 'react';
import { ErrorMessage, Field, useFormik, FormikProvider } from 'formik';
import './App.css';
import * as Yup from 'yup'

function App() {

  const formikbag = useFormik({
    initialValues: {
      name: '',
      email: '',
      cpf: '',
      termos: false,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('campo nome é obrigatório'),
      email:Yup.string().email().required('insira um e-mail válido'),
      cpf: Yup.string().length(11).required('insira um cpf válido'),
      termos: Yup.bool().oneOf([true], 'Por favor, confirme que você não é um robô!')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  const { handleSubmit, values, setFieldValue } = formikbag;
  console.log('values', values);

  return (
    <div className="App">
      <FormikProvider value={formikbag}>
        <form onSubmit={handleSubmit}>
        <h3>Formulário com Formik</h3>
        <div>
            <Field className="Form-Field" placeholder="Nome*" name="name" />
            <ErrorMessage className="Form-Error" component="span" name="name" />
          </div>
          <div>
            <Field className="Form-Field" placeholder="Email*" name="email" />
            <ErrorMessage className="Form-Error" component="span" name="email" />
          </div>
          <div>
            <Field className="Form-Field" placeholder="CPF*" name="cpf" type="number" />
            <ErrorMessage className="Form-Error" component="span" name="cpf" />
          </div>
          <div>            
            <Field className="Form-Field" type="checkbox" checked= { values.termos }
            onChange={(e) => setFieldValue('termos', !values.termos)}/>
            <label htmlFor="">Não sou um robô</label>
            <ErrorMessage className="Form-Error" component="span" name="termos"/>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </FormikProvider>
    </div>
  );
}

export default App;
