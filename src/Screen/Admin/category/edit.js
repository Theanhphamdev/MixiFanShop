import { useHistory, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getCate } from '../../../Api/CategoryApi';
import { useForm } from 'react-hook-form';

const FormEditCate = (props) => {
    const [category, setCategory] = useState({});
    const { id } = useParams();
    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    useEffect(() => {
        const getCategory = async () => {
        try {
            const { data } = await getCate(id);
            setCategory(data);
            reset(data);
        } catch (error) {}
        };
        getCategory();
    }, []);

    const onSubmit = (data) => {
        const fakeValue = {
        id: id,
        ...data
        };

        props.EditCate(fakeValue);
        history.push("/admin/categories");
    };
    return (
        <div>
            <h4>Edit Category</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        defaultValue={category.name}
                        {...register("name", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block text-danger mt-3">
                        This field is required
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        className="form-control"
                        // {...register("image")}
                        type="file" 
                        defaultValue={category.image}
                        />
                </div>
                <div className="mb-3">
                    <img src={category.image} width="200"/>
                </div>
                <button type="submit" className="btn btn-primary">
                Change
                </button>
            </form>
        </div>
    )
}

export default FormEditCate
