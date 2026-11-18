# Prismarine

Site institucional da Prismarine, feito com React e Vite. O formulário de contato envia os dados para uma API Django, que os salva em um banco SQLite local.

## Requisitos

- Node.js e npm
- Python 3.12 ou superior

## Rodar localmente

Abra dois terminais na pasta do projeto (`Prismarine`).

### 1. Site

No primeiro terminal:

```powershell
npm ci
npm run dev
```

O Vite mostra o endereço do site no terminal, normalmente [http://localhost:5173/](http://localhost:5173/).

### 2. API de contato

No segundo terminal, prepare o ambiente Python e o banco:

```powershell
cd escolar
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
```

O comando `createsuperuser` pede um nome de usuário, e-mail e senha para o painel. Depois, inicie a API:

```powershell
python manage.py runserver 127.0.0.1:8000
```

No macOS ou Linux, ative o ambiente com `source .venv/bin/activate` em vez do comando `Activate.ps1`.

## Ver mensagens recebidas

Abra o [painel administrativo](http://127.0.0.1:8000/admin/) e entre com o usuário e a senha criados com `createsuperuser`. No painel, escolha **Contato → Contact messages**. O endereço direto da lista é [http://127.0.0.1:8000/admin/contato/contactmessage/](http://127.0.0.1:8000/admin/contato/contactmessage/).

Cada envio válido aparece com nome, e-mail, mensagem e data de recebimento. Os registros ficam em `escolar/db.sqlite3`; o formulário não envia e-mail. Faça backup desse arquivo para preservar as mensagens. Se o banco for apagado ou criado de novo, execute `python manage.py migrate` e crie novamente um superusuário.

## Configurar o endereço da API

Por padrão, o site envia o formulário para `http://127.0.0.1:8000/api/contact/`. Para usar outro endereço, defina `VITE_CONTACT_API_URL` antes de iniciar ou compilar o Vite, por exemplo:

```powershell
$env:VITE_CONTACT_API_URL = "https://seu-dominio.example/api/contact/"
npm run dev
```

O servidor Django também precisa permitir a origem do site na configuração de CORS. A configuração atual permite as origens locais `localhost:5173`, `localhost:5174` e `127.0.0.1:5173`.

## Observações para publicação

O `runserver` e o SQLite são adequados para desenvolvimento local. Em produção, publique a API e o site em serviços acessíveis, configure o endereço da API, CORS, `ALLOWED_HOSTS`, `DEBUG` e uma chave secreta segura. Crie um usuário administrativo com uma senha forte; não reutilize credenciais de desenvolvimento.
