
# รอ Docker Desktop พร้อม
$dockerReady = $false
while (-not $dockerReady) {
    Write-Host "[...] Waiting for Docker Desktop to be ready..."
    Start-Sleep -Seconds 3

    try {
        $info = docker info 2>$null | Out-String
        if ($info -match "Server Version") {
            $dockerReady = $true
        }
    } catch {
        # ยังไม่พร้อม
    }
}
Write-Host "[OK] Docker is ready!"

# รัน dcu
. $PROFILE
cd "E:\SoftApp\lptcitms"
Write-Host "[...] Running dcu..."
dcu

# รอ container + web frontend พร้อม
$ready = $false
while (-not $ready) {
    Write-Host "[...] Waiting for lptcitms-client-1 and http://localhost:5173 ..."
    Start-Sleep -Seconds 2

    $clientStatus = docker ps --filter "name=lptcitms-client-1" --format "{{.Status}}"

    if ($clientStatus -match "^Up") {
        try {
            $res = Invoke-WebRequest -Uri "http://localhost:5173" -UseBasicParsing -TimeoutSec 3
            if ($res.StatusCode -eq 200) {
                $ready = $true
            }
        } catch {
            # ยังไม่พร้อม
        }
    }
}
Write-Host "[OK] Frontend is ready at http://localhost:5173/"

# เปิดเว็บใน browser เริ่มต้น
Start-Process "http://localhost:5173/"
