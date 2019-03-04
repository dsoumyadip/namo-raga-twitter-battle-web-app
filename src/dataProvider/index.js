import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const uri = process.env.REACT_APP_API_URL + '/' + process.env.REACT_APP_API_ROUTE

const client = new ApolloClient({
    uri
})

const DataProvider = (props) => {
    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}

export default DataProvider
