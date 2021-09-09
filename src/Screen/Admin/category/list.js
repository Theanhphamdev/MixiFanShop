import { Link } from "react-router-dom"

const ListCategory = (props) => {
  console.log(props)
    return (
        <>   
          <h4>List categories</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {props.categories.map((item,index) =>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td><img src={item.image} width="150" /></td>
                    <td>
                      <button onClick={() => props.DeleteCate(item.id)} className="btn btn-danger">Delete</button>
                      <Link to={`/admin/categories/${item.id}/edit`} className="btn btn-warning ml-1">Edit</Link>
                    </td>
                  </tr>
                ))}
                
                </tbody>
            </table>
            <Link className="btn btn-primary" to="/admin/categories/add">Create</Link>
          </div>
        </>
    )
}

export default ListCategory
