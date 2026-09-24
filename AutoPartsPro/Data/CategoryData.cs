using AutoPartsPro.Models;

namespace AutoPartsPro.Data;

public static class CategoryData
{
    public static readonly List<Category> All = new()
    {
        new() { Id = "engine", Name = "发动机", NameEn = "Engine", Color = "#FF6B6B", IconType = "engine" },
        new() { Id = "transmission", Name = "变速箱", NameEn = "Transmission", Color = "#4ECDC4", IconType = "transmission" },
        new() { Id = "brakes", Name = "制动系统", NameEn = "Brakes", Color = "#FFE66D", IconType = "brakes" },
        new() { Id = "suspension", Name = "悬挂系统", NameEn = "Suspension", Color = "#A8E6CF", IconType = "suspension" },
        new() { Id = "exhaust", Name = "排气系统", NameEn = "Exhaust", Color = "#FF8A5C", IconType = "exhaust" },
        new() { Id = "electrical", Name = "电气系统", NameEn = "Electrical", Color = "#6C5CE7", IconType = "electrical" },
        new() { Id = "body", Name = "车身外观", NameEn = "Body", Color = "#00B894", IconType = "body" },
        new() { Id = "interior", Name = "内饰", NameEn = "Interior", Color = "#E17055", IconType = "interior" },
        new() { Id = "wheels", Name = "轮毂轮胎", NameEn = "Wheels", Color = "#FDCB6E", IconType = "wheels" },
        new() { Id = "cooling", Name = "冷却系统", NameEn = "Cooling", Color = "#74B9FF", IconType = "cooling" },
        new() { Id = "steering", Name = "转向系统", NameEn = "Steering", Color = "#A29BFE", IconType = "steering" },
        new() { Id = "intake", Name = "进气系统", NameEn = "Intake", Color = "#55EFC4", IconType = "intake" },
    };
}
