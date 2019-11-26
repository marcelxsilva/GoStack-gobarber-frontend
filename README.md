> ## Front-Endo GoBarber

GoBarber é uma aplicação para o agendamento de serviços em uma barbearia desenvolvida no GoStack da Rocketseat


> ## Framework utilizados

### unform
È  uma framework da rocketseat utilizada para controlar formularios de uma maneira simplificada, [Saiba mais](https://github.com/Rocketseat/unform)

### yup 
Utilizei o yup para realizar a validação de formularios na aplicação, com ele é facil exibir algumas informações caso os valores inseridos em um formulario não seja satisfatório, para validar as entradas na pagina de login o yup foi definido da seguinte forma:

```javascript

const schema = yup.object().shape({
  email: yup.string()
    .email('Tipo de E-mail Inválido')
    .required('E-mail obrigatório'),
  password: yup.string().required('Senha Obrigatória')
});

```

E este objeto schema é inserido como props do component Form do unform: 
```javascript
  <Form schema={schema} >
```

### immer
Ele nos ajuda a manipular nosso state facilmente, como mostrado no código abaixo:
```javascript
import produce from 'immer';

const INITIAL_STATE = {
  token: null,
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
      });
    default:
      return state;
  }
}
```

È claro que eu poderia simplesmente retornar um novo estado com todas as informações que foram recebidas pelo payload, mas em alguns casos isolados podemos precisar realizar algumas verificações antes de setar esse estado e o immer nos ajuda com isso.
 

### redux-persist
Utilizado para persistir valores do estado do redux em localstorage de forma simplificada.

### react-perfect-scrollbar
Utilizado para dar scrol no componente de notificação.

### date-fns
aqui utilizei para realizar o calculo do tempo que se passou após a emissao de uma notificação, p ex: esta notificação foi gerada há 2 minutos atras