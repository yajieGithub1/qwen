export interface Category {
  id: string;
  name: string;
  nameEn: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'engine',
    name: '发动机',
    nameEn: 'Engine',
    color: '#FF6B6B',
  },
  {
    id: 'transmission',
    name: '变速箱',
    nameEn: 'Transmission',
    color: '#4ECDC4',
  },
  {
    id: 'brakes',
    name: '制动系统',
    nameEn: 'Brakes',
    color: '#FFE66D',
  },
  {
    id: 'suspension',
    name: '悬挂系统',
    nameEn: 'Suspension',
    color: '#A8E6CF',
  },
  {
    id: 'exhaust',
    name: '排气系统',
    nameEn: 'Exhaust',
    color: '#FF8A5C',
  },
  {
    id: 'electrical',
    name: '电气系统',
    nameEn: 'Electrical',
    color: '#6C5CE7',
  },
  {
    id: 'body',
    name: '车身外观',
    nameEn: 'Body & Exterior',
    color: '#00B894',
  },
  {
    id: 'interior',
    name: '内饰',
    nameEn: 'Interior',
    color: '#E17055',
  },
  {
    id: 'wheels',
    name: '轮毂轮胎',
    nameEn: 'Wheels & Tires',
    color: '#FDCB6E',
  },
  {
    id: 'cooling',
    name: '冷却系统',
    nameEn: 'Cooling',
    color: '#74B9FF',
  },
  {
    id: 'steering',
    name: '转向系统',
    nameEn: 'Steering',
    color: '#A29BFE',
  },
  {
    id: 'intake',
    name: '进气系统',
    nameEn: 'Intake',
    color: '#55EFC4',
  },
];
