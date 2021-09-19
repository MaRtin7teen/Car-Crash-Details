import { Pagination } from 'antd';
import React from 'react'

const Paginate = ({totalPages, page, changePage}) => {

    const pageChanged = (num) => {
        console.log(num);
        changePage(num);
    }

    return (
        <Pagination defaultCurrent={page} total={totalPages} onChange={(num) => pageChanged(num)} showSizeChanger={false} />
    )
}

export default Paginate;