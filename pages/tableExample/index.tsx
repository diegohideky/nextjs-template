import type { NextPage } from 'next'
import Head from 'next/head'
import withMainMenu from '../../HOCS/withMainMenu'
import { Table } from '../../components'
import { TableColumns, TableFetchParams } from '../../components/Table'
import { useCallback, useEffect, useState } from 'react'
import qs from 'qs'

const columns: TableColumns = [
  {
    fieldLabel: "Nome",
    fieldName: "name",
    withSorter: true,
    render: name => `${name.first} ${name.last}`
  },
  {
    fieldLabel: "Gênero",
    fieldName: "gender",
  },
  {
    fieldLabel: "Email",
    fieldName: "email",
  }
]

const Home: NextPage = () => {
  const [total, setTotal] = useState(0)
  const [data, setData] = useState([])
  const [queryString, setQueryString] = useState("")

  const fetchData = useCallback(async (queryString: string) => {
    fetch(`https://randomuser.me/api?results=200&${queryString}`)
      .then(res => res.json())
      .then(({ results, total }) => {
        setData(results)
        setTotal(100) // Change to correct total according to api response
      });
  }, [])

  const onChangeQueryString = (params: TableFetchParams) => {
    const queryString = qs.stringify(params)
    setQueryString(queryString)
  }

  useEffect(() => {
    fetchData(queryString)
  }, [fetchData, queryString])

  return (
    <div>
      <Head>
        <title>Tabela</title>
        <meta name="description" content="Welcome to Corelab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Table
        data={data}
        columns={columns}
        total={total}
        onChangeQueryString={onChangeQueryString}
        withSearch
      />
    </div>
  )
}

export default withMainMenu(Home)
