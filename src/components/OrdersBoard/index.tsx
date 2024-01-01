import { useState } from 'react';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer} from './styles';
import { Order } from '../../types/Order';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];

}
export function OrdersBoard({icon, title, orders}: OrdersBoardProps){
  const [isModalVisivle, setIsModalVible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order){
    setIsModalVible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal(){
    setIsModalVible(false);
    setSelectedOrder(null);
  }


  return (
    <Board>
      <OrderModal visible={isModalVisivle} order={selectedOrder} onClose={handleCloseModal}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <div key={order._id}>
              <button type='button' onClick={() => handleOpenModal(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            </div>
          ))}

        </OrdersContainer>
      )}
    </Board>
  );
}
