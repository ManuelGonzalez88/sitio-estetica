var pool = require('./bd');

async function getPromos() {

    var query = 'select * from promos order by id';
    var rows = await pool.query(query,);
    return rows;

}

async function insertPromos(obj) {
    try {
        var query = 'insert into promos set ?';
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deletePromoById(id) {
    var query = 'delete from promos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getPromosById(id) {
    var query = 'select * from promos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarPromo(obj, id) {
    try {
        var query = 'update promos set ? where id=?'
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}
module.exports = { getPromos, insertPromos, deletePromoById, getPromosById, modificarPromo}