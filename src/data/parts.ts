export interface Part {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

export const parts: Part[] = [
  // Engine
  { id: '1', name: '高性能涡轮增压器', category: 'engine', description: '锻造铝合金壳体，提升30%动力输出', price: '¥12,800', image: '🔧', tag: '热销' },
  { id: '2', name: '锻造活塞套件', category: 'engine', description: '高强度铝合金，耐高温高压', price: '¥8,500', image: '⚙️' },
  { id: '3', name: '碳纤维进气歧管', category: 'engine', description: '轻量化设计，优化进气效率', price: '¥6,200', image: '🌀' },
  { id: '4', name: '钛合金气门弹簧', category: 'engine', description: '高转速稳定性，延长使用寿命', price: '¥3,800', image: '🔩' },

  // Transmission
  { id: '5', name: '短行程换挡机构', category: 'transmission', description: '缩短40%换挡行程，操控更精准', price: '¥4,500', image: '🎯', tag: '新品' },
  { id: '6', name: '强化离合器总成', category: 'transmission', description: '陶瓷摩擦片，承受高扭矩', price: '¥9,200', image: '⚡' },
  { id: '7', name: '限滑差速器', category: 'transmission', description: '机械式LSD，提升弯道性能', price: '¥15,600', image: '🏁' },

  // Brakes
  { id: '8', name: '碳陶瓷刹车盘', category: 'brakes', description: '耐高温1200°C，制动距离缩短20%', price: '¥18,500', image: '🛑', tag: '热销' },
  { id: '9', name: '六活塞卡钳套件', category: 'brakes', description: '锻造铝合金，制动力均匀分布', price: '¥22,000', image: '🔴' },
  { id: '10', name: '不锈钢刹车油管', category: 'brakes', description: '编织钢网包裹，响应更灵敏', price: '¥1,200', image: '🔗' },

  // Suspension
  { id: '11', name: '可调式绞牙避震', category: 'suspension', description: '32段阻尼可调，适应不同路况', price: '¥16,800', image: '📐', tag: '推荐' },
  { id: '12', name: '碳纤维防倾杆', category: 'suspension', description: '轻量化50%，减少车身侧倾', price: '¥5,600', image: '⚖️' },
  { id: '13', name: '可调式控制臂', category: 'suspension', description: '鱼眼轴承，精确调节悬挂几何', price: '¥7,200', image: '🔧' },

  // Exhaust
  { id: '14', name: '钛合金排气系统', category: 'exhaust', description: '减重40%，声浪浑厚激昂', price: '¥28,000', image: '💨', tag: '高端' },
  { id: '15', name: '高流量催化器', category: 'exhaust', description: '200目蜂窝载体，排放达标', price: '¥4,800', image: '🌊' },
  { id: '16', name: '碳纤维尾喉', category: 'exhaust', description: '干碳工艺，耐高温不变色', price: '¥2,400', image: '⭕' },

  // Electrical
  { id: '17', name: '碳纤维ECU外壳', category: 'electrical', description: '散热优化，保护核心控制单元', price: '¥3,200', image: '💻' },
  { id: '18', name: '锂铁磷酸电池', category: 'electrical', description: '轻量化60%，启动电流强劲', price: '¥6,800', image: '🔋', tag: '新品' },
  { id: '19', name: '碳纤维线束护板', category: 'electrical', description: '隔热阻燃，保护线束安全', price: '¥1,800', image: '🛡️' },

  // Body
  { id: '20', name: '碳纤维前唇', category: 'body', description: '干碳工艺，增加前轴下压力', price: '¥8,600', image: '🏎️', tag: '热销' },
  { id: '21', name: '宽体翼子板套件', category: 'body', description: 'FRP材质，完美贴合车身线条', price: '¥12,000', image: '🚗' },
  { id: '22', name: '碳纤维后扩散器', category: 'body', description: '优化底部气流，减少升力', price: '¥9,800', image: '✈️' },

  // Interior
  { id: '23', name: 'Alcantara方向盘', category: 'interior', description: '意大利进口翻毛皮，手感极佳', price: '¥5,200', image: '🎮', tag: '推荐' },
  { id: '24', name: '碳纤维座椅壳', category: 'interior', description: 'FIA认证，轻量化桶椅', price: '¥18,000', image: '💺' },
  { id: '25', name: '钛合金踏板组', category: 'interior', description: 'CNC精加工，防滑纹路设计', price: '¥2,800', image: '👟' },

  // Wheels
  { id: '26', name: '锻造铝合金轮毂', category: 'wheels', description: '单片式锻造，比铸造轻30%', price: '¥4,800/只', image: '⚙️', tag: '热销' },
  { id: '27', name: '碳纤维轮毂盖', category: 'wheels', description: '降低风阻，提升散热效率', price: '¥1,200/只', image: '🔘' },
  { id: '28', name: '钛合金轮毂螺栓', category: 'wheels', description: '轻量化设计，每颗仅15g', price: '¥680/套', image: '🔩' },

  // Cooling
  { id: '29', name: '全铝加大水箱', category: 'cooling', description: '双排管芯，散热效率提升50%', price: '¥3,600', image: '🌡️' },
  { id: '30', name: '碳纤维进气风箱', category: 'cooling', description: '隔绝发动机舱热量，进气更冷', price: '¥4,200', image: '❄️', tag: '新品' },
  { id: '31', name: '机油冷却器套件', category: 'cooling', description: '风冷+油冷双重散热方案', price: '¥5,800', image: '🛢️' },

  // Steering
  { id: '32', name: '快拆方向盘底座', category: 'steering', description: '航空铝合金，快拆便捷', price: '¥2,200', image: '🎡' },
  { id: '33', name: '可调式转向柱', category: 'steering', description: '多段可调，找到最佳驾驶姿态', price: '¥3,800', image: '📏' },

  // Intake
  { id: '34', name: '碳纤维冷进气套件', category: 'intake', description: '隔绝热源，提升进气密度', price: '¥5,600', image: '🌬️', tag: '推荐' },
  { id: '35', name: '高流量空气滤芯', category: 'intake', description: '可清洗重复使用，过滤效率99%', price: '¥880', image: '🔲' },
  { id: '36', name: '碳纤维集风箱', category: 'intake', description: '增大进气截面积，减少阻力', price: '¥3,200', image: '📦' },
];
