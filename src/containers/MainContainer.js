import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { useQuery, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';


// import { RouteWithProps } from '../bin'

import {getGifs} from './gifReqs'
import { GifList } from '../components';

const queryClient = new QueryClient()

export function RQContainer() {

  const [queryType , setQueryType ] = useState(null)
  const {data, isFetching} = useQuery(['gifs', queryType ], getGifs, {enabled: !!queryType})

  return (

    <div>

      <div className='is-flex nowrap'>
        <button onClick={() => {
          setQueryType('trending')
        }}>Get Trending</button>
      </div>
      {isFetching && <p>Loading...</p>}
      {data && <GifList gifs={data.gifs} select={() => {}}/>}
    </div>
  )

}

export default function RQWrapper () {

  
  return (
    <QueryClientProvider client={queryClient}>
      <RQContainer/>
      <ReactQueryDevtools initialIsOpen/>
    </QueryClientProvider>
  )
}