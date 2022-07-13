/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect, ChangeEvent } from 'react'
import { Table as AntdTable, Input } from 'antd';
import type { TablePaginationConfig, TableProps as AntdTableProps } from 'antd/lib/table';
import type { SorterResult, FilterValue } from 'antd/lib/table/interface';
import _ from 'lodash'
const { Search } = Input

export type TableColumns = {
  fieldName: string
  fieldLabel: string
  withSorter?: boolean
  render?: (field: any) => string
}[]

type PaginationProps = {
  page: number
  pageSize: number
}

type TableProps = {
  columns: TableColumns
  data: any
  total: number
  onChangeQueryString: (params: TableFetchParams) => void
  withSearch?: boolean
}

export interface TableFetchParams {
  page?: number
  pageSize?: number
  order?: string,
  direction?: 'asc' | 'desc'
  total?: number;
  search?: string
}

const formatColumns = (columns: TableColumns) => {
  const columnsFormatted = columns.map((column) => ({
    title: column.fieldLabel,
    dataIndex: column.fieldName,
    render: column.render,
    sorter: column.withSorter || false
  }))
  return columnsFormatted
}

const Table: React.FC<TableProps> = ({ columns, data, onChangeQueryString, withSearch = false, total }) => {
  const [pagination, setPagination] = useState<PaginationProps>({
    page: 1,
    pageSize: 10
  });
  const [sorter, setSorter] = useState<{
    order: string,
    direction: string
  }>()
  const [search, setSearch] = useState<string>()

  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<any>,
  ) => {

    if (sorter.field) {
      setSorter({
        order: sorter.field as string,
        direction: sorter.order === 'ascend' ? 'asc' : 'desc'
      })
    }

    setPagination({
      page: Number(newPagination.current),
      pageSize: Number(newPagination.pageSize),
    })
  };

  useEffect(() => {
    const params = {
      page: pagination.page,
      pageSize: pagination.pageSize,
      order: sorter?.order,
      direction: sorter?.direction as TableFetchParams['direction'],
      search
    }
    onChangeQueryString(params)

  }, [onChangeQueryString, pagination, sorter, search]);

  const onSearch = (value: string) => {
    setSearch(value)
  }

  const handleSearchChange = _.debounce(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value), 1000
  )

  return (
    <>
      {withSearch && (<Search allowClear onSearch={onSearch} onChange={handleSearchChange} placeholder="Search" style={{ marginBottom: '1rem' }} />)}
      <AntdTable
        columns={formatColumns(columns)}
        dataSource={data}
        onChange={handleTableChange as AntdTableProps<any>['onChange']}
        pagination={{ ...pagination, total }}
      />
    </>
  )
}

export default Table