import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { client } from './lib/apollo';
import  Event from './pages/Event';

function App() {
    return (
        <>
            <Event />
        </>
    );
}

export default App;
