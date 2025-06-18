# ----------------------------
# launch-dev.ps1
# ----------------------------

if (-not (Get-Process -Name "Docker Desktop" -ErrorAction SilentlyContinue)) {
    Write-Host "[...] Starting Docker Desktop..."
    Start-Process "C:\Program Files\Docker\Docker\Docker Desktop.exe"
}
Write-Host "[OK] Docker Desktop is ready!"

if (-not (Get-Process -Name "Postman" -ErrorAction SilentlyContinue)) {
    Write-Host "[...] Starting Postman..."
    Start-Process "$env:LOCALAPPDATA\Postman\Postman.exe"
}
Write-Host "[OK] Postman is ready!"


if (-not (Get-Process -Name "Code" -ErrorAction SilentlyContinue)) {
    Write-Host "[...] Launching VS Code..."
    Start-Process "$env:LOCALAPPDATA\Programs\Microsoft VS Code\Code.exe" -WorkingDirectory "D:\SoftApp\lptcitms"
}
Write-Host "[OK] VS Code is ready!"

$dockerReady = $false
Write-Host "[...] Waiting for Docker to be ready..."
while (-not $dockerReady) {
    Start-Sleep -Seconds 3
    try {
        $info = docker info 2>$null | Out-String
        if ($info -match "Server Version") {
            $dockerReady = $true
        }
    } catch {}
}
Write-Host "[OK] Docker is ready!"

if (Test-Path $PROFILE) {
    . $PROFILE
}

Write-Host "[...] Launching new terminal for dcup..."
Start-Process pwsh -ArgumentList '-NoExit', '-ExecutionPolicy', 'Bypass', '-Command', 'cd "D:\SoftApp\lptcitms"; dcup'
Write-Host "[OK] Docker up is ready!"
Write-Host "[...] Waiting for lptcitms-client-1 and http://localhost:5173 ..."
$ready = $false
while (-not $ready) {
    Start-Sleep -Seconds 2
    $clientStatus = docker ps --filter "name=lptcitms-client-1" --format "{{.Status}}"
    if ($clientStatus -match "^Up") {
        try {
            $res = Invoke-WebRequest -Uri "http://localhost:5173" -UseBasicParsing -TimeoutSec 3
            if ($res.StatusCode -eq 200) {
                $ready = $true
            }
        } catch {}
    }
}
Write-Host "[OK] Frontend is ready at http://localhost:5173/"
Start-Process "http://localhost:5173/"

Write-Host "[OK] Development environment is ready!"
for ($i = 3; $i -ge 1; $i--) {
    Write-Host -NoNewline "`rThis window will close in $i second(s)..."
    Start-Sleep -Seconds 1
}
Stop-Process -Id $PID

