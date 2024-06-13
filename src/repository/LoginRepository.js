import con from "./conection.js";

export async function salvarLogin(login) {
    let comando = `
        INSERT INTO tb_login (nomeUsuario, senha)
        VALUES (?, ?);
    `;

    try {
        let resp = await con.query(comando, [login.nome, login.senha]);
        login.id = resp.insertId;
        return login;
    } catch (error) {
        console.error('Erro ao salvar login:', error);
        throw error;
    }
}

export async function listarLogins() {
    let comando = `
        SELECT * FROM tb_login;
    `;

    try {
        let resp = await con.query(comando, []);
        return resp[0];
    } catch (error) {
        console.error('Erro ao listar logins:', error);
        throw error;
    }
}

export async function buscarUsuario(login) {
    let comando = `
        SELECT * FROM tb_login WHERE nomeUsuario = ? AND senha = ?;
    `;

    try {
        let [linhas] = await con.query(comando, [login.nome, login.senha]);
        return linhas[0];
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        throw error;
    }
}


