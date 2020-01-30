const express = require('express')
const router = require('express').Router();

const Accounts = require('./account-model');

function checkFor(prop) {
    return function (req, res, next) {
        req.body[prop]
            ? next()
            : res.status(400).json({ errorMessage: `required ${prop}` });
    }
}

router.get('/', (req, res, next) => {
    Accounts.find()
        .then(accounts => {
            accounts.length > 0
                ?
                res.status(200).json({ accounts })
                :
                res.status(400).json({ message: "There were no accounts found. Add some." });
        })
        .catch(err => {
            console.error('err:', err); res.status(500).json({ errorMessage: "There was an error on the server retrieving the Accounts." });
        });
});

router.get('/:id', (req, res, next) => {

    Accounts.findById(req.params.id)
        .then(account => res.status(200).json({ account }))
        .catch(err => {
            console.error("err:", err);
            res.status(500).json({ message: `There was an error retrieving the account with id:[${id}]` });
        });
});

router.post('/', checkFor('name'), checkFor('budget'), (req, res) => {
    Accounts.add(req.body)
        .then(hub => res.status(201).json(hub))
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error adding the Account' });
        });
});

router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const changes = req.body;
    (!changes.name && !changes.budget)
        ?
        res.status(400).json({ errorMessage: `Name or Budget field is required to update AccountId: [${id}]` })
        :
        Accounts.update(id, changes)
            .then(account => {
                account
                    ?
                    res.status(200).json({ account })
                    :
                    res.status(404).json({ message: `Account with id ${id} could not be found.` })
            })
            .catch(err => {
                console.error("err:", err);
                res.status(500).json({ errorMessage: `There was an error updating the Account with ID:[${id}].` });
            });

});


router.delete('/:id', (req, res) => {
    Accounts.remove(req.params.id)
        .then(count => {
            (count > 0)
                ?
                res.status(200).json({ message: 'The account has been nuked' })
                :
                res.status(404).json({ message: 'The account could not be found' })

        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error removing the account' });
        });
});

module.exports=router