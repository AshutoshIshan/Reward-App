import React, { useState } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CustomerDetails from './CustomerDetails';

const ListWrapper = styled.div`
    padding:5px;
`
const ITEMS_PER_PAGE = 5;
const CustomerList = ({ customers }) => {
    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(customers.length / ITEMS_PER_PAGE)
    const paginatedCustomers = customers.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    ) 

    return (
        <ListWrapper>
            <h4 className='customer-reward'>All Customers</h4>
            <ul className='list-ul'>

                {
                    paginatedCustomers.map((customer) => (
                        <li key={customer.customerId}>
                            <button onClick={() => setSelectedCustomer(customer)}>
                                {customer.customerId}
                            </button>
                        </li>
                    ))
                }
            </ul>

            <div>
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <span style={{margin: '0 10px'}}>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>    

            {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
        </ListWrapper>
    )
}
CustomerList.propTypes = {
    customers: PropTypes.array.isRequired
}


export default CustomerList
