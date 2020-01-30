const db = require("../data/dbConfig.js")

module.exportss = {
    add,
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