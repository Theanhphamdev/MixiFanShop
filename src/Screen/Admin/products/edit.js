import { useHistory, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import {get} from '../../../Api/ProductApi';
import { useForm } from 'react-hook-form';

const EditForm = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    useEffect(() => {
        const getProduct = async () => {
        try {
            const { data } = await get(id);
            setProduct(data);
            reset(data);
        } catch (error) {}
        };
        getProduct();
    }, []);

    const onSubmit = (data) => {
        const fakeValue = {
        id: id,
        ...data
        };

        props.onEdit(fakeValue);
        history.push("/admin/products");
    };
    return (
        <div>
            <h4>Edit product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        defaultValue={product.name}
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
                        defaultValue={product.price}
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
                        defaultValue={product.status}
                    >
                        <option value="0">Hết hàng</option>
                        <option value="1">Còn hàng</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        className="form-control"
                        // {...register("image")}
                        type="file" 
                        defaultValue={product.image}
                        />
                </div>
                <div className="mb-3">
                    <img src={product.image} width="200"/>
                </div>
                <button type="submit" className="btn btn-primary">
                Thêm sản phẩm
                </button>
            </form>
        </div>
    )
}

export default EditForm
