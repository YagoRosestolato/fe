import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    'id': '5454565',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '23e4343',
          'price': 40,
        },
        'quantity': 3,
        'id': '4395843',
      },
      {
        'product': {
          'name': 'coca cola',
          'imagePath': '123432543.png',
          'price': 7
        },
      },
      {
        'quantity': 2,
        '_id': '35454564'
      }
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
