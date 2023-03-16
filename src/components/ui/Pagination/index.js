

export default function Pagination({
    pageSize,
    page,
    totalCount,
    onPageSizeChange,
    onPageChange,
}) {

    const fromNumber = pageSize * (page - 1) + 1
    const toNumber = Math.min(fromNumber + pageSize - 1, totalCount)
    const pageSizes = [5, 10, 15, 20, 25, 50, 100]
    const totalPage = Math.ceil(totalCount / pageSize)

    function handlePageChange(event, p) {
        event.preventDefault()
        event.stopPropagation()
        onPageChange(p)
    }

    return (
        <div className="flex items-center justify-between bottom-0 bg-white py-2">
            <div className="text-xs text-slate-500 float-left ">
                <span>Showing {fromNumber} to {toNumber} of {totalCount} results </span>
            </div>
            <div className=" float-right flex space-x-4">
                <div>
                    <label className="text-xs text-slate-500 text-center">Per Page</label>
                </div>
                <div className="text-sm text-slate-500">
                    <select className="border border-slate-500 py-2 px-1 rounded-md text-xs" value={pageSize} onChange={(event) => onPageSizeChange(parseInt(event.target.value))}>
                        {pageSizes.map(size => (
                            <option key={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <div className=" bottom-0">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex items-center -space-x-px text-xs">
                            <li>
                                <a href="#" className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-md border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                </a>
                            </li>
                            {
                                [...Array(totalPage).keys()].map(index => (
                                    <li key={index}>
                                        {
                                            index + 1 == page ? <a href="#" onClick={event => handlePageChange(event, index + 1)} aria-current="page" className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{index + 1}</a> :
                                                <a href="#" onClick={event => handlePageChange(event, index + 1)} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{index + 1}</a>
                                        }
                                    </li>
                                ))
                            }
                            <li>
                                <a href="#" className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-md border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}