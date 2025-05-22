import requests

BASE_URL = "http://localhost:3000"

def test_get_usuarios():
    response = requests.get(f"{BASE_URL}/usuarios")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_post_usuario():
    usuario = {"nome": "Teste", "email": "teste@email.com"}
    response = requests.post(f"{BASE_URL}/usuarios", json=usuario)
    assert response.status_code == 201
    data = response.json()
    assert data["nome"] == usuario["nome"]
    assert data["email"] == usuario["email"]
