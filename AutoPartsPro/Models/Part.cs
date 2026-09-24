namespace AutoPartsPro.Models;

public class Part
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string CategoryId { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Price { get; set; } = string.Empty;
    public string Emoji { get; set; } = "🔧";
    public string? Tag { get; set; }
}
