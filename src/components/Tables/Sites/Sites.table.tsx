import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../../lib/store'
import { closeModal, openModal } from '../../../lib/store/slices/modal.slice'
import { removeSite } from '../../../lib/store/slices/path.slice'
import { IPath } from '../../../shared/types'
import DeleteAlert from '../../ConfirmAlerts/Delete.alert'

const NoDataRow: React.FC = () => {
  return (
    <tbody>
      <tr>
        <td colSpan={3} className="text-center">
          No data
        </td>
      </tr>
    </tbody>
  )
}

interface SiteRowsProps {
  data: IPath[]
}
const SitesRows: React.FC<SiteRowsProps> = ({ data }) => {
  const dispatch = useDispatch()

  const handleDelete = (slug: string) => {
    dispatch(removeSite(slug))
    dispatch(closeModal())
  }

  const confirmDelete = (slug: string, name: string) => {
    dispatch(
      openModal({
        title: 'Confirm',
        content: <DeleteAlert element={name} onConfirm={() => handleDelete(slug)} onCancel={() => dispatch(closeModal())} />,
      })
    )
  }

  return (
    <tbody>
      {data.map((elem, i) => (
        <tr key={i}>
          <td>{++i}</td>
          <td>
            <Link to={`/site/${elem.slug}`}>{elem.name}</Link>
          </td>
          <td>
            <Button size="sm" onClick={() => confirmDelete(elem.slug, elem.name)} variant={'danger'}>
              DELETE
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

const TableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th style={{ width: '10%' }}>#</th>
        <th>Site Name</th>
        <th style={{ width: '15%' }}>Actions</th>
      </tr>
    </thead>
  )
}

const SitesTable: React.FC = () => {
  const sites = useSelector((state: RootState) => state.path.value)
  return (
    <Table variant="dark" striped bordered hover>
      <TableHeader />
      {sites.length ? <SitesRows data={sites} /> : <NoDataRow />}
    </Table>
  )
}

export default SitesTable
