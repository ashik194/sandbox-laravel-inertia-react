import AdminDashabordView from '@/Components/Admin/AdminDashabordView'
import ClientList from '@/Components/Admin/ClientList'
import AdminLayout from '@/Layouts/AdminLayout'

export default function AdminPage() {
  return (
    <>
      <AdminLayout>
        <AdminDashabordView>
          <ClientList />
        </AdminDashabordView>
      </AdminLayout>
    </>
  )
}
