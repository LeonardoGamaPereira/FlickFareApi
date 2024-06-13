import con from "./conection.js";

export async function salvarFilmes(filmes) {
    let comando = `
    insert into tb_filmes (nome_filme, genero_filme, lancamento_filme, img_filme) 
    values (?, ?, ?, ?)
    `

    let resp = await con.query(comando, [
        filmes.nome, 
        filmes.genero, 
        filmes.lancamento,
        filmes.img
    ])
    let info = resp[0];

    filmes.id = info.insertId;
    return filmes;
}

export async function listarFilmes () {
    let comando = `
    SELECT id_filmes    id,
           nome_filme  nome,
           genero_filme genero,
           lancamento_filme lancamento,
           img_filme   imagem
    FROM tb_filmes ORDER BY id_filmes DESC
    `;

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}

export async function listFilmesPerId(id) {
    let comando = `
    select 
           id_filmes    id,
           nome_filme  nome,
           genero_filme genero,
           lancamento_filme lancamento,
           img_filme   imagem
    from tb_filmes 
    where id_filmes = ?
    `;

    let resp = await con.query(comando, [id]);
    let linhas = resp[0];

    return linhas[0];
}

export async function deleteFilmes(id) {
    let comando = `
    delete from tb_filmes where id_filmes = ?
    `;

    let resp = await con.query(comando, [id]);
    let info = resp[0];

    return info.affectedRows;
}

export async function alterFilmes(filmes, id) {
    const comando = `
    update tb_filmes 
    set nome_filme = ?, 
        genero_filme = ?,
        lancamento_filme = ?,
        img_filme = ? 
        where id_filmes = ?
    `;

    try {
        const [rows] = await con.query(comando, [
            filmes.nome,
            filmes.genero,
            filmes.lancamento,
            filmes.img,
            id
        ]);
        return rows.affectedRows;
    } catch (err) {
        console.log("Erro ao atualizar o filme", err);
        throw err;
    }
}

export async function alterFilmesImage(id, caminho) {
    let comando = `
    update tb_filmes 
    set img_filme = ? 
    where id_filmes = ?
    `;

    let resp = await con.query (comando, [caminho, id]);
    let info = resp[0];

    return info.affectedRows;
}