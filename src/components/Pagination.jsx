import React from 'react'

const Pagination = ({ pageNo, setPageNo }) => {

    const prevTwoPage = Array.from({ length: 2 }, (_, index) => pageNo - 1 - index).filter((value) => value > 0).reverse();
    const nextTwoPage = Array.from({ length: 3 }, (_, index) => pageNo + index);

    const pagesArr = [...prevTwoPage, ...nextTwoPage];

    return (
        <div>
            <button
                className='px-3 py-2 m-2 bg-green-600 text-white hover:scale-75'
                onClick={() => setPageNo(pageNo - 1)}
                disabled={pageNo === 1}
            >{"<"}
            </button>

            {pagesArr.map((page, index) => (
                <button
                    className={`px-3 rounded-md py-2 m-2 ${pageNo === page ? 'bg-white border text-black border-green-500' : 'bg-green-600 text-white'}`}
                    key={index}
                    onClick={() => setPageNo(page)}
                >{page}
                </button>
            ))}

            <button
                className='px-3 py-2 m-2 bg-green-600 text-white hover:scale-75'
                onClick={() => setPageNo(pageNo + 1)}
            >{">"}
            </button>
        </div>
    )
}

export default Pagination