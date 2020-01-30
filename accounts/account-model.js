const db = require("../data/dbConfig.js")

module.exports = {
    find,
    findBy,
    findById,
}
function find() {
    return db('accounts').select('id', 'name', 'budget');
}

function findBy(filter) {
    return db('accounts').where(filter);

}

function findById(id) {
    return db('accounts')
        .where({ id })
        .first();
}

async function add(account) {
    const [id] = await db('accounts').insert(account);
    return findById(id);
}

function update(id, changes) {
    return db('accounts')
        .where({ id })
        .update(changes, '*');
}

function remove(id) {
    return db('accounts')
        .where({ id })
        .del();
}