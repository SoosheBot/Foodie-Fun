import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const DeleteReview = (props) => {
    const handleDelete = e => {
        e.preventDefault();
        axiosWithAuth()
        .delete()
        .then(res => {
            console.log('delete success', res);
        })
        .catch(err => {
            console.log('delete review', err)
        });
    };
};