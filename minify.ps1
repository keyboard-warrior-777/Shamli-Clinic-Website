# Minify CSS & JS for Shamli Clinic Website
# Usage: .\minify.ps1

Write-Host "`n=== Shamli Clinic Minification ===" -ForegroundColor Cyan
Write-Host ""

# --- CSS ---
Write-Host "[CSS] Minifying style.css..." -ForegroundColor Yellow
npx -y clean-css-cli -o css/style.min.css css/style.css
Write-Host "[CSS] Minifying critical.css..." -ForegroundColor Yellow
npx -y clean-css-cli -o css/critical.min.css css/critical.css

# --- JS ---
Write-Host "[JS]  Minifying app.js..." -ForegroundColor Yellow
npx -y terser js/app.js -o js/app.min.js --compress --mangle
Write-Host "[JS]  Minifying main.js..." -ForegroundColor Yellow
npx -y terser js/main.js -o js/main.min.js --compress --mangle

# --- Report ---
Write-Host "`n=== Size Report ===" -ForegroundColor Green
$files = @(
    @("css/style.css",    "css/style.min.css"),
    @("css/critical.css", "css/critical.min.css"),
    @("js/app.js",        "js/app.min.js"),
    @("js/main.js",       "js/main.min.js")
)

$totalBefore = 0
$totalAfter = 0

foreach ($pair in $files) {
    $before = (Get-Item $pair[0]).Length
    $after  = (Get-Item $pair[1]).Length
    $saved  = [math]::Round((1 - $after/$before) * 100, 1)
    $totalBefore += $before
    $totalAfter  += $after
    Write-Host ("  {0,-22} {1,7:N1} KB -> {2,7:N1} KB  ({3}% smaller)" -f $pair[0], ($before/1024), ($after/1024), $saved)
}

$totalSaved = [math]::Round((1 - $totalAfter/$totalBefore) * 100, 1)
Write-Host ""
Write-Host ("  TOTAL                {0,7:N1} KB -> {1,7:N1} KB  ({2}% smaller)" -f ($totalBefore/1024), ($totalAfter/1024), $totalSaved) -ForegroundColor Green
Write-Host "`nDone! Commit the .min. files and push." -ForegroundColor Cyan
