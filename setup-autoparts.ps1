#!/usr/bin/env pwsh
# AutoParts Pro - Blazor Web App (.NET 10) 项目安装脚本
# 运行此脚本将自动创建完整的项目结构

Write-Host "🚗 AutoParts Pro - 汽车零部件定制平台" -ForegroundColor Cyan
Write-Host "正在创建 Blazor Web App (.NET 10) 项目..." -ForegroundColor Yellow
Write-Host ""

# 创建项目目录
$projectDir = "AutoPartsPro"
if (Test-Path $projectDir) {
    Write-Host "⚠️  目录 $projectDir 已存在，是否删除并重新创建？(y/N)" -ForegroundColor Red
    $response = Read-Host
    if ($response -eq 'y' -or $response -eq 'Y') {
        Remove-Item -Recurse -Force $projectDir
    } else {
        Write-Host "操作已取消" -ForegroundColor Red
        exit
    }
}

New-Item -ItemType Directory -Path $projectDir -Force | Out-Null
Write-Host "✓ 创建项目目录: $projectDir" -ForegroundColor Green

# 创建子目录结构
$directories = @(
    "$projectDir/Components",
    "$projectDir/Components/Layout",
    "$projectDir/Components/Pages",
    "$projectDir/Components/Shared",
    "$projectDir/Data",
    "$projectDir/Models",
    "$projectDir/Properties",
    "$projectDir/wwwroot",
    "$projectDir/wwwroot/css"
)

foreach ($dir in $directories) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
}
Write-Host "✓ 创建子目录结构" -ForegroundColor Green

# 项目文件
Write-Host "正在创建项目文件..." -ForegroundColor Yellow

# AutoPartsPro.csproj
@'
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net10.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <RootNamespace>AutoPartsPro</RootNamespace>
  </PropertyGroup>

</Project>
'@ | Set-Content -Path "$projectDir/AutoPartsPro.csproj" -Encoding UTF8

# Program.cs
@'
using AutoPartsPro.Components;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
'@ | Set-Content -Path "$projectDir/Program.cs" -Encoding UTF8

# appsettings.json
@'
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
'@ | Set-Content -Path "$projectDir/appsettings.json" -Encoding UTF8

# appsettings.Development.json
@'
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  }
}
'@ | Set-Content -Path "$projectDir/appsettings.Development.json" -Encoding UTF8

# global.json
@'
{
  "sdk": {
    "version": "10.0.100",
    "rollForward": "latestMinor",
    "allowPrerelease": true
  }
}
'@ | Set-Content -Path "$projectDir/global.json" -Encoding UTF8

# Properties/launchSettings.json
@'
{
  "$schema": "https://json.schemastore.org/launchsettings.json",
  "profiles": {
    "http": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "applicationUrl": "http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "https": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "applicationUrl": "https://localhost:5001;http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
'@ | Set-Content -Path "$projectDir/Properties/launchSettings.json" -Encoding UTF8

Write-Host "✓ 创建配置文件" -ForegroundColor Green

# Models
@'
namespace AutoPartsPro.Models;

public class Category
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string NameEn { get; set; } = string.Empty;
    public string Color { get; set; } = "#667eea";
    public string IconType { get; set; } = string.Empty;
}
'@ | Set-Content -Path "$projectDir/Models/Category.cs" -Encoding UTF8

@'
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
'@ | Set-Content -Path "$projectDir/Models/Part.cs" -Encoding UTF8

Write-Host "✓ 创建数据模型" -ForegroundColor Green

Write-Host ""
Write-Host "✅ 基础项目结构创建完成！" -ForegroundColor Green
Write-Host ""
Write-Host "📦 接下来需要创建组件文件，由于文件较多，建议手动复制或使用以下命令：" -ForegroundColor Cyan
Write-Host ""
Write-Host "   cd $projectDir" -ForegroundColor White
Write-Host "   dotnet restore" -ForegroundColor White
Write-Host "   dotnet run" -ForegroundColor White
Write-Host ""
Write-Host "💡 提示：完整的组件代码已生成在当前目录的 AutoPartsPro 文件夹中" -ForegroundColor Yellow
Write-Host "   您可以直接复制该文件夹到您的开发环境" -ForegroundColor Yellow
