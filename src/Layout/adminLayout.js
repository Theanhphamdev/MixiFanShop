import React from 'react'
import Header from '../Component/Admin/header';
import NavMain from '../Component/Admin/navmain';

const AdminLayout = (props) => {
    return (
        <>
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <NavMain></NavMain>
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <div className="mt-3">
                            {props.children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout