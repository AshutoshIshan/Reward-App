import React, { useEffect, useState } from 'react'

const UseFetchCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setCustomers(data)
        console.log(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return { customers, loading, error }
}

export default UseFetchCustomers
