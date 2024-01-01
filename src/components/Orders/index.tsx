import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    'id': '5454565',
    'table': '123',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1704138248408-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '4395843',
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1704138016196-coca-cola.png',
          'price': 7
        },
        'quantity': 2,
        '_id': '35454564'
      },

    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon='🕐'
        title='Lista de espera'
        orders={orders}
      />
      <OrdersBoard
        icon='👨‍🍳'
        title='Em preparação'
        orders={[]}
      />
      <OrdersBoard
        icon='✅'
        title='Pronto'
        orders={[]}
      />
    </Container>
  );
}
