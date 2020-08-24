const crud = require('../model/crud.model');
const mongoose = require('mongoose');


// add car and its features 
const getCrud = function (data) {
    return new Promise((resolve, reject) => {
        crud.find({})
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
    })
};

// add car and its features 
const postCrud = function (data) {
    return new Promise((resolve, reject) => {
        const Crud = new crud({
            title: data.title,
            description: data.description,
            published: data.published ? data.published : false
        });

        // Save Car in the database
        Crud.save()
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
    })
};

// add car and its features 
const updateCrud = function (data) {
    return new Promise((resolve, reject) => {
        crud.findByIdAndUpdate(data.id, {
            id: data.id,
            title: data.title,
            description: data.description,
            published: data.published
        })
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
    })
};

// add car and its features 
const deleteCrud = function (data) {
    return new Promise((resolve, reject) => {
        crud.findByIdAndDelete(data.id)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
    })
};


const crudController = {
    getCrud,
    postCrud,
    updateCrud,
    deleteCrud
}

module.exports = crudController;