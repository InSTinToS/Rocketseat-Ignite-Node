### Requisitos Rentx

---

#### Cadastro de carro

**RF**
Deve ser possível cadastrar um carro.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O Carro deve ser cadastrado com disponibilidade "true" por padrão.
Somente um usuário administrador pode cadastrar um carro.

---

#### Cadastro da imagens do carro

**RF**
Deve ser possível cadastrar a imagem carro.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
Somente um administrador pode cadastrar imagens para um carro.

**RNF**
Utilizar biblioteca multer para upload de arquivos.

---

#### Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
Duração do aluguel deve ter no mínimo 24 hora.
Não deve possível cadastrar mais de um aluguel para um carro ao mesmo tempo.
Não deve possível cadastrar mais de um aluguel para um usuário ao mesmo tempo.

---

#### Cadastro de especificação

**RF**
Deve ser possível cadastrar uma especificação para um carro.

**RN**
O carro precisa estar cadastrado.
Um carro não pode ter duas especificações iguais.
Somente um usuário administrador pode cadastrar uma especificação.

---

#### Listagem e filtros

**RF**

<details>
  <summary>Deve ser possível listar.</summary>
  
  <ul>
    <li>todas as especificações.</li>
    <li>todos os carros disponíveis.</li>
    <li>todas as categorias.</li>
  </ul> 
</details>

<details>
  <summary>Deve ser possível listar os carros filtrando por.</summary>
  
  <ul>
    <li>nome da categoria.</li>
    <li>marca.</li>
    <li>nome do carro.</li>
  </ul> 
</details>

<br/>

**RN**
Não é preciso estar autenticado.

**RF-2**

<details>
  <summary>Deve ser possível listar.</summary>
  
  <ul>
    <li>todos os carros.</li>
  </ul> 
</details>

<details>
  <summary>Deve ser possível listar os carros filtrando por.</summary>
  
  <ul>
    <li>disponibilidade</li>
    <li>nome da categoria.</li>
    <li>marca.</li>
    <li>nome do carro.</li>
  </ul> 
</details>

<br/>

**RN-2**
É preciso estar autenticado.
O usuário deve ser um administrador para listar e filtrar todos os carros.
