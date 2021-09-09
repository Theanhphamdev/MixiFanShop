import React from 'react'
import HeaderCient from './../Component/Client/header'
import FooterClient from './../Component/Client/footer'


const ClientLayout = (props) => {
    return (
        <>
            <HeaderCient/>
            {props.children}
            <FooterClient/>
        </>
    )
}

export default ClientLayout
