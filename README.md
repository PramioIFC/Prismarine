# Prismarine
## frase insana que nos representa

## Como usar

Certifique-se que está em **..\Prismarine**

```bash
npm install
```

e então

```bash
npm run dev
```

## API do formulário de contato

Em outro terminal, entre em `escolar`, instale as dependências e prepare o banco:

```bash
python -m venv venv
venv/Scripts/activate       # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

O site usa `http://127.0.0.1:8000/api/contact/` por padrão. Para outro ambiente, defina `VITE_CONTACT_API_URL` antes de iniciar o Vite. As mensagens ficam no SQLite e podem ser consultadas pelo Django Admin quando um superusuário for criado.
