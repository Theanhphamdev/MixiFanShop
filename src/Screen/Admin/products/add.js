import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import firebase from '../../../firebase';
const AddForm = (props) => {
    const history = useHistory();
        
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        const file = data.image[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function (){
            console.log('success upload')
            storageRef.getDownloadURL().then((url) => {
                console.log(url)
                const fakeValue = {
                    id: Math.random().toString(36).substring(6),
                    name: data.name,
                    price: data.price,
                    status: data.status,
                    category: data.category,
                    image: url
                }
                props.onAdd(fakeValue);
                history.push('/admin/products');
            })
        })
    };
    return (
        <div>
            <h4>Create product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("name", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block text-danger mt-3">
                        This field is required
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Giá sản phẩm</label>
                    <input
                        type="number"
                        className="form-control"
                        {...register("price", { required: true })}
                    />
                    {errors.price && (
                        <span className="d-block text-danger mt-3">
                        This field is required
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Tình trạng</label>
                    <select
                        className="form-control"
                        {...register("status")}
                        defaultValue="0"
                    >
                        <option value="0">Hết hàng</option>
                        <option value="1">Còn hàng</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Loai hang</label>
                    <select
                        className="form-control"
                        {...register("category")}
                        defaultValue="0"
                    >
                        {props.categories.map((item,index) =>(
                            <option value={item.id} key={index}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        className="form-control"
                        {...register("image")}
                        type="file" />
                </div>
                <button type="submit" className="btn btn-primary">create</button>
            </form>
        </div>
    )
}

export default AddForm
