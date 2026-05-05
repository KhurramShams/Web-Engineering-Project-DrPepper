export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'classic' | 'zero' | 'cherry' | 'limited';
  color: string;
  image: string;
  flavors: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'classic',
    name: 'Dr Pepper Classic',
    tagline: 'Always One of a Kind',
    description: 'The authentic blend of 23 flavors since 1885. It’s the soda that’s uniquely bold and refreshing.',
    category: 'classic',
    color: '#711F25',
    image: 'https://images.unsplash.com/photo-1527960471264-93ad936c8209?auto=format&fit=crop&q=80&w=800',
    flavors: ['Amaretto', 'Almond', 'Blackberry', 'Blackcurrant']
  },
  {
    id: 'diet',
    name: 'Diet Dr Pepper',
    tagline: 'Nothing Diet About It',
    description: 'Everything you love about Dr Pepper, with zero calories. The bold taste that won’t slow you down.',
    category: 'classic',
    color: '#9E9E9E',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&q=80&w=800',
    flavors: ['Ginger', 'Clove', 'Cherry', 'Vanilla']
  },
  {
    id: 'zero',
    name: 'Dr Pepper Zero Sugar',
    tagline: 'Zero Sugar, 23 Flavors',
    description: 'The newest way to experience the original 23 flavors without the sugar. Perfectly balanced, intensely refreshing.',
    category: 'zero',
    color: '#1A0D0E',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
    flavors: ['Caramel', 'Cola', 'Pepper', 'Juniper']
  },
  {
    id: 'cream-soda',
    name: 'Dr Pepper & Cream Soda',
    tagline: 'A Smooth Sensation',
    description: 'Where the 23 flavors of Dr Pepper meet the smooth, creamy taste of classic cream soda. It’s a flavor harmony.',
    category: 'cherry',
    color: '#E5B173',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800',
    flavors: ['Cream', 'Vanilla', 'Butterscotch', 'Malt']
  }
];
