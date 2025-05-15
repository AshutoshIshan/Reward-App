import './App.css'
import CustomerList from './components/CustomerList'
import { CustomerContext } from './context/CustomerContext'
import UseFetchCustomers from './hooks/useFetchCustomers'
import GlobalStyles from './styles/GlobalStyles'
function App() {
  const {customers, loading, error} = UseFetchCustomers()
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <CustomerContext.Provider value={{customers}}>
        <div>
          <h3 className='customer-reward'>Customer Reward Points</h3>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && <CustomerList customers={customers}></CustomerList>}
        </div>
      </CustomerContext.Provider>
    </>
  )
}

export default App
