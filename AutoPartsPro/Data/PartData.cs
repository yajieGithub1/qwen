using AutoPartsPro.Models;

namespace AutoPartsPro.Data;

public static class PartData
{
    public static readonly List<Part> All = new()
    {
        // Engine
        new() { Id = "1", Name = "高性能涡轮增压器", CategoryId = "engine", Description = "锻造铝合金壳体，提升30%动力输出", Price = "¥12,800", Emoji = "🔧", Tag = "热销" },
        new() { Id = "2", Name = "锻造活塞套件", CategoryId = "engine", Description = "高强度铝合金，耐高温高压", Price = "¥8,500", Emoji = "⚙️" },
        new() { Id = "3", Name = "碳纤维进气歧管", CategoryId = "engine", Description = "轻量化设计，优化进气效率", Price = "¥6,200", Emoji = "🌀" },
        new() { Id = "4", Name = "钛合金气门弹簧", CategoryId = "engine", Description = "高转速稳定性，延长使用寿命", Price = "¥3,800", Emoji = "🔩" },

        // Transmission
        new() { Id = "5", Name = "短行程换挡机构", CategoryId = "transmission", Description = "缩短40%换挡行程，操控更精准", Price = "¥4,500", Emoji = "🎯", Tag = "新品" },
        new() { Id = "6", Name = "强化离合器总成", CategoryId = "transmission", Description = "陶瓷摩擦片，承受高扭矩", Price = "¥9,200", Emoji = "⚡" },
        new() { Id = "7", Name = "限滑差速器", CategoryId = "transmission", Description = "机械式LSD，提升弯道性能", Price = "¥15,600", Emoji = "🏁" },

        // Brakes
        new() { Id = "8", Name = "碳陶瓷刹车盘", CategoryId = "brakes", Description = "耐高温1200°C，制动距离缩短20%", Price = "¥18,500", Emoji = "🛑", Tag = "热销" },
        new() { Id = "9", Name = "六活塞卡钳套件", CategoryId = "brakes", Description = "锻造铝合金，制动力均匀分布", Price = "¥22,000", Emoji = "🔴" },
        new() { Id = "10", Name = "不锈钢刹车油管", CategoryId = "brakes", Description = "编织钢网包裹，响应更灵敏", Price = "¥1,200", Emoji = "🔗" },

        // Suspension
        new() { Id = "11", Name = "可调式绞牙避震", CategoryId = "suspension", Description = "32段阻尼可调，适应不同路况", Price = "¥16,800", Emoji = "📐", Tag = "推荐" },
        new() { Id = "12", Name = "碳纤维防倾杆", CategoryId = "suspension", Description = "轻量化50%，减少车身侧倾", Price = "¥5,600", Emoji = "⚖️" },
        new() { Id = "13", Name = "可调式控制臂", CategoryId = "suspension", Description = "鱼眼轴承，精确调节悬挂几何", Price = "¥7,200", Emoji = "🔧" },

        // Exhaust
        new() { Id = "14", Name = "钛合金排气系统", CategoryId = "exhaust", Description = "减重40%，声浪浑厚激昂", Price = "¥28,000", Emoji = "💨", Tag = "高端" },
        new() { Id = "15", Name = "高流量催化器", CategoryId = "exhaust", Description = "200目蜂窝载体，排放达标", Price = "¥4,800", Emoji = "🌊" },
        new() { Id = "16", Name = "碳纤维尾喉", CategoryId = "exhaust", Description = "干碳工艺，耐高温不变色", Price = "¥2,400", Emoji = "⭕" },

        // Electrical
        new() { Id = "17", Name = "碳纤维ECU外壳", CategoryId = "electrical", Description = "散热优化，保护核心控制单元", Price = "¥3,200", Emoji = "💻" },
        new() { Id = "18", Name = "锂铁磷酸电池", CategoryId = "electrical", Description = "轻量化60%，启动电流强劲", Price = "¥6,800", Emoji = "🔋", Tag = "新品" },
        new() { Id = "19", Name = "碳纤维线束护板", CategoryId = "electrical", Description = "隔热阻燃，保护线束安全", Price = "¥1,800", Emoji = "🛡️" },

        // Body
        new() { Id = "20", Name = "碳纤维前唇", CategoryId = "body", Description = "干碳工艺，增加前轴下压力", Price = "¥8,600", Emoji = "🏎️", Tag = "热销" },
        new() { Id = "21", Name = "宽体翼子板套件", CategoryId = "body", Description = "FRP材质，完美贴合车身线条", Price = "¥12,000", Emoji = "🚗" },
        new() { Id = "22", Name = "碳纤维后扩散器", CategoryId = "body", Description = "优化底部气流，减少升力", Price = "¥9,800", Emoji = "✈️" },

        // Interior
        new() { Id = "23", Name = "Alcantara方向盘", CategoryId = "interior", Description = "意大利进口翻毛皮，手感极佳", Price = "¥5,200", Emoji = "🎮", Tag = "推荐" },
        new() { Id = "24", Name = "碳纤维座椅壳", CategoryId = "interior", Description = "FIA认证，轻量化桶椅", Price = "¥18,000", Emoji = "💺" },
        new() { Id = "25", Name = "钛合金踏板组", CategoryId = "interior", Description = "CNC精加工，防滑纹路设计", Price = "¥2,800", Emoji = "👟" },

        // Wheels
        new() { Id = "26", Name = "锻造铝合金轮毂", CategoryId = "wheels", Description = "单片式锻造，比铸造轻30%", Price = "¥4,800/只", Emoji = "⚙️", Tag = "热销" },
        new() { Id = "27", Name = "碳纤维轮毂盖", CategoryId = "wheels", Description = "降低风阻，提升散热效率", Price = "¥1,200/只", Emoji = "🔘" },
        new() { Id = "28", Name = "钛合金轮毂螺栓", CategoryId = "wheels", Description = "轻量化设计，每颗仅15g", Price = "¥680/套", Emoji = "🔩" },

        // Cooling
        new() { Id = "29", Name = "全铝加大水箱", CategoryId = "cooling", Description = "双排管芯，散热效率提升50%", Price = "¥3,600", Emoji = "🌡️" },
        new() { Id = "30", Name = "碳纤维进气风箱", CategoryId = "cooling", Description = "隔绝发动机舱热量，进气更冷", Price = "¥4,200", Emoji = "❄️", Tag = "新品" },
        new() { Id = "31", Name = "机油冷却器套件", CategoryId = "cooling", Description = "风冷+油冷双重散热方案", Price = "¥5,800", Emoji = "🛢️" },

        // Steering
        new() { Id = "32", Name = "快拆方向盘底座", CategoryId = "steering", Description = "航空铝合金，快拆便捷", Price = "¥2,200", Emoji = "🎡" },
        new() { Id = "33", Name = "可调式转向柱", CategoryId = "steering", Description = "多段可调，找到最佳驾驶姿态", Price = "¥3,800", Emoji = "📏" },

        // Intake
        new() { Id = "34", Name = "碳纤维冷进气套件", CategoryId = "intake", Description = "隔绝热源，提升进气密度", Price = "¥5,600", Emoji = "🌬️", Tag = "推荐" },
        new() { Id = "35", Name = "高流量空气滤芯", CategoryId = "intake", Description = "可清洗重复使用，过滤效率99%", Price = "¥880", Emoji = "🔲" },
        new() { Id = "36", Name = "碳纤维集风箱", CategoryId = "intake", Description = "增大进气截面积，减少阻力", Price = "¥3,200", Emoji = "📦" },
    };
}
