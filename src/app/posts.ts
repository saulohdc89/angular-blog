export interface Post {
  id: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  content: string;
}

export const POSTS: Post[] = [
  {
    id: '1',
    category: 'Tecnologia',
    title: 'Como a Inteligência Artificial está mudando o desenvolvimento web',
    description: 'Um panorama sobre as principais mudanças que ferramentas de IA trouxeram para o dia a dia dos desenvolvedores.',
    author: 'Saulo',
    date: '21 de agosto de 2026',
    content: 'Nos últimos anos, ferramentas de IA passaram a fazer parte do fluxo diário de quem programa, acelerando desde a escrita de código até a revisão de bugs complexos.'
  },
  {
    id: '2',
    category: 'Design',
    title: '5 tendências de UI para 2027',
    description: '',
    author: 'Saulo',
    date: '18 de agosto de 2026',
    content: 'Interfaces mais minimalistas, tipografia expressiva e microinterações continuam sendo destaque entre os designers de produto.'
  },
  {
    id: '3',
    category: 'Carreira',
    title: 'Como migrar de Angular 14 para Angular 22',
    description: '',
    author: 'Saulo',
    date: '15 de agosto de 2026',
    content: 'A migração entre versões do Angular pode ser feita de forma incremental, especialmente com o auxílio do comando ng update.'
  },
  {
    id: '4',
    category: 'Tecnologia',
    title: 'Signals: o que muda na forma de programar em Angular',
    description: '',
    author: 'Saulo',
    date: '10 de agosto de 2026',
    content: 'Signals trazem uma forma mais explícita e performática de lidar com reatividade, eliminando boa parte da dependência do Zone.js.'
  }
];
