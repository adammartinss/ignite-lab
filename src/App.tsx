import { ApolloProvider, gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { client } from './lib/apollo';
import Event from './pages/Event';
import Router from './Router';

function App() {
    return (
        <>
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <Router />
                </ApolloProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
