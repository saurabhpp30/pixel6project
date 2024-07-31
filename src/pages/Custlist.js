import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Removelist } from '../store/createActions';


export const Custlist = ({ upDate, setUpdate, performTask, setTaskperform }) => {

  const customers = useSelector((state) => state.List.Customerlist)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleEdit = (id) => {
    const Updateperfomer = customers.find(evalu => evalu.id === id)
    Updateperfomer.sucess = true
    setUpdate(Updateperfomer)
    return navigate('/')
  };
  const handleDelete = (id) => {
    dispatch(Removelist(id))
  }

  return (
    <div className="p-8 bg-gray-130 min-h-screen">
    <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Customer List</h1>
    <div className="flex flex-wrap gap-6">
      {customers.length > 0 ? (
        customers.map((customer) => (
          <div key={customer.id} className="w-full sm:w-80 bg-white shadow-lg rounded-lg border border-gray-300 p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">{customer.name}</h2>
            <p className="text-gray-600 mb-2"><strong>PAN:</strong> {customer.pan}</p>
            <p className="text-gray-600 mb-2"><strong>Mobile:</strong> {customer.Monum}</p>
            <p className="text-gray-600 mb-4"><strong>Email:</strong> {customer.email}</p>
            <div className="mt-4">
              <strong className="block text-lg text-gray-800 mb-2">Addresses:</strong>
              {customer.add.length > 0 ? (
                <ul className="list-disc list-inside pl-5">
                  {customer.add.map((address) => (
                    <li key={address.id} className="mb-4">
                      <p className="text-gray-600"><strong>Address line 1:</strong> {address.add1}</p>
                      <p className="text-gray-600"><strong>Address line 2:</strong> {address.add2}</p>
                      <p className="text-gray-600"><strong>Zip/Postal code:</strong> {address.pin}</p>
                      <p className="text-gray-600"><strong>City:</strong> {address.city}</p>
                      <p className="text-gray-600"><strong>State/Province:</strong> {address.state}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No addresses available</p>
              )}
            </div>
            <div className="mt-4 flex gap-2">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={() => handleEdit(customer.id)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => handleDelete(customer.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No customers available</p>
      )}
    </div>
  </div>
  );
};

